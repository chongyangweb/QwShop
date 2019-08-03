<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\OrderPayLog;
use App\Model\Order;
use App\Model\UserExtend;
use App\Model\UserWechat;
use App\Model\BalanceLog;
use Pay;

class PayController extends BaseController
{

	// 回调地址
	public function index(Request $req,OrderPayLog $order_pay_log,Order $order){
		$order_no = $req->out_trade_no;
		// 如果商户号没传回来，肯定报错
		if(empty($order_no)){
			return;
		}

		// 获取订单信息
		$orderInfo = $order->where('order_no',$order_no)->first();

		$pay_type = 2;


		// 开启事务防止出错
		\DB::beginTransaction(); 
		try {
			// 根据类型来存储支付成功信息
			$orderPayLogData['user_id'] = $orderInfo['user_id'];
			$orderPayLogData['order_no'] = $order_no;
			$orderPayLogData['add_time'] = time(); // 加入时间
			
			$orderPayLogData['pay_no'] = $req->trade_no; // 支付宝订单号
			$orderPayLogData['is_type'] = 0; // 收入还是支出

			// 退款回调
			if(isset($req->refund_fee) && !empty($req->refund_fee)){
				$orderPayLogData['is_type'] = 1; 
			}

			$orderPayLogData['money'] = $req->total_amount; // 支付金额
			$orderPayLogData['software'] = 'alipay'; // 支付软件
			$orderPayLogData['return_code'] = $req->trade_status; // 业务结果
	

			$order_pay_log->insert($orderPayLogData);// 支付日志插入

			$balance = $orderInfo['price']-$orderPayLogData['money'];// 用户余额支付多少;

			// 准备修改订单信息
			

			$orderEditData['balance'] = $balance;
			$orderEditData['pay_type'] = $orderPayLogData['software'];
			$orderEditData['pay_time'] = $orderPayLogData['add_time'];
			$orderEditData['pay_status'] = 0;

			$pay_success = false; // 是否支付成功
			if($orderPayLogData['return_code'] == 'TRADE_SUCCESS' || $orderPayLogData['return_code'] == 'SUCCESS'){
				$pay_success = true;
			}
			if($pay_success){ // 如果支付支付成功則修改狀態
				$orderEditData['pay_status'] = 1;
			}

			$order->where('order_no',$order_no)->update($orderEditData); // 修改订单

			// 开始修改用户的日志;并开始修改余额
			if($balance > 0 ){
				$balancLogData['user_id'] = $orderPayLogData['user_id'];
				$balancLogData['is_type'] = $orderPayLogData['is_type'];
				$balancLogData['money'] = $balance;
				$balancLogData['remarks'] = '订单号：'.$order_no;
				$this->auto_balance($balancLogData);
			}
			


			\DB::commit(); // 提交事务

		} catch (\Exception $e) {
			\DB::rollBack(); // 回滚事务
			file_put_contents(getcwd().'/pay_error.txt', $e->getMessage());
		}
		
		// 微信和阿里回调接口不一样
		echo 'success';
		
	}

	public function wechat_index(Request $req,OrderPayLog $order_pay_log,Order $order){
		$wechatReturn = json_decode(json_encode(simplexml_load_string(file_get_contents("php://input"), 'SimpleXMLElement', LIBXML_NOCDATA)),true);
		if(empty($wechatReturn)){
			return;
		}
		$order_no = $wechatReturn['out_trade_no'];
		
		// 获取订单信息
		$orderInfo = $order->where('order_no',$order_no)->first();

		$pay_type =  1; // 默认微信

		// 开启事务防止出错
		\DB::beginTransaction(); 
		try {
			// 根据类型来存储支付成功信息
			$orderPayLogData['user_id'] = $orderInfo['user_id'];
			$orderPayLogData['order_no'] = $order_no;
			$orderPayLogData['add_time'] = time(); // 加入时间
		
			$orderPayLogData['pay_no'] = $wechatReturn['transaction_id']; // 微信支付订单号
			$orderPayLogData['is_type'] = 0; // 收入还是支出

			// 退款回调
			if(isset($wechatReturn['refund_status'])){
				$orderPayLogData['is_type'] = 1; 
			}

			$orderPayLogData['money'] = $wechatReturn['total_fee']/100; // 支付金额
			$orderPayLogData['software'] = 'wechat'; // 支付软件
			$orderPayLogData['return_code'] = $wechatReturn['result_code']; // 业务结果
			$orderPayLogData['remarks'] = !isset($wechatReturn['err_code_des'])?'':$wechatReturn['err_code_des']; // 错误代码描述



			$order_pay_log->insert($orderPayLogData);// 支付日志插入

			$balance = $orderInfo['price']-$orderPayLogData['money'];// 用户余额支付多少;

			// 准备修改订单信息
			

			$orderEditData['balance'] = $balance;
			$orderEditData['pay_type'] = $orderPayLogData['software'];
			$orderEditData['pay_time'] = $orderPayLogData['add_time'];
			$orderEditData['pay_status'] = 0;

			$pay_success = false; // 是否支付成功
			if($wechatReturn['return_code'] == 'SUCCESS'){
				$pay_success = true;
			}
			if($pay_success){ // 如果支付支付成功則修改狀態
				$orderEditData['pay_status'] = 1;
			}

			$order->where('order_no',$order_no)->update($orderEditData); // 修改订单

			// 开始修改用户的日志;并开始修改余额
			if($balance > 0 ){
				$balancLogData['user_id'] = $orderPayLogData['user_id'];
				$balancLogData['is_type'] = $orderPayLogData['is_type'];
				$balancLogData['money'] = $balance;
				$balancLogData['remarks'] = '订单号：'.$order_no;
				$this->auto_balance($balancLogData);
			}
			


			\DB::commit(); // 提交事务

		} catch (\Exception $e) {
			\DB::rollBack(); // 回滚事务
			file_put_contents(getcwd().'/pay_error.txt', $e->getMessage());
		}
		
		// 微信和阿里回调接口不一样
		echo '<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>';

	}

