<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TeacherGrade;

class TeacherGradeController extends BaseController
{
    public function index(Request $req,TeacherGrade $teacher_grade){
        $data['data'] = $this->getData($teacher_grade);
        $data['page'] = $this->getPage('TeacherGrade');
        return $data;
    }

    public function add(Request $req,TeacherGrade $teacher_grade){
    	if($req->isMethod('get')){
    		return;
    	}

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        $rs = $teacher_grade->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,TeacherGrade $teacher_grade,$id){
        if($req->isMethod('get')){
            $data['info'] = $teacher_grade->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        $rs = $teacher_grade->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,TeacherGrade $teacher_grade){
        $ids = explode(',',$req->id);
    	$rs = $teacher_grade->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }



}
