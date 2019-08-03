<?php

namespace App\Http\Controllers\ShopApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Model\User;
use App\Model\UserExtend;
use App\Tools\Uploads;
use App\Model\Setting;
use Illuminate\Support\Facades\Hash;
use App\Tools\SendSms;

class UserController extends BaseController
{
    // 注册
    public function register(Request $req,User $user,Setting $setting,UserExtend $user_extend){
    	$settingData = $setting->where('name','register')->first();

    	// 返回数据给前端是手机还是邮件
    	if($req->isMethod('get')){
    		return $this->successMsg('ok',$settingData);
    	}

        $registerCode = session('registerCode');

        if($registerCode != $req->code){
        	return $this->errorMsg('验证码错误！');
        }

        if(empty($req->username) || empty($req->password)){
        	return $this->errorMsg('请认真填！');
        }

        $isHad = $user->where('phone',$req->username)->first();

        if(!empty($isHad)){
			return $this->errorMsg('已经存在的电话号码！');
        }

        $data['username'] = $req->username;
        $data['phone'] = $req->username;
        $data['nickname'] = '用户'.$req->username;
        $data['password'] = Hash::make($req->password);
        $user_id = $user->insertGetId($data);
        $user_extend->insert(['user_id',$user_id]); // 用户扩展

        return $this->successMsg('ok');
    }

    //登录
    public function login(){
    	$credentials = $req->only('phone', 'password');
    	if (! $token = JWTAuth::attempt($credentials)) {
            return ['code'=>500,'message'=>'账号密码错误！'];
        }
        $rs = $user->where(['phone'=>$credentials['phone']])->update(['token'=>$token]); // 登陆成功
        $jwt = $this->respondWithToken($token);
        $userInfo = $user->where(['token'=>$token])->first();
		$data['user_info']['nickname'] = $userInfo['nickname'];
		$data['user_info']['username'] = $userInfo['username'];
		$data['user_info']['email'] = $userInfo['email'];
		$data['user_info']['avatar'] = $userInfo['avatar'];
		$data['user_info']['phone'] = $userInfo['phone'];
		$data['code'] = $jwt->original['code'];
		$data['expires_in'] = $jwt->original['expires_in'];
		$data['token'] = $jwt->original['token'];
		$data['token_type'] = $jwt->original['token_type'];
		return $data;
    }

    // 发送短信
    public function send_sms(Request $req,SendSms $sendSms){
    	// $data = $sendSms->send($req->phone);
    	$data = ['code'=>200,'data'=>'12345'];
    	if($data['code'] == 500){
    		return $this->errorMsg($data['message']);
    	}else{
    		session('registerCode',$data['data']);
    		return $this->successMsg('ok',$data['data']);
    	}
    }

}
