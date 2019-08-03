<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsSlide;
use App\Tools\Uploads;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsSlideController extends BaseController
{
     public function index(Request $req,GoodsSlide $goods_slide){
        $this->where = empty($req->name)?[]:[['name','like','%'.$req->name.'%']];
        $userInfo = JWTAuth::parseToken()->touser();
    	array_push($this->where,['user_id',$userInfo['id']]);
        $data['data'] = $this->getData($goods_slide);
        $data['page'] = $this->getPage('GoodsSlide');
        return $data;
    }

    public function add(Request $req,GoodsSlide $goods_slide){
    	if($req->isMethod('get')){
    		return $data;
    	}

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $userInfo = JWTAuth::parseToken()->touser();

        $data['name'] = $req->name;
        $data['image_url'] = $req->image_url;
        $data['url'] = $req->url;
        $data['sort'] = $req->sort;
        $data['is_type'] = $req->is_type;
        $data['user_id'] = $userInfo['id'];

        if(empty($req->image_url)){
            return $this->returnData(false,401,'请上传图片！');
        }

        $rs = $goods_slide->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,GoodsSlide $goods_slide,$id){
        if($req->isMethod('get')){
            $data['info'] = $goods_slide->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['image_url'] = $req->image_url;
        $data['url'] = $req->url;
        $data['sort'] = $req->sort;
        $data['is_type'] = $req->is_type;

        if(empty($req->image_url)){
            return $this->returnData(false,401,'请上传图片！');
        }

        $rs = $goods_slide->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,GoodsSlide $goods_slide){
        $ids = explode(',',$req->id);
    	$rs = $slide->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

    public function slide(Request $req,Uploads $uploads){
    	$fileInfo = $uploads->uploads();
        return $fileInfo;
    }
}
