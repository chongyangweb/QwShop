<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use EasyWeChat\Factory;
use App\Model\Config;
use App\Model\UserWechat;
use App\Model\User;
use Tymon\JWTAuth\Facades\JWTAuth;

class WechatController extends Controller
{
    public function index(Request $req){
    	
    	$config = $this->getConfig();
		$app = Factory::officialAccount($config);
		$response = $app->server->serve();
		return $response;
    }

    // 掉起微信的授权
    public function getWechat(Request $req){
        $configArr = $this->getConfigInfo();
    	$config = $this->getConfig();
        $config['oauth']['callback'] = configArr['callback'];
        $config['oauth']['scopes'] = ['snsapi_userinfo'];
		$app = Factory::officialAccount($config);
		$response = $app->oauth->redirect();
		return $response;
    }

    // 授权成功就得回调
    public function callback(Request $req){
        $configArr = $this->getConfigInfo();
        $config = $this->getConfig();
        $app = Factory::officialAccount($config);
        $oauth = $app->oauth;
        $user = $oauth->user();
        $userWechat = $user->original;
        $openid = $this->wechatLogin($userWechat);
        header('location:'. $configArr['return_url']); // 跳转到 user/profile
    }

    // 微信登录  userWechat 为微信网页授权获取的信息
    public function wechatLogin($userWechat){
        $user_wechat = new UserWechat;
        $user = new User;
        $wechatInfo = $user_wechat->where('user_id','>',0)->where('openid',$userWechat['openid'])->first();
        if(empty($wechatInfo)){
            // 新建账号
            $userData['nickname'] = $userWechat['nickname'];
            $userData['password'] = Hash::make($userWechat['openid']);
            $userData['gender'] = $userWechat['sex'];
            $userData['avatar'] = $userWechat['headimgurl'];
            $userData['add_time'] = time();
            $user_id = $user->insertGetId($userData);

            // 插入微信信息
            $wechatData['openid'] = $userWechat['openid'];
            $wechatData['nickname'] = $userWechat['openid'];
            $wechatData['sex'] = $userWechat['openid'];
            $wechatData['user_id'] = $user_id;
            $wechatData['add_time'] = time();
            $user_wechat->insert($wechatData);
        }

        return $wechatInfo['openid'];

    }


    // 获取配置信息
    public function getConfig(){
    	$configArr = $this->getConfigInfo();

    	$configs = [
		    'app_id' => $configArr['app_id']['val'],
		    'secret' => $configArr['app_secret']['val'],
            'token' => $configArr['token']['val'],

		    // 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名
		    'response_type' => 'array',

		    //...
		];

		return $configs;
    }

    // 获取数据库的配置信息
    public function getConfigInfo(){
        $config = new Config;
        $configInfo = $config->where('user_id',0)->where('is_type','wechat')->get();
        foreach($configInfo as $v){
            $configArr[$v['name']] = $v;
        }
        return $configArr;
    }

    
}
