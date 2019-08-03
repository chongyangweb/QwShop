<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TeacherClass;
use App\Model\User;
use App\Model\TeacherExtend;
use Tymon\JWTAuth\Facades\JWTAuth;

class TeacherClassController extends BaseController
{
    public function index(Request $req,TeacherClass $teacher_class){
        $data['data'] = $this->getData($teacher_class);
        $data['page'] = $this->getPage('TeacherClass');
        return $data;
    }

    public function add(Request $req,TeacherClass $teacher_class){
    	if($req->isMethod('get')){
    		return;
    	}

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }
        $userInfo = $userInfo = JWTAuth::parseToken()->touser();
        $data['name'] = $req->name;
        $data['teacher_id'] = $userInfo['id'];
        $data['add_time'] = time();

        $rs = $teacher_class->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,TeacherClass $teacher_class,$id){
        if($req->isMethod('get')){
            $data['info'] = $teacher_class->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        $rs = $teacher_class->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,TeacherClass $teacher_class){
        $ids = explode(',',$req->id);
    	$rs = $teacher_class->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }


    // 班级人员
    public function user_index(Request $req,TeacherClass $teacher_class,User $user,$id){
        $classInfo = $teacher_class->find($id);
        $this->whereIn = [];
        array_push($this->whereIn,['id',explode(',',$classInfo['students'])]);
        $data['data'] = $this->getData($user);
        $data['page'] = $this->getPage('User');
        return $data;
    }

    // 删除班级人员
    public function user_del(Request $req,TeacherClass $teacher_class){
        $ids = explode(',',$req->id);
        $classId = $req->class_id;
        $classInfo = $teacher_class->find($classId);
        $classUser = [];
        if(!empty($classInfo['students'])){
            $classUser = explode(',',$classInfo['students']);
        }
        foreach($ids as $k=>$v){
            foreach($classUser as $key=>$vo){
                if($v==$vo){
                    unset($ids[$k]);
                    unset($classUser[$key]);
                }
            }

        }
        $arr = array_merge($classUser,$ids);
        $rs = $teacher_class->where('id',$classId)->update(['students'=>implode(',',$arr)]);
        return $this->returnData($rs);
    }

    // 为班级人员添加卷子
    public function add_paper(Request $req,TeacherExtend $teacher_extend){
        $ids = $req->id;
        $idsArr = explode(',',$ids);
        $paperId = $req->paper_id;
        $teacherExtendList = $teacher_extend->whereIn('user_id',$idsArr)->get();
        foreach($teacherExtendList as $v){
            $paperArr = [];
            if(!empty($v['papers'])){
                $paperArr = explode(',',$v['papers']);
            }
            if(!in_array($paperId,$paperArr)){
                array_push($paperArr,$paperId);
            }
            var_dump($paperArr);
            $rs = $teacher_extend->where('user_id',$v['user_id'])->update(['papers'=>(implode(',',$paperArr))]);
        }

        return $this->returnData($rs);
    }



}
