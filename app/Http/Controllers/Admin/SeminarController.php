<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Seminar;
use App\Model\Columns;
use App\Tools\Uploads;

class SeminarController extends BaseController
{
    public function index(Request $req,Seminar $seminar){
    	$this->where = empty($req->title)?'':[['title','like','%'.$req->title.'%']];
        $seminar = $seminar->with(['get_parent_name'=>function($q){
            $q->select('id','name')->withDefault(['name'=>'【无分类】']);
        }]);
        $data['data'] = $this->getData($seminar);
        $data['page'] = $this->getPage('Article');
        return $data;
    }

    public function add(Request $req,Seminar $seminar,Columns $columns){
    	if($req->isMethod('get')){
    		$data['columns'] = $columns->where('is_type',3)->get();
    		return $data;
    	}

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['title'] = $req->title;
        $data['cid'] = $req->cid;
        $data['author'] = $req->author;
        $data['content'] = $req->content;
        $data['is_hot'] = $req->is_hot;
        $data['is_top'] = $req->is_top;
        $data['add_time'] = time();

        if(!empty($req->thumb)){
            $data['thumb'] = $req->thumb;
        }

        $rs = $seminar->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,Seminar $seminar,Columns $columns,$id){
        if($req->isMethod('get')){
            $data['info'] = $seminar->find($id);
            $data['columns'] = $columns->where('is_type',3)->get();
            return $data;
        }

        if(empty($req->title)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['title'] = $req->title;
        $data['cid'] = $req->cid;
        $data['author'] = $req->author;
        $data['content'] = $req->content;
        $data['is_hot'] = $req->is_hot;
        $data['is_top'] = $req->is_top;

        if(!empty($req->thumb)){
            $data['thumb'] = $req->thumb;
        }

        $rs = $seminar->where('id',$id)->update($data);
        return $this->returnData(true);

    }

    public function del(Request $req,Seminar $seminar){
        $ids = explode(',',$req->id);
    	$rs = $seminar->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

    public function thumb(Request $req,Uploads $uploads){
    	$data['is_thumb'] = true;
        $data['width'] = 250;
        $data['height'] = 250;
    	$fileInfo = $uploads->uploads($data);
        return $fileInfo;
    }
}
