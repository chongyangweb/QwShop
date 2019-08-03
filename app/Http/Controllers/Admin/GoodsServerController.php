<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsServer;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsServerController extends Controller
{
    public function edit(Request $req,GoodsServer $goods_server){
    	$userInfo = JWTAuth::parseToken()->touser();
    	if($req->isMethod('get')){
    		$goods_server_exists = $goods_server->where('user_id',$userInfo['id'])->exists();
    		if(!$goods_server_exists){
    			$rs = $goods_server->insert(['user_id'=>$userInfo['id'],'content'=>'']);
    		}
    		$data['goods_server'] = $goods_server->where('user_id',$userInfo['id'])->first();
    		return $data;
    	}

    	$data['content'] = $req->content;
    	$rs = $goods_server->where('user_id',$userInfo['id'])->update($data);
    }
}
