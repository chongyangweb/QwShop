<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TeacherMaterial;
use Tymon\JWTAuth\Facades\JWTAuth;

class TeacherMaterialController extends BaseController
{
    public function index(Request $req,TeacherMaterial $teacher_material){
        $userInfo = $userInfo = JWTAuth::parseToken()->touser();
        array_push($this->where,['user_id',$userInfo['id']]);
        $data['data'] = $this->getData($teacher_material);
        $data['page'] = $this->getPage('TeacherMaterial');
        return $data;
    }

    public function add(Request $req,TeacherMaterial $teacher_material){
    	if($req->isMethod('get')){
    		return;
    	}

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }
        $userInfo = $userInfo = JWTAuth::parseToken()->touser();
        $data['title'] = $req->title;
        $data['content'] = $req->content;
        $data['user_id'] = $userInfo['id'];

        $rs = $teacher_material->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,TeacherMaterial $teacher_material,$id){
        if($req->isMethod('get')){
            $data['info'] = $teacher_material->find($id);
            return $data;
        }

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['title'] = $req->title;
        $data['content'] = $req->content;

        $rs = $teacher_material->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,TeacherMaterial $teacher_material){
        $ids = explode(',',$req->id);
    	$rs = $teacher_material->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

    // 问题绑定材料需要获取数据
    public function bind_question(Request $req,TeacherMaterial $teacher_material){
        $userInfo = $userInfo = JWTAuth::parseToken()->touser();
        array_push($this->where,['user_id',$userInfo['id']]);
        array_push($this->where,['title','like','%'.$req->search.'%']);
        $data['data'] = $this->getData($teacher_material);
        return $data;
    }



}
