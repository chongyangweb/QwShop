<?php

namespace App\Http\Controllers\Seller;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Model\User;
use App\Model\Store;

class LoginController extends BaseController
{
    public function login(Request $req,User $user,Store $store){
    	$credentials = $req->only('username', 'password');

        // 判断是否是商家
        $user_info = $user->select("id")->where(['username'=>$credentials['username']])->first();

        if(empty($user_info)){
            return response()->json(['message' => '没有该商家账户！','code'=>500]);
        }

        $seller_info = $store->where(['user_id'=>$user_info['id']])->first();

        if(empty($seller_info) || $seller_info['status']!=1 ){
            return response()->json(['message' => '没有该商家账户2！','code'=>500]);
        }

    	if (! $token = JWTAuth::attempt($credentials)) {
            return $this->returnData(false,401,'账号密码错误！');
        }

        $rs = $user->where(['username'=>$credentials['username']])->update(['token'=>$token]); // 登陆成功
        return $this->respondWithToken($token);
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
    public function checkUser(Request $req){
    	if(!isset($req->token)){
    		return ['code'=>500,'message'=>'无Token'];
    	}

        $data = $this->respondWithToken($req->token);
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
}
