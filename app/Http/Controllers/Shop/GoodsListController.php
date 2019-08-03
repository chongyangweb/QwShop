<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsCat;
use App\Model\Goods;
use App\Model\GoodsBrand;

class GoodsListController extends BaseController
{
	// 产品列表获取产品
    public function getGoodsList(Request $req,GoodsCat $goods_cat,GoodsBrand $goods_brand,Goods $goods){

    	// 有类型传来
    	$data['goods_cat'] = $goods_cat->where('user_id',$this->dealer)->where('pid',$req->goods_cat)->get();

    	$data['goods_brand'] = $goods_brand->get();

    	// 分类选择
    	if(!empty($req->now_cat)){
    		array_push($this->where,['cid',$req->now_cat]);
    	}else{
    		$ids = [];
    		array_push($ids,$req->goods_cat);
    		foreach($data['goods_cat'] as $v){
    			array_push($ids,$v['id']);
    		}
    		array_push($this->whereIn,['cid',$ids]);
    	}
    	
    	// 标题搜索
    	if(!empty($req->goods_title)){
    		array_push($this->where,['title',$req->goods_title]);
    	}

    	// 品牌选择
    	if(!empty($req->now_brand)){
    		array_push($this->where,['brand_id',$req->goods_brand]);
    	}

    	// 排序选择
    	if(!empty($req->now_status)){
    		switch ($req->now_status) {
    			case 'price':
    				$this->order = ['price',$req->sorts];
    				break;

    			case 'add_time':
    				$this->order = ['add_time',$req->sorts];
    				break;
    			
    			case 'comment':
    				break;

    			case 'sale':
    				break;

    			default:
    				break;
    		}
    	}

    	$goods = $goods->with('get_sku');
    	$data['data'] = $this->getData($goods);
        $data['page'] = $this->getPage('Goods');

        return $data;
    }

    // 产品列表获取产品
    public function goodsSearch(Request $req,Goods $goods){

        // 标题搜索
        if(!empty($req->keywords)){
            array_push($this->where,['title','like','%'.$req->keywords.'%']);
        }

        // 排序选择
        if(!empty($req->now_status)){
            switch ($req->now_status) {
                case 'price':
                    $this->order = ['price',$req->sorts];
                    break;

                case 'add_time':
                    $this->order = ['add_time',$req->sorts];
                    break;
                
                case 'comment':
                    break;

                case 'sale':
                    break;

                default:
                    break;
            }
        }



        $goods = $goods->with('get_sku');
        $data['data'] = $this->getData($goods);
        $data['page'] = $this->getPage('Goods');

        return $data;
    }
}
