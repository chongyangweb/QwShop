<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use EasyWeChat\Factory;
use App\Model\WechatCat;
use App\Model\Config;
use Tymon\JWTAuth\Facades\JWTAuth;

class WechatCatController extends BaseController
{
    public function index(Request $req,WechatCat $wechat_cat){
    	$userInfo = JWTAuth::parseToken()->touser();
    	$this->order = ['is_sort','asc'];
    	$this->where = [['user_id',$userInfo['id']]];
        $data['data'] = getTree($this->getData($wechat_cat));
        return $data;
    }


    public function add(Request $req,WechatCat $wechat_cat){
    	$userInfo = JWTAuth::parseToken()->touser();
    	if($req->isMethod('get')){
    		return $wechat_cat->where('user_id',$userInfo['id'])->where('pid',0)->get();
    	}

		$data['name'] = $req->name;
		$data['pid'] = $req->pid;
		$data['is_sort'] = $req->is_sort;
		$data['is_type'] = $req->is_type;
		$data['content'] = empty($req->content)?'':$req->content;
		$data['user_id'] = $userInfo['id'];
		$rs = $wechat_cat->insert($data);

    	return $this->returnData($rs);
    }

    public function edit(Request $req,WechatCat $wechat_cat,$id){
    	$userInfo = JWTAuth::parseToken()->touser();
    	if($req->isMethod('get')){
    		$data['parent'] = $wechat_cat->where('user_id',$userInfo['id'])->where('pid',0)->get();
    		$data['info'] = $wechat_cat->where('user_id',$userInfo['id'])->where('id',$id)->first();
    		return $data;
    	}

		$data['name'] = $req->name;
		$data['pid'] = $req->pid;
		$data['is_sort'] = $req->is_sort;
		$data['is_type'] = $req->is_type;
		$data['content'] = $req->content;
		$data['user_id'] = $userInfo['id'];
		$rs = $wechat_cat->where('id',$id)->update($data);

    	return $this->returnData($rs);
    }


    public function del(Request $req,WechatCat $wechat_cat){
        $ids = explode(',',$req->id);
    	$rs = $wechat_cat->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }


    // 推送到微信服务器
    public function push_wechat_cat(Request $req,WechatCat $wechat_cat,Config $config){
    	$userInfo = JWTAuth::parseToken()->touser();
    	$wechatCatData = $wechat_cat->where('user_id',$userInfo['id'])->where('pid',0)->with('get_child_cat')->get();

    	foreach($wechatCatData as $v){
    		$arr = [];
    		$arr['name'] = $v['name'];

    		if(count($v['get_child_cat'])==0){
	    		if($v['is_type'] == 0){
	    			$arr['type'] = 'view';
	    			$arr['url'] = $v['content'];
	    		}
	    		if($v['is_type'] == 1){
	    			$arr['type'] = 'click';
	    			$arr['key'] = $v['content'];
	    		}
    		}else{
    			$arr['sub_button'] = [];
    			foreach($v['get_child_cat'] as $vo){
    				$arr2 = [];
    				$arr2['name'] = $vo['name'];
    				if($vo['is_type'] == 0){
		    			$arr2['type'] = 'view';
		    			$arr2['url'] = $vo['content'];
		    		}
		    		if($vo['is_type'] == 1){
		    			$arr2['type'] = 'click';
		    			$arr2['key'] = $vo['content'];
		    		}
    				$arr['sub_button'][] = $arr2;
    			}
    		}
    		
    		
    		$button[] = $arr;
    	}

    	// 开始推送


    	$configInfo = $config->where('user_id',$userInfo['id'])->where('is_type','wechat')->get();
    	foreach($configInfo as $v){
    		$configArr[$v['name']] = $v;
    	}
    	$configs = [
		    'app_id' => $configArr['app_id']['val'],
		    'secret' => $configArr['app_secret']['val'],

		    // 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
		    'response_type' => 'array',

		    //...
		];

		$app = Factory::officialAccount($configs);

		$rs = $app->menu->create($button);

		

    	return $rs;
    }
}
