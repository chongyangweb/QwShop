<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Article;
use App\Model\Columns;
use App\Tools\Uploads;

class ArticleController extends BaseController
{
    public function index(Request $req,Article $article){
    	$this->where = empty($req->title)?'':[['title','like','%'.$req->title.'%']];
        $article = $article->with(['get_parent_name'=>function($q){
            $q->select('id','name')->withDefault(['name'=>'【无分类】']);
        }]);
        $data['data'] = $this->getData($article);
        $data['page'] = $this->getPage('Article');
        return $data;
    }

    public function add(Request $req,Article $article,Columns $columns){
    	if($req->isMethod('get')){
    		$data['columns'] = $columns->where('is_type',1)->get();
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

        $rs = $article->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,Article $article,Columns $columns,$id){
        if($req->isMethod('get')){
            $data['info'] = $article->find($id);
            $data['columns'] = $columns->where('is_type',1)->get();
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

        $rs = $article->where('id',$id)->update($data);
        return $this->returnData(true);

    }

    public function del(Request $req,Article $article){
        $ids = explode(',',$req->id);
    	$rs = $article->whereIn('id',$ids)->delete();
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
