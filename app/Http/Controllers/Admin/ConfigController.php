<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Config;
use Tymon\JWTAuth\Facades\JWTAuth;

class ConfigController extends BaseController
{
    // 获取配置信息
    public function getConfig(Request $req,Config $config){
        $userInfo = JWTAuth::parseToken()->touser();
    	$type = $req->is_type;
    	
    	$configData = $config->where('user_id',0)->where('is_type',$type)->get();

        $data = [];

    	foreach($configData as $v){
    		$data['data'][$v['name']] = $v;
    	}

    	return $data;
    }


}
