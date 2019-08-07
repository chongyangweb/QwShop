<?php

namespace App\Http\Controllers\Seller;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Store;
use App\Tools\Uploads;
use Tymon\JWTAuth\Facades\JWTAuth;

class StoreController extends BaseController
{

    public function edit(Request $req,Store $store){
        $userInfo = JWTAuth::parseToken()->touser();
        if($req->isMethod('get')){
            $data['info'] = $store->where('user_id',$userInfo['id'])->first();
            if(empty($data['info'])){
                $data['info']['user_id'] = $userInfo['id'];
                $data['info']['title'] = $userInfo['nickname'].'店铺';
                $store->insert($data['info']);
                $data['info'] = $store->where('user_id',$userInfo['id'])->first();
            }
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['content'] = $req->content;
        $data['address'] = $req->address;
        $data['logo'] = $req->logo;
        $data['face_img'] = isset($req->face_img)?implode(',',$req->images):'';
        $data['lat'] = $req->lat;
        $data['lng'] = $req->lng;
        $data['province'] = $req->province;
        $data['city'] = $req->city;
        $data['region'] = $req->region;

        $rs = $store->where('user_id',$userInfo['id'])->update($data);
        return $this->returnData(true);

    }


    public function avatar(Request $req,Uploads $uploads){
    	$data['is_thumb'] = true;
        $data['width'] = 120;
        $data['height'] = 120;
    	$fileInfo = $uploads->uploads($data);
        return $fileInfo;
    }

    public function shop_thumb(Request $req,Uploads $uploads){
        $data['is_thumb'] = true;
        $fileInfo = $uploads->uploads($data);
        return $fileInfo;
    }
}
