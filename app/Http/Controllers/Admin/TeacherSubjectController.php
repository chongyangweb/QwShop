<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TeacherGrade;
use App\Model\TeacherSubject;

class TeacherSubjectController extends BaseController
{
    public function index(Request $req,TeacherSubject $teacher_subject){
        $data['data'] = $this->getData($teacher_subject);
        $data['page'] = $this->getPage('TeacherSubject');
        return $data;
    }

    public function add(Request $req,TeacherSubject $teacher_subject,TeacherGrade $teacher_grade){
    	if($req->isMethod('get')){
    		return;
    	}

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        $rs = $teacher_subject->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,TeacherSubject $teacher_subject,TeacherGrade $teacher_grade,$id){
        if($req->isMethod('get')){
            $data['info'] = $teacher_subject->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        $rs = $teacher_subject->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,TeacherSubject $teacher_subject){
        $ids = explode(',',$req->id);
    	$rs = $teacher_subject->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }



}
