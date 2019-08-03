<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsArea;
use App\Model\User;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsAreaController extends BaseController
{
    public function index(Request $req,GoodsArea $goods_area){
        $data['data'] = $this->getData($goods_area);
        $data['page'] = $this->getPage('GoodsArea');
        return $data;
    }

    // 获取指定的地区信息
    public function getArea(Request $req,GoodsArea $goods_area){
        $id = $req->id;
        return $goods_area->where('pid',$id)->get();
    }

    // 添加代理
    public function editArea(Request $req,GoodsArea $goods_area,User $user){
        $id = $req->id;
        $userId = $req->user_id;
        // if($req->isMethod('get')){
        //     return $user->find($userId);
        // }
        return $goods_area->where('area_id',$id)->update(['user_id'=>$userId]);
    }

    public function add(Request $req,GoodsArea $goods_area){
        if($req->isMethod('get')){
            return;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }
        $userInfo = $userInfo = JWTAuth::parseToken()->touser();
        $data['name'] = $req->name;
        $data['teacher_id'] = $userInfo['id'];
        $data['add_time'] = time();

        $rs = $goods_area->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,GoodsArea $goods_area,$id){
        if($req->isMethod('get')){
            $data['info'] = $goods_area->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        $rs = $goods_area->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,GoodsArea $goods_area){
        $ids = explode(',',$req->id);
        $rs = $goods_area->whereIn('id',$ids)->delete();
        return $this->returnData($rs);
    }


}
