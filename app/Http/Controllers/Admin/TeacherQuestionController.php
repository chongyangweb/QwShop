<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TeacherQuestion;
use App\Model\TeacherAnswer;
use App\Model\TeacherGrade;
use App\Model\TeacherSubject;
use App\Model\TeacherMaterial;
use App\Tools\Uploads;
use Tymon\JWTAuth\Facades\JWTAuth;

class TeacherQuestionController extends BaseController
{
    public function index(Request $req,TeacherQuestion $teacher_question){
    	$this->where = empty($req->title)?'':[['title','like','%'.$req->title.'%']];
        $teacher_question = $teacher_question->with(['get_grade','get_subject']);
        $data['data'] = $this->getData($teacher_question);
        $data['page'] = $this->getPage('TeacherQuestion');
        return $data;
    }

    public function index_public(Request $req,TeacherQuestion $teacher_question){
        array_push($this->where,['title','like',"%".$req->title."%"]);
        array_push($this->where,['is_public',1]);
        $teacher_question = $teacher_question->with(['get_grade','get_subject']);
        $data['data'] = $this->getData($teacher_question);
        $data['page'] = $this->getPage('TeacherQuestion');
        return $data;
    }

    public function add(Request $req,TeacherQuestion $teacher_question,TeacherGrade $teacher_grade,TeacherSubject $teacher_subject,TeacherAnswer $teacher_answer){
        $userInfo = JWTAuth::parseToken()->touser();
    	if($req->isMethod('get')){
            $data['grade'] = $teacher_grade->get();
            $data['subject'] = $teacher_subject->get();
    		return $data;
    	}

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['title'] = $req->title;
        $data['grade_id'] = $req->grade_id;
        $data['subject_id'] = $req->subject_id;
        $data['is_type'] = $req->is_type;
        $data['material_id'] = $req->material_id;
        $data['analysis'] = $req->analysis;
        $data['teacher_id'] = $userInfo['id'];
        $data['add_time'] = time();

        \DB::beginTransaction(); 

        $question_id = $teacher_question->insertGetId($data); // 获取题目ID

        $answer = $req->answer; // 获取答案数据

        if(empty($answer) || !isset($answer)){
            \DB::rollBack(); // 回滚事务
            return $this->returnData(false,401,'没有答案插入失败');
        }

        // 构建答案数据
        $data = [];
        foreach($answer as $v){
            $dataArr['question_id'] = $question_id;
            $dataArr['title'] = $v['title'];
            $dataArr['image'] = isset($v['image'])?$v['image']:'';
            $dataArr['is_answer'] = $v['is_answer'];
            $data[] = $dataArr;
        }

        $rs = $teacher_answer->insert($data);

        \DB::commit(); // 提交事务

        return $this->returnData($rs);

    }

    public function edit(Request $req,TeacherQuestion $teacher_question,TeacherGrade $teacher_grade,TeacherSubject $teacher_subject,TeacherAnswer $teacher_answer,TeacherMaterial $teacher_material,$id){
        $userInfo = JWTAuth::parseToken()->touser();
        if($req->isMethod('get')){
            $data['info'] = $teacher_question->find($id);
            $data['grade'] = $teacher_grade->get();
            $data['subject'] = $teacher_subject->get();
            $data['material'] = $teacher_material->find($data['info']['material_id']);
            $data['answer'] = $teacher_answer->where('question_id',$id)->get();
            return $data;
        }

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['title'] = $req->title;
        $data['grade_id'] = $req->grade_id;
        $data['subject_id'] = $req->subject_id;
        $data['is_type'] = $req->is_type;
        $data['teacher_id'] = $userInfo['id'];
        $data['material_id'] = $req->material_id;
        $data['analysis'] = $req->analysis;

        \DB::beginTransaction(); 

        $rs = $teacher_question->where('id',$id)->update($data);

        $answer = $req->answer; // 获取答案数据

        if(empty($answer) || !isset($answer)){
            \DB::rollBack(); // 回滚事务
            return $this->returnData(false,401,'没有答案插入失败');
        }

        $teacher_answer->where('question_id',$id)->delete();

        // 构建答案数据
        $data = [];
        foreach($answer as $v){
            $dataArr['question_id'] = $id;
            $dataArr['title'] = $v['title'];
            $dataArr['image'] = isset($v['image'])?$v['image']:'';
            $dataArr['is_answer'] = $v['is_answer'];
            $data[] = $dataArr;
        }

        $rs = $teacher_answer->insert($data);

        \DB::commit(); // 提交事务

        return $this->returnData(true);

    }

    public function del(Request $req,TeacherQuestion $teacher_question,TeacherAnswer $teacher_answer){
        $ids = explode(',',$req->id);
        $teacher_answer->whereIn('question_id',$ids)->delete();
    	$rs = $teacher_question->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

    public function add_public(Request $req,TeacherQuestion $teacher_question,TeacherAnswer $teacher_answer){
        $ids = explode(',',$req->id);
        $rs = $teacher_question->whereIn('id',$ids)->update(['is_public'=>1]);
        return $this->returnData($rs);
    }

    public function thumb(Request $req,Uploads $uploads){
    	$data['is_thumb'] = true;
        $data['width'] = 400;
        $data['height'] = 280;
    	$fileInfo = $uploads->uploads($data);
        return $fileInfo;
    }
}
