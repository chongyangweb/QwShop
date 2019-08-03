<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsDelivery;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsDeliveryController extends BaseController
{
    public function index(Request $req,GoodsDelivery $goods_delivery){
        $data['data'] = $this->getData($goods_delivery);
        $data['page'] = $this->getPage('GoodsDelivery');
        return $data;
    }

    public function add(Request $req,GoodsDelivery $goods_delivery){
        if($req->isMethod('get')){
            return;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        if(empty($req->content)){
            return $this->returnData(false,401,'请认真填写地区！');
        }

        $userInfo = $userInfo = JWTAuth::parseToken()->touser();
        $data['name'] = $req->name;
        $data['user_id'] = $userInfo['id'];
        $data['content'] = $req->content;

        // 去重复
        $arr = [];
        foreach($data['content'] as $k=>$v){
            if(!in_array($v['area'],$arr)){
                $arr[] = $v['area'];
            }else{
                unset($data['content'][$k]);
            }
        }

        $data['content'] = json_encode($data['content']);

        $rs = $goods_delivery->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,GoodsDelivery $goods_delivery,$id){
        if($req->isMethod('get')){
            $data['info'] = $goods_delivery->find($id);
            $data['info']['content'] = json_decode($data['info']['content']);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['content'] = $req->content;

        // 去重复
        $arr = [];
        foreach($data['content'] as $k=>$v){
            if(!in_array($v['area'],$arr)){
                $arr[] = $v['area'];
            }else{
                unset($data['content'][$k]);
            }
        }

        $data['content'] = json_encode($data['content']);


        $rs = $goods_delivery->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,GoodsDelivery $goods_delivery){
        $ids = explode(',',$req->id);
        $rs = $goods_delivery->whereIn('id',$ids)->delete();
        return $this->returnData($rs);
    }


}
