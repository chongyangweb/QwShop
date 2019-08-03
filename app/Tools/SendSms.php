<?php

namespace App\Tools;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManager;
use Overtrue\EasySms\EasySms;
use App\Model\Config;

class SendSms extends Controller{

	// 发送
	public function send($phone){
		$config = new Config;
		$configInfo = $config->where('is_type','alisms')->where('user_id','0')->get();
		foreach($configInfo as $v){
            $configArr[$v['name']] = $v;
        }

        $configs = [
            // HTTP 请求的超时时间（秒）
            'timeout' => 5.0,

            // 默认发送配置
            'default' => [
                // 网关调用策略，默认：顺序调用
                'strategy' => \Overtrue\EasySms\Strategies\OrderStrategy::class,

                // 默认可用的发送网关
                'gateways' => ['aliyun'],
            ],
            // 可用的网关配置
            'gateways' => [
                'errorlog' => [
                    'file' => '/tmp/easy-sms.log',
                ],
                'aliyun' => [
                    'access_key_id' => $configArr['app_id']['val'],
                    'access_key_secret' => $configArr['app_secret']['val'],
                    'sign_name' => $configArr['sign_name']['val'],
                ],
                //...
            ],
        ];

        $easySms = new EasySms($configs);
        
        $rand = mt_rand(10000,99999);
        try {
            $rs = $easySms->send($phone, [
                // 'content'  => $rand,
                'template' => 'SMS_166476835',
                'data' => [
                    'code' => $rand
                ],
            ], ['aliyun']);
        } catch (\Exception $e) {
        	$returnData = ['code'=>500,'message'=>$e->getExceptions(),'data'=>''];
            return $returnData;
        }
        
        return ['code'=>200,'data'=>$rand,'message'=>'ok'];
    }

}