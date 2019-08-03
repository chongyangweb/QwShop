<?php

namespace App\Http\Controllers\ShopApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Goods;

class GoodsController extends BaseController
{
    // 获取免单产品Api   POST {limt}
    public function get_free_goods(Request $req,Goods $goods){
    	
    	// 判断是否有知道每页数量
    	if(isset($req->limit)){
    		$this->limit = $req->limit;
    	}

    	// 加入免单产品的条件
    	array_push($this->where,['is_free',1]);

    	// 获取该数量产品
        $goods = $goods->with('get_sku');
    	$data['list'] = $this->getData($goods);

    	// 获取分页信息
    	$data['page'] = $this->getPage('Goods');

    	return $this->successMsg('ok',$data);
    }


    // 获取最新产品Api POST {limt}
    public function get_new_goods(Request $req,Goods $goods){
    	
    	// 判断是否有知道每页数量
    	if(isset($req->limit)){
    		$this->limit = $req->limit;
    	}

    	// 加入免单产品的条件
    	array_push($this->where,['is_new',1]);

    	// 获取该数量产品
        $goods = $goods->with('get_sku');
    	$data['list'] = $this->getData($goods);

    	// 获取分页信息
    	$data['page'] = $this->getPage('Goods');

    	return $this->successMsg('ok',$data);
    }

    // 获取指定商品ID的信息
    public function get_goods_info(Request $req,Goods $goods){
    	$id = $req->id;
        $goods = $goods->with(['get_all_sku','get_all_attr','get_shop']);
    	$data['info'] = $goods->find($id);
    	return $this->successMsg('ok',$data);
    }


}
