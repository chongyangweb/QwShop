<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Order;
use App\Model\OrderGoods;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrderController extends BaseController
{
    public function index(Request $req,Order $order,OrderGoods $order_goods){
    	$userInfo = JWTAuth::parseToken()->touser();
        if(!empty($req->order_no)){
            array_push($this->where,['order_no','like',"%".$req->order_no."%"]);
        }
    	array_push($this->where,['dealer_id',$userInfo['id']]);

        if(!empty($req->order_type)){
            switch ($req->order_type) {
                case 'pay_status':
                    array_push($this->where,['pay_status',0]);
                    array_push($this->where,['order_status',0]);
                    break;
                case 'delivery_status':
                    array_push($this->where,['pay_status',1]);
                    array_push($this->where,['delivery_status',0]);
                    break;
                case 'order_status':
                    array_push($this->where,['delivery_status',1]);
                    array_push($this->where,['pay_status',1]);
                    array_push($this->where,['order_status',0]);
                    break;
                case 'comment_status':
                    array_push($this->where,['delivery_status',1]);
                    array_push($this->where,['pay_status',1]);
                    array_push($this->where,['order_status',1]);
                    array_push($this->where,['comment_status',0]);
                    break;
                case 'comp_order':
                    array_push($this->where,['delivery_status',1]);
                    array_push($this->where,['pay_status',1]);
                    array_push($this->where,['order_status',1]);
                    array_push($this->where,['comment_status',1]);
                    break;
                case 'del_order':
                    array_push($this->where,['pay_status',0]);
                    array_push($this->where,['order_status',99]);
                    break;
            }

        }

        if(!empty($req->start_time && !empty($req->end_time))){
            array_push($this->where,['add_time','>=',$req->start_time]);
            array_push($this->where,['add_time','<=',$req->end_time]);
        }

        $data['order_list'] = $this->getData($order);
        $data['page'] = $this->getPage('Order');
        return $data;
    }


    public function getOrderInfo(Request $req,Order $order){
    	$orderId = $req->id;
    	$data['data'] = $order->with('get_order_goods')->where('id',$orderId)->first();
    	return $data;
    }


    // 修改订单快递
    public function edit_delivery_no(Request $req,Order $order){
        $orderId = $req->order_id;
        $rs = $order->where('id',$orderId)->update(['delivery_no'=>$req->delivery_no,'delivery_status'=>1]);
        return $this->returnData($rs);
    }
}
