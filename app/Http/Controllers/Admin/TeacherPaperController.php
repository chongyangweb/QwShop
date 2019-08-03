<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\TeacherPaper;
use App\Model\TeacherQuestion;
use App\Model\User;
use Tymon\JWTAuth\Facades\JWTAuth;

class TeacherPaperController extends BaseController
{
    public function index(Request $req,TeacherPaper $teacher_paper){
        $data['data'] = $this->getData($teacher_paper);
        $data['page'] = $this->getPage('TeacherPaper');
        return $data;
    }

    public function add(Request $req,TeacherPaper $teacher_paper){
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

        $rs = $teacher_paper->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,TeacherPaper $teacher_paper,$id){
        if($req->isMethod('get')){
            $data['info'] = $teacher_paper->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        $rs = $teacher_paper->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,TeacherPaper $teacher_paper){
        $ids = explode(',',$req->id);
    	$rs = $teacher_paper->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }


    // 获取所有试卷
    public function get_paper(Request $req,TeacherPaper $teacher_paper){
        $userInfo = $userInfo = JWTAuth::parseToken()->touser();
        return $teacher_paper->where('teacher_id',$userInfo['id'])->get();
    }

    // 添加题目到试卷
    public function add_paper(Request $req,TeacherPaper $teacher_paper){
        $question_ids = $req->id;
        $paperId = $req->paper_id;
        $paperInfo = $teacher_paper->find($paperId);
        $paperQuestion = [];
        if(!empty($paperInfo['questions'])){
            $paperQuestion = explode(',',$paperInfo['questions']);
        }
        $question_arr = explode(',',$question_ids);

        $real_arr = $paperQuestion;
        foreach($question_arr as $v){
            if(!in_array($v,$real_arr)){
                array_push($real_arr,$v);
            }
        }
        
        $rs = $teacher_paper->where('id',$paperId)->update(['questions'=>implode(',',$real_arr)]);
        return $this->returnData($rs);
    }


    // 试卷题目处理
    public function question_index(Request $req,TeacherPaper $teacher_paper,TeacherQuestion $teacher_question,$id){
        $paperInfo = $teacher_paper->find($id);
        $this->whereIn = [];
        array_push($this->whereIn,['id',explode(',',$paperInfo['questions'])]);
        // echo $teacher_question->toSql();
        $teacher_question = $teacher_question->with(['get_grade','get_subject']);
        $data['data'] = $this->getData($teacher_question);
        $data['page'] = $this->getPage('TeacherQuestion');
        return $data;
    }


    public function question_del(Request $req,TeacherPaper $teacher_paper){
        $ids = explode(',',$req->id);
        $paperId = $req->paper_id;
        $paperInfo = $teacher_paper->find($paperId);
        $paperInfoIdArr = [];
        if(!empty($paperInfo['questions'])){
            $paperInfoIdArr = explode(',',$paperInfo['questions']);
        }

        foreach($ids as $k=>$v){
            foreach($paperInfoIdArr as $key=>$vo){
                if($v==$vo){
                    unset($ids[$k]);
                    unset($paperInfoIdArr[$key]);
                }
            }

        }
        $arr = array_merge($paperInfoIdArr,$ids);
        $rs = $teacher_paper->where('id',$paperId)->update(['questions'=>implode(',',$arr)]);
        return $this->returnData($rs);
    }



}
