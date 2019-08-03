<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Goods;

class GoodsController extends BaseController
{
    public function getGoodsInfo(Request $req,Goods $goods){
    	$id = $req->id;
    	$data['goods_info'] = $goods->with(['get_all_sku','get_all_attr'])->find($id);
    	return $data;
    }

    public function getHotGoods(Request $req,Goods $goods){
    	// 热门产品
    	$data['hot_goods'] = $goods->where('user_id',$this->dealer)->where('is_hot',1)->where('is_sale',1)->with("get_sku")->take(5)->get();
    	return $data;
    }
}
