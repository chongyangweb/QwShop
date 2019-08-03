<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Model\User;
use App\Model\UserExtend;
use App\Tools\Uploads;
use App\Model\Setting;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserRegister;
use Overtrue\EasySms\EasySms;

class UserController extends BaseController
{
    public function login(Request $req,User $user){
    	$credentials = $req->only('username', 'password');
    	if (! $token = JWTAuth::attempt($credentials)) {
            return ['code'=>500,'message'=>'账号密码错误！'];
        }

        $rs = $user->where(['username'=>$credentials['username']])->update(['token'=>$token]); // 登陆成功
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

    public function me()
    {
        return response()->json(JWTAuth::parseToken()->touser());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        JWTAuth::parseToken()->invalidate();

        return response()->json(['message' => '成功退出！','code'=>200]);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(JWTAuth::parseToken()->refresh());
    }

    // 判断一个token 是否失效
    public function checkUser(Request $req,User $user){
    	if(!isset($req->token)){
    		return ['code'=>500,'message'=>'无Token'];
    	}


        $data = $this->respondWithToken($req->token);
        try{
            $payload = JWTAuth::parseToken()->getPayload();
        } catch (\Exception $e) {
            return ['code'=>500,'message'=>'失效Token','data'=>$data];
        }
        
        $newData = json_decode($data->getContent(),true);
        // 判断是否过期
        if($payload['exp']>=time() && time()>=$payload['exp']-3600){
            $data = $this->refresh();
            $newData = json_decode($data->getContent(),true);
            $user->where('token',$req->token)->update(['token'=>$newData['token']]);
            $req->token = $newData['token'];
        }
        $data = $newData;
        // var_dump($data,JWTAuth::parseToken()->check());

    	if(JWTAuth::parseToken()->check()){
    		return ['code'=>200,'message'=>'有效Token','data'=>$data];
    	}else{
            return ['code'=>500,'message'=>'非法Token','data'=>$data];
        }
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'token' => $token,
            'code' => 200,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60
        ]);
    }

    // 扩展用户信息的获取
    public function getUserInfo(UserExtend $user_extend){
        $userInfo = JWTAuth::parseToken()->touser();
        $userExtend = $user_extend->where('user_id',$userInfo['id'])->first();
        if(empty($userExtend)){
            $rs = $user_extend->insert(['user_id'=>$userInfo['id']]);
            $userExtend = $user_extend->where('user_id',$userInfo['id'])->first();
        }
        $data['user_info'] = $userInfo;
        $data['user_extend'] = $userExtend;
        return $data;
    }

    // 头像上传
    public function avatar(Request $req,Uploads $uploads){
        if($req->isMethod('options')){
            return response('success',204);
        }
        $data['is_thumb'] = true;
        $data['width'] = 80;
        $data['height'] = 80;
        $fileInfo = $uploads->uploads($data);
        return response($fileInfo,201);
        return $fileInfo;
    }

    // 修改头像
    public function editAvatar(Request $req,User $user){
        $userInfo = JWTAuth::parseToken()->touser();
        $imagePath = $req->imagePath;
        $rs = $user->where('id',$userInfo['id'])->update(['avatar'=>$imagePath]);
        return $this->successMsg();
    }

    // 修改用户信息
    public function editUserInfo(Request $req,User $user){
        $userInfo = JWTAuth::parseToken()->touser();

        if($req->isMethod('get')){
            $data = $user->where('id',$userInfo['id'])->first();
            return $this->successMsg('ok',$data);
        }

        $data['nickname'] = $req->nickname;
        $data['email'] = $req->email;
        $data['phone'] = $req->phone;
        $data['gender'] = $req->gender;
        $rs = $user->where('id',$userInfo['id'])->update($data);
        return $this->successMsg();
    }

    // 修改账号密码
    public function editPassword(Request $req,User $user){
        $userInfo = JWTAuth::parseToken()->touser();
        $hashCheck = Hash::check($req->old_password,$userInfo['password']);
        
        if($hashCheck){
            $user->where('id',$userInfo['id'])->update(['password'=>Hash::make($req->new_password)]);
            return $this->successMsg('修改成功，刷新请重新登录！');
        }else{
            return $this->errorMsg('旧密码错误！');
        }
    }

    // 注册
    public function getRegister(Request $req,User $user,Setting $setting){
        $settingData = $setting->where('name','register')->first();
        // $code = $this->sendSms('15073010917');
        // dd($code);
        // // Mail::to('364825702@qq.com')->send(new UserRegister());
        return $settingData;
    }

    // 注册
    public function PostRegister(Request $req,User $user,Setting $setting){
        $settingData = $setting->where('name','register')->first();
        if($settingData['val'] == 1){   // 发送邮件

        }else{
            // 发送电话
            $phone = $req->phone;
            $code = $this->sendSms($phone);
            session('registerCode', $code);
            return $this->successMsg();
        }



    }


    public function sendSms($phone){
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
                    'access_key_id' => 'LTAI5Uw2Koz8VAYK',
                    'access_key_secret' => 'RpemKQtIz0THJDfBxOai01JuWy7k1X',
                    'sign_name' => '青梧信息用户注册验证码',
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
            return $e->getExceptions();
        }
        
        return $rand;
    }
    

}
