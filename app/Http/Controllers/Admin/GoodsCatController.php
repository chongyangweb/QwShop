<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsCat;
use App\Tools\Uploads;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsCatController extends BaseController
{
    public function index(Request $req,GoodsCat $goods_cat){
    	$userInfo = JWTAuth::parseToken()->touser();
    	array_push($this->where,['user_id',$userInfo['id']]);
        $data['data'] = getTree($this->getData($goods_cat));
        return $data;
    }

    public function add(Request $req,GoodsCat $goods_cat){
    	if($req->isMethod('get')){
    		$data['user_info'] = JWTAuth::parseToken()->touser();
    		$data['goods_cat'] = $goods_cat->where(['user_id'=>$data['user_info']['id']])->get();
    		$data['goods_cat'] = getTree($data['goods_cat']);
    		return $data;
    	}

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['pid'] = $req->pid;
        $data['user_id'] = $req->user_id;
        $data['is_index'] = $req->is_index;
        $data['is_sort'] = $req->is_sort;

        if(!empty($req->thumb)){
            $data['thumb'] = $req->thumb;
        }

        $rs = $goods_cat->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,GoodsCat $goods_cat,$id){
        if($req->isMethod('get')){
            $data['info'] = $goods_cat->find($id);
            $data['user_info'] = JWTAuth::parseToken()->touser();
    		$data['goods_cat'] = $goods_cat->where(['user_id'=>$data['user_info']['id']])->get();
    		$data['goods_cat'] = getTree($data['goods_cat']);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['pid'] = $req->pid;
        $data['is_index'] = $req->is_index;
        $data['is_sort'] = $req->is_sort;

        if(!empty($req->thumb)){
            $data['thumb'] = $req->thumb;
        }

        $rs = $goods_cat->where('id',$id)->update($data);
        return $this->returnData(true);

    }

    public function del(Request $req,GoodsCat $goods_cat){
        $ids = explode(',',$req->id);
    	$rs = $goods_cat->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

    public function thumb(Request $req,Uploads $uploads){
        $data['is_thumb'] = true;
        $data['width'] = 232;
        $data['height'] = 570;
        $fileInfo = $uploads->uploads($data);
        return $fileInfo;
    }
}
