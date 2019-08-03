<?php

namespace App\Http\Controllers\ShopApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsShop;

class ShopController extends BaseController
{
	// 获取店铺列表
    public function get_shop(Request $req,GoodsShop $goods_shop){

    	// 如果没有定位信息
    	if(empty($req->province)){
    		return $this->errorMsg('请先打开定位！');
    	}

    	// 指定取多少条
    	if(isset($req->limit)){
    		$this->limit = $req->limit;
    	}

    	// 获取整个省的
    	$this->where[] = ['province',$req->province];

    	// 正常排序 加入时间排序

    	// 距离排序

    	// 获取数据列表
    	$data['list'] = $this->getData($goods_shop);

    	// 获取分页
    	$data['page'] = $this->getPage('GoodsShop');

    	return $this->successMsg('ok',$data);
    }


    // 获取店铺信息
    public function get_shop_info(Request $req,GoodsShop $goods_shop){
    	$id = $req->id;
    	$data['info'] = $goods_shop->where('user_id',$id)->first();
    	return $this->successMsg('ok',$data);
    }


}
