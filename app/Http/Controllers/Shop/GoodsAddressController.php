<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsAddress;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsAddressController extends BaseController
{
    public function getGoodsAddress(Request $req,GoodsAddress $goods_address){
    	$userInfo = JWTAuth::parseToken()->touser();
    	$data = $goods_address->where('user_id',$userInfo['id'])->get();
    	return $this->successMsg('ok',$data);
    }

    // 添加快递地址
    public function addGoodsAddress(Request $req,GoodsAddress $goods_address){
    	$userInfo = JWTAuth::parseToken()->touser();
    	$data['name'] = $req->name;
    	$data['phone'] = $req->phone;
    	$data['zip_code'] = $req->zip_code;
    	$data['user_id'] = $userInfo['id'];
    	$data['province'] = $req->province;
    	$data['city'] = $req->city;
    	$data['region'] = $req->region;
    	$data['address'] = $req->address;
    	$data['add_time'] = time();

    	$rs = $goods_address->insert($data);
    	if($rs){
    		return $this->successMsg();
    	}else{
    		return $this->errorMsg();
    	}
    }

    public function delGoodsAddress(Request $req,GoodsAddress $goods_address){
    	$id = $req->id;
    	$userInfo = JWTAuth::parseToken()->touser();
    	$rs = $goods_address->where('id',$id)->where('user_id',$userInfo['id'])->delete();
    	if($rs){
    		return $this->successMsg();
    	}else{
    		return $this->errorMsg();
    	}

    }


    public function defaultGoodsAddress(Request $req,GoodsAddress $goods_address){
    	$userInfo = JWTAuth::parseToken()->touser();
    	$id = $req->id;
    	$goods_address->where('user_id',$userInfo['id'])->update(['is_default'=>0]);
    	$rs = $goods_address->where('user_id',$userInfo['id'])->where('id',$id)->update(['is_default'=>1]);

    	if($rs){
    		return $this->successMsg();
    	}else{
    		return $this->errorMsg();
    	}
    }
}
