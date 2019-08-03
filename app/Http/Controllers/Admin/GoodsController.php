<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Goods;
use App\Model\GoodsCat;
use App\Model\GoodsBrand;
use App\Model\GoodsAttr;
use App\Model\GoodsSpec;
use App\Tools\Uploads;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsController extends BaseController
{
    public function index(Request $req,Goods $goods){
    	$this->where = empty($req->title)?[]:[['title','like','%'.$req->title.'%']];
        if($req->is_sale!=''){
            array_push($this->where,['is_sale',$req->is_sale]);
        }
        if($req->is_free!=''){
            array_push($this->where,['is_free',$req->is_free]);
        }


        $userInfo = JWTAuth::parseToken()->touser();
        array_push($this->where,['user_id',$userInfo['id']]);
        $data['data'] = $this->getData($goods);
        $data['page'] = $this->getPage('Goods');
        return $data;
    }

    public function add(Request $req,Goods $goods,GoodsCat $goods_cat,GoodsBrand $goods_brand){
    	if($req->isMethod('get')){
            $userInfo = JWTAuth::parseToken()->touser();
            $data['goods_cat'] = getTree($goods_cat->where('user_id',$userInfo['id'])->get());
            $data['goods_brand'] = $goods_brand->get();
    		$data['user_id'] = $userInfo['id'];
    		return $data;
    	}

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['title'] = $req->title;
        $data['cid'] = $req->cid;
        $data['brand_id'] = $req->brand_id;
        $data['goods_no'] = is_null($req->goods_no)?'':$req->goods_no;
        $data['sub_title'] = is_null($req->sub_title)?'':$req->sub_title;
        $data['user_id'] = $req->user_id;
        $data['price'] = is_null($req->price)?0:$req->price;
        $data['content'] = is_null($req->content)?'':$req->content;
        $data['num'] = $req->num;
        $data['is_hot'] = $req->is_hot;
        $data['is_top'] = $req->is_top;
        $data['is_sale'] = $req->is_sale;
        $data['add_time'] = time();
        if(empty($req->thumb) || is_null($req->thumb)){
            return response('至少上传一张图片！',401);
        }else{
            $data['images'] = $req->thumb;
        }

        $rs = $goods->insertGetId($data);
        if($rs){
            return response($rs.'',200);
        }else{
            return response($msg.' fail',401);
        }

    }

    public function edit(Request $req,Goods $goods,GoodsCat $goods_cat,GoodsBrand $goods_brand,GoodsAttr $goods_attr,GoodsSpec $goods_spec,$id){
        if($req->isMethod('get')){
            $userInfo = JWTAuth::parseToken()->touser();
            $data['goods_cat'] = getTree($goods_cat->where('user_id',$userInfo['id'])->get());
            $data['goods_brand'] = $goods_brand->get();
            $data['goods_attr'] = $goods_attr->where('goods_id',$id)->get();
            $data['goods_spec'] = $goods_spec->where('goods_id',$id)->get();
            $data['info'] = $goods->find($id);
            $data['user_id'] = $userInfo['id'];
            return $data;
        }

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['title'] = $req->title;
        $data['cid'] = $req->cid;
        $data['sub_title'] = is_null($req->sub_title)?'':$req->sub_title;;
        $data['brand_id'] = $req->brand_id;
        $data['goods_no'] = is_null($req->goods_no)?'':$req->goods_no;
        $data['user_id'] = $req->user_id;
        $data['price'] = is_null($req->price)?0:$req->price;
        $data['content'] = is_null($req->content)?'':$req->content;
        $data['num'] = $req->num;
        $data['is_hot'] = $req->is_hot;
        $data['is_top'] = $req->is_top;
        $data['is_sale'] = $req->is_sale;
        $data['add_time'] = time();
        if(empty($req->thumb) || is_null($req->thumb)){
            return response('至少上传一张图片！',401);
        }else{
            $data['images'] = $req->thumb;
        }

        $rs = $goods->where('id',$id)->update($data);
        if($rs){
            return response($id.'',200);
        }else{
            return response($id,200);
        }

    }

    public function del(Request $req,Goods $goods){
        $ids = explode(',',$req->id);
        $rs = $goods->whereIn('id',$ids)->delete();
        return $this->returnData($rs);
    }


    public function thumb(Request $req,Uploads $uploads){
        $data['is_thumb'] = true;
        $data['width'] = 800;
        $data['height'] = 800;
        $fileInfo = $uploads->uploads($data);
        return $fileInfo;
    }


    // 是否上架
    public function onSale(Request $req,Goods $goods){
        $id = $req->id;
        $goodsInfo = $goods->find($id);
        $data = [];
        $data['is_sale'] = empty($goodsInfo['is_sale'])?'1':'0';
        $rs = $goods->where('id',$id)->update($data);
        return $this->returnData($rs);
    }

    // 是否免单产品
    public function onFree(Request $req,Goods $goods){
        $id = $req->id;
        $goodsInfo = $goods->find($id);
        $data = [];
        $data['is_free'] = empty($goodsInfo['is_free'])?'1':'0';
        $rs = $goods->where('id',$id)->update($data);
        return $this->returnData($rs);
    }
}