	// 支付
	public function pay(Request $req){
		$pay_type = $req->pay_type; // 支付类型
		$isMobile = $req->is_mobile; // Mobile还是PC
		$orderList = $req->order; // 订单信息
		$total_amount = $req->total_price+0;
		$balance = $req->balance+0;

		$order = $this->createOrderInfo($orderList,$pay_type,$total_amount,$balance,$isMobile);	// 获取支付订单信息

		if(empty($order)){
			return $this->errorMsg('非法订单！');
		}

		try {
			switch ($pay_type) {
				case '1': // 微信支付

					// pc端使用扫码支付
					if($isMobile == 0){	
						$data = Pay::wechat()->scan($order);
					}

					// 手机端用游览器跳转支付
					if($isMobile == 1){
						$data = Pay::wechat()->wap($order);
					}

					// 手机端用微信跳转支付
					if($isMobile == 3){
						$data = Pay::wechat()->mp($order);
					}

					// App支付
					if($isMobile == 2){
						$data = Pay::wechat()->app($order);
					}

					# code...
					break;

				case '2': // 支付宝支付
					// pc端使用扫码支付
					if($isMobile == 0){	
						$data = Pay::alipay()->web($order);
					}

					// 手机端用跳转支付
					if($isMobile == 1){
						$data = Pay::alipay()->wap($order);
					}

					break;
				
				default:
					return $this->errorMsg('支付异常！');
					break;
			}
		} catch (\Exception $e) {
			return $this->errorMsg($e->getMessage());
		}
		return $data;
	}


	/********
	 *	
	 *	创建支付订单信息
	 *	$orderList 商品订单信息   
	 *	$pay_type  支付类型   
	 *	$total_amount  支付总金额   
	 *	$balance  余额支付数量   
	 *	$isMobile  H5还是PC网页   
	 *	
	*******/
	public function createOrderInfo($orderList,$pay_type,$total_amount,$balance,$isMobile){

		$order = [];

		// 如果没有订单信息 或者 支付金额为空则无法执行
		if(empty($orderList) || empty($total_amount)){
			return false;
		}
		
		if($pay_type == 1){ // 微信支付
			$order['out_trade_no'] 		= 	$orderList[0]['order_no'];
			$order['total_fee'] 		= 	($total_amount-$balance)*100;
			$order['body'] 				= 	$orderList[0]['title'];
			if($isMobile == 3){
				$user_wechat = new UserWechat;
				$user_wechat_info = $user_wechat->where('user_id',$orderList[0]['user_id'])->first();
				$order['openid'] = $user_wechat_info['openid'];
			}
		}

		if($pay_type == 2){ // 支付宝支付
			$order['out_trade_no'] 		= 	$orderList[0]['order_no'];
			$order['total_amount'] 		= 	$total_amount-$balance;
			$order['subject'] 			= 	$orderList[0]['title'];
		}

		return $order;

	}



	// 添加支付日志
    public function addLog($info){
    	$data['user_id'] = isset($info['user_id'])?$info['user_id']:0;
    	$data['order_no'] = isset($info['order_no'])?$info['order_no']:'';
    	$data['pay_no'] = isset($info['pay_no'])?$info['pay_no']:'';
    	$data['is_type'] = isset($info['is_type'])?$info['is_type']:1;
    	$data['money'] = isset($info['money'])?$info['money']:0.00;
    	$data['software'] = isset($info['software'])?$info['software']:'其他';
    	$data['remarks'] = isset($info['remarks'])?$info['remarks']:'';
    	$data['add_time'] = time();

    	$order_pay_log = new OrderPayLog;
    	$rs = $order_pay_log->insert($data);
    	return $rs;
    }

    // 修改余额并加入日志
    public function auto_balance($data){
    	$userId = $data['user_id'];
    	$is_type = $data['is_type'];
    	$money = abs($data['money']+0);
    	$remarks = $data['remarks'];

    	$user_extend = new UserExtend;
    	$balance_log = new BalanceLog;

    	$userExtendInfo = $user_extend->where('user_id',$userId)->first();
    	$balance = $userExtendInfo['balance'];
    	
    	if($is_type == 0){
    		if($balance < $money){
    			return $this->returnData(false,401,'余额不够。');
    		}
    		$extends['balance'] = $balance - $money;
    	}else{
    		$extends['balance'] = $balance + $money;
    	}
    	$rs = $user_extend->where('user_id',$userId)->update($extends);

    	$log['money'] = $money;
    	$log['user_id'] = $userId;
    	$log['is_type'] = $is_type;
    	$log['remarks'] = $remarks;
    	$log['add_time'] = time();

    	$rs = $balance_log->insert($log);

    	return $this->returnData($rs);

    }


}
