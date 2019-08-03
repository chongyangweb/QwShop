<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsCat;
use App\Model\GoodsSlide;
use App\Model\Goods;

class IndexController extends BaseController
{
	// 获取左侧栏目
    public function getGoodsCat(Request $req,GoodsCat $goods_cat){
    	
    	$goods_cats = $goods_cat->where('user_id',$this->dealer)->get();

    	$data['goods_cat'] = [];
        
    	foreach($goods_cats as $v){
    		if($v['pid'] == 0){
    			$v['child'] = [];
    			$child = [];
    			foreach($goods_cats as $key=>$vo){
    				if($vo['pid'] == $v['id']){
    					$child[] = $vo;
    				}
    			}
    			$v['child'] = $child;
    			$data['goods_cat'][] = $v;
    		}
    		
    	}
    	return $data;
    }

    // 获取商城banner
    public function getBanner(Request $req,GoodsSlide $goods_slide){
    	$data['goods_slide'] = $goods_slide->where('user_id',$this->dealer)->get();
    	return $data;
    }


    // 获取商城热门产品
    public function getIndexGoods(Request $req,Goods $goods,GoodsCat $goods_cat){

    	// 热门产品
    	$data['hot_goods'] = $goods->where('user_id',$this->dealer)->where('is_hot',1)->where('is_sale',1)->with("get_sku")->take(5)->get();

    	// 获取栏目
    	$goods_cats = $goods_cat->where('user_id',$this->dealer)->get();

    	$data['goods_cat'] = [];

    	foreach($goods_cats as $v){
    		if($v['pid'] == 0){
    			$v['child'] = [];
    			$child = [];
    			foreach($goods_cats as $key=>$vo){
    				if($vo['pid'] == $v['id']){
    					$child[] = $vo;
    				}
    			}
    			$v['child'] = $child;
    			$data['goods_cat'][] = $v;
    		}
    		
    	}

    	// 根据相对应的栏目获取商品
    	foreach($data['goods_cat'] as $k=>$v){
			$ids = [];
			array_push($ids,$v['id']);
			foreach($v['child'] as $vo){
				array_push($ids,$vo['id']);
			}		

			$v['goods_list'] = $goods->whereIn('cid',$ids)->where('is_sale',1)->take(8)->with("get_sku")->get();
			$data['goods_cat'][$k] = $v;
    	}
    	return $data;
    }

    // 获取首页导航
    public function getIndexCat(Request $req,GoodsCat $goods_cat){
        $goods_cats = $goods_cat->where('user_id',$this->dealer)->get();
        foreach($goods_cats as $v){
            if($v['is_index']==1){
                $data['data'][] = $v;
            }
        }
        return $data;
    }


}
