<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TeacherGg;
use Tymon\JWTAuth\Facades\JWTAuth;

class TeacherGgController extends Controller
{
    public function index(Request $req,TeacherGg $teacher_gg){
    	$userInfo = JWTAuth::parseToken()->touser();
    	if($req->isMethod('get')){
    		$goods_server_exists = $teacher_gg->where('user_id',$userInfo['id'])->exists();
    		if(!$goods_server_exists){
    			$rs = $teacher_gg->insert(['user_id'=>$userInfo['id'],'links'=>'']);
    		}
    		$data['teacher_gg'] = $teacher_gg->where('user_id',$userInfo['id'])->first();
    		return $data;
    	}

        $data['img'] = $req->img;
    	$data['links'] = $req->links;
    	$rs = $teacher_gg->where('user_id',$userInfo['id'])->update($data);
    }
}
