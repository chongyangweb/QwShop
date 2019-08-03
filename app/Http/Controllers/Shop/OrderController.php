<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Order;
use App\Model\OrderGoods;
use App\Model\OrderMaster;
use App\Model\GoodsComment;
use App\Model\GoodsSpec;
use App\Model\Goods;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrderController extends BaseController
{
    // 添加订单
    public function addOrder(Request $req,Order $order,OrderGoods $order_goods,GoodsSpec $goods_spec,Goods $goods,OrderMaster $order_master){
    	if(!isset($req->token)){
            return ['code'=>500,'message'=>'无Token'];
        }

    	if(!JWTAuth::parseToken()->check()){
    		return ['code'=>500,'message'=>'未登录！'];
    	}

    	$goods_list = $req->goods_list;
    	$userInfo = JWTAuth::parseToken()->touser();

        // Master_order 所有订单的价格
        $master_price = 0;

        // 分化处理每个订单 合并相同商户的商品组成订单
    	foreach($goods_list as $v){
    		$price = 0;
    		$price = $v['buy_num']*$v['price'];
    		if(!isset($goodsList[$v['goods_info']['user_id']])){
    			$goodsList[$v['goods_info']['user_id']] = [];
    		}
    		if(!isset($goodsList[$v['goods_info']['user_id']]['total_price'])){
    			$goodsList[$v['goods_info']['user_id']]['total_price'] = 0;
    		}
    		
    		$goodsList[$v['goods_info']['user_id']]['total_price'] += $price;
    		$goodsList[$v['goods_info']['user_id']]['goods_list'][] = $v;
            $master_price += $price;
    	}

        

        // var_dump($goodsList);exit;
    	// $orderList = array_merge($orderList,[]);
    	// 订单开启事务防止出错
    	\DB::beginTransaction(); 
    	try {
            // 主订单号 如果多个商户订单 则必须有一个主订单号
            $order_master_id = 0;
            if(count($goodsList)>1){
                $orderMasterInfo['price'] = $master_price;
                $orderMasterInfo['order_no'] = 'm'.date('YmdHis').mt_rand(1000,9999);
                $orderMasterInfo['add_time'] = time();
                $order_master_id = $order_master->insertGetId($orderMasterInfo);
            }

            $orderList = []; // 循环获取到订单信息返回给前端展示
    		foreach($goodsList as $k=>$v){
                $order_no = date('YmdHis').mt_rand(1000,9999);
                $add_time = time();
    			$orderInfo = [];
    			$order_goods_list = [];
                $orderInfo['master_id'] = $order_master_id;
	    		$orderInfo['user_id'] = $userInfo['id'];
	    		$orderInfo['dealer_id'] = $k;
	    		$orderInfo['order_no'] = $order_no;
	    		$orderInfo['title'] = $v['goods_list'][0]['goods_info']['title'].'等';
	    		$orderInfo['price'] = $v['total_price'];
	    		$orderInfo['image'] = explode(',',$v['goods_list'][0]['goods_info']['images'])[0];
	    		$orderInfo['province'] = $req->province;
	    		$orderInfo['city'] = $req->city;
	    		$orderInfo['region'] =$req->region;
	    		$orderInfo['address'] = $req->address;
	    		$orderInfo['receive_name'] = $req->receive_name;
	    		$orderInfo['receive_tel'] = $req->receive_tel;
	    		$orderInfo['add_time'] = $add_time;
                
	    		$id = $order->insertGetId($orderInfo);

	    		// 循环将订单商品
	    		foreach($v['goods_list'] as $vo){
	    			$goodsImg = $vo['goods_info']['images'];
	    			$order_goods_info['order_id'] = $id;
	    			$order_goods_info['goods_id'] = $vo['goods_id'];
                    $order_goods_info['price'] = $vo['price'];
                    $order_goods_info['title'] = $vo['goods_info']['title'];
	    			$order_goods_info['num'] = $vo['buy_num'];
	    			$order_goods_info['image'] = explode(',',$goodsImg)[0];
	    			$order_goods_info['total_price'] = $vo['buy_num']*$vo['price'];
	    			
                    // 修改库存
                    if(!isset($vo['sku']) || empty($vo['sku'])){
                        $goods->where('id',$vo['goods_id'])->decrement('num',$vo['buy_num']);
                    }else{
                        $goods_spec->where('id',$vo['sku']['id'])->decrement('num',$vo['buy_num']);
                        $order_goods_info['spec_name'] = $vo['sku']['name'];
                        $order_goods_info['spec_id'] = $vo['sku']['id'];
                    }

                    $order_goods_list[] = $order_goods_info; // 全部放入数组一起插入
	    		}

	    		$order_goods->insert($order_goods_list);

                $orderListParams = $orderInfo;
                $orderListParams['order_goods_list'] = $order_goods_list;
                $orderListParams['id'] = $id;
                array_push($orderList,$orderListParams); // 加入返回大数组
	    	}

	    	\DB::commit(); // 提交事务
    	} catch (\Exception $e) {
    		\DB::rollBack(); // 回滚事务
    		return $this->errorMsg($e->getMessage());
    	}

    	return $this->successMsg('成功！',$orderList);
    }


    // 获取订单列表
    public function getOrderList(Request $req,Order $order,OrderGoods $order_goods){
        $type = $req->type; // 获取订单状态
        $userInfo = JWTAuth::parseToken()->touser();
        $where = ['user_id'=>$userInfo['id']];

        switch ($type) {
            case '2': // 待付款
                $where['pay_status'] = 0;
                $where['order_status'] = 0;
                break;

            case '3': // 待发货
                $where['pay_status'] = 1;
                $where['delivery_status'] = 0;
                break;

            case '4': // 待收货
                $where['delivery_status'] = 1;
                $where['pay_status'] = 1;
                $where['order_status'] = 0;
                break;

            case '5': // 待评论
                $where['delivery_status'] = 1;
                $where['pay_status'] = 1;
                $where['order_status'] = 1;
                $where['comment_status'] = 0;
                break;

            case '6': // 已完成
                $where['delivery_status'] = 1;
                $where['pay_status'] = 1;
                $where['order_status'] = 1;
                $where['comment_status'] = 1;
                break;

            case '7': // 已取消
                $where['pay_status'] = 0;
                $where['order_status'] = 99;
                break;
            
            default:
                # code...
                break;
        }

       foreach($where as $k=>$v){ // 分页的bug加上
            array_push($this->where,[$k,$v]);
       }

        $order = $order->where($where)->with('get_order_goods');
        $data['order_list'] = $this->getData($order);
        $data['page'] = $this->getPage('Order');
        
        return $data;
    }

    // 订单支付信息获取
    public function pay(Request $req,Order $order,OrderGoods $order_goods,Goods $goods){
        $orderId = $req->order_id;
        $orderInfo = $order->find($orderId);
        $orderGoodsList = $order_goods->where('order_id',$orderId)->get();
        // $goodsList = [];
        // foreach($orderGoodsList as $v){
        //     $goodsInfo = $goods->where('id',$v['goods_id'])->first();
        //     $goodsInfo['val'] = $v;
        //     $goodsList[] = $goodsInfo;
        // }
        $orderInfo['order_goods_list'] = $orderGoodsList;
        $data['list'][] = $orderInfo;
        $data['total_price'] = $orderInfo['price'];
        return $data;

    }

    // 取消订单
    public function cancelPay(Request $req,Order $order){
        $id = $req->id;
        if(empty($id+0)){
            return $this->errorMsg();
        }

        $order->where('id',$id)->update(['order_status'=>99]);
        return $this->successMsg();

    }

    // 确认收货
    public function confirm(Request $req,Order $order){
        $id = $req->id;
        if(empty($id+0)){
            return $this->errorMsg();
        }

        $order->where('id',$id)->update(['order_status'=>1]);
        return $this->successMsg();
    }

    // 获取物流信息
    public function logistics(Request $req,Order $order){
        $delivery = $req->delivery;
        $url = 'https://api.jisuapi.com/express/query?appkey=b4c56e302b62c7e8&type=auto&number='.$delivery;
        $data = file_get_contents($url);
        return $this->successMsg('ok',json_decode($data,true));
    }

    public function comment(Request $req,Order $order,GoodsComment $goods_comment,OrderGoods $order_goods){
        $orderId = $req->order_id;
        $orderInfo = $order->find($orderId);
        if($orderInfo['comment_status'] == 1){
            return $this->errorMsg('已经评论过了！');
        }
        $orderGoodsList = $order_goods->where('order_id',$orderId)->get();
        $userInfo = JWTAuth::parseToken()->touser();
        $allData = [];
        foreach($orderGoodsList as $v){
            $data = [];
            $data['user_id'] = $userInfo['id'];
            $data['goods_id'] = $v['goods_id'];
            $data['dealer_id'] = $orderInfo['dealer_id'];
            $data['star'] = $req->star+0;
            $data['content'] = isset($req->content)?$req->content:'';
            $data['add_time'] = time();
            array_push($allData, $data);
        }

        $goods_comment->insert($allData);
        $order->where('id',$orderId)->update(['comment_status'=>1]);
        return $this->successMsg('评论成功！');

    }


}
