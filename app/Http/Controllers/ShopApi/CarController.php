<?php

namespace App\Http\Controllers\ShopApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsCar;
use App\Model\GoodsSpec;
use App\Model\Goods;
use Tymon\JWTAuth\Facades\JWTAuth;

class CarController extends BaseController
{
    public function get_goods_car(Request $req,GoodsCar $goods_car){
        if(!isset($req->token)){
            return ['code'=>500,'message'=>'无Token'];
        }

    	if(!JWTAuth::parseToken()->check()){
    		return ['code'=>500,'message'=>'未登录！'];
    	}
    	$userInfo = JWTAuth::parseToken()->touser();
    	$data = $goods_car->where('user_id',$userInfo['id'])->count();
    	return $this->successMsg('ok',$data);
    }

    // 用戶购物车列表
    public function get_goods_car_list(Request $req,GoodsCar $goods_car){
        $userInfo = JWTAuth::parseToken()->touser();
        $data = $goods_car->where('user_id',$userInfo['id'])->with(['get_goods_info'=>function($q){
            $q->with(['get_all_sku','get_all_attr']);
        }])->get();
        $dealerArr = [];
        $carArr = [];
        foreach($data as $k=>$v){
            $v['val'] = json_decode($v['val'],true);
            $carArr['data'][$v['get_goods_info']['user_id']][] = $v;
        }
        $carArr['list'] = $data;

        return $this->successMsg('ok',$carArr);
    }

    // 加入购物车
    public function add_goods_car(Request $req,GoodsCar $goods_car,GoodsSpec $goods_spec,Goods $goods){
    	if(empty($req->token)){
    		return ['code'=>'500','message'=>'无token'];
    	}

    	if(!JWTAuth::parseToken()->check()){
    		return ['code'=>'500','message'=>'token 失效！'];
    	}

    	$userInfo = JWTAuth::parseToken()->touser();

    	$data['user_id'] = $userInfo['id'];
    	$data['add_time'] = time();
    	$data['goods_id'] = $req->goods_id;
    	$data['buy_num'] = $req->buy_num;
    	$data['price'] = $req->price;
    	$data['val'] = json_encode([]);;

    	if(!empty($req->sku)){
    		$data['spec_id'] = $req->sku['id'];
    		$data['val'] = json_encode($req->sku);
    		$carInfo = $goods_car->where(['user_id'=>$data['user_id'],'spec_id'=>$data['spec_id']])->first(); // 查找數據庫是否存在
    		try {
	    		$decrment_num = $goods_spec->where(['id'=>$data['spec_id']])->decrement('num',$data['buy_num']);// 减少库存
	    	} catch (\Exception $e) {
	    		return $this->AutoMsg(401,"库存不够！");
	    	}
	    	if(empty($carInfo)){
	    		$rs = $goods_car->insert($data);
	    	}else{
	    		$rs = $goods_car->where(['user_id'=>$data['user_id'],'spec_id'=>$data['spec_id']])->increment('buy_num',$data['buy_num']);
	    	}
    	}else{
    		$carInfo = $goods_car->where(['user_id'=>$data['user_id'],'goods_id'=>$data['goods_id']])->first(); // 查找數據庫是否存在
    		try {
	    		$decrment_num = $goods->where(['id'=>$data['goods_id']])->decrement('num',$data['buy_num']);// 减少库存
	    	} catch (\Exception $e) {
	    		return $this->AutoMsg(401,"库存不够！");
	    	}
    		if(empty($carInfo)){
	    		$rs = $goods_car->insert($data);
	    	}else{
	    		$rs = $goods_car->where(['user_id'=>$data['user_id'],'goods_id'=>$data['goods_id']])->increment('buy_num',$data['buy_num']);
	    	}
    	}


    	if($rs){
    		return $this->successMsg();
    	}else{
    		return $this->errorMsg();
    	}

    }

    // 购物车数量修改
    public function edit_goods_car_num(Request $req,GoodsCar $goods_car,GoodsSpec $goods_spec,Goods $goods){
        $num = $req->num;
        $id = $req->id;
        $carInfo = $goods_car->find($id); // 购物商品信息
        $carInfo['val'] = json_decode($carInfo,true);
        if($carInfo['spec_id'] == 0){
            $goodsInfo = $goods->where('id',$carInfo['goods_id'])->first();
            if($goodsInfo['num']+$carInfo['buy_num']>= $num){
                $goods = $goods->where('id',$carInfo['goods_id']);
                if(($num-$carInfo['buy_num'])>=0){
                    $goods->decrement('num',abs($num-$carInfo['buy_num']));
                }else{
                    $goods->increment('num',abs($num-$carInfo['buy_num']));
                }
                
                $goods_car->where('id',$id)->update(['buy_num'=>$num]);
            }else{
                return $this->AutoMsg(500,"库存不够！");
            }
        }else{
            $goodsSpecInfo = $goods_spec->where('id',$carInfo['spec_id'])->first();
            if($goodsSpecInfo['num']+$carInfo['buy_num']>= $num){
                $goods_spec = $goods_spec->where('id',$carInfo['spec_id']);
                if(($num-$carInfo['buy_num'])>=0){
                    $goods_spec->decrement('num',abs($num-$carInfo['buy_num']));
                }else{
                    $goods_spec->increment('num',abs($num-$carInfo['buy_num']));
                }
                
                $goods_car->where('id',$id)->update(['buy_num'=>$num]);
            }else{
                return $this->AutoMsg(500,"库存不够！");
            }
        }
        return $this->successMsg('修改数量成功！');

    }

    public function del_goods_car(Request $req,GoodsCar $goods_car,GoodsSpec $goods_spec,Goods $goods){
        $id = $req->id;
        $carInfo = $goods_car->find($id);
        $num = $carInfo['buy_num']; // 获取购物车数量
        
        // 判断有没有属性
        if($carInfo['spec_id'] == 0){
            $goods->where('id',$carInfo['goods_id'])->increment('num',$num);
        }else{
            $rss = $goods_spec->where('id',$carInfo['spec_id'])->increment('num',$num);
        }
        $rs = $goods_car->where('id',$id)->delete();
        if($rs){
            return $this->successMsg('移除成功！');
        }else{
            return $this->errorMsg('异常！');
        }
    }

    // 购物订单生成后直接删除 不再进行加减库存
    public function del_goods_car_order(Request $req,GoodsCar $goods_car){
        $id = $req->id;
        $rs = $goods_car->whereIn('id',$id)->delete();
        if($rs){
            return $this->successMsg('移除成功！');
        }else{
            return $this->errorMsg('异常！');
        }
    }
}
