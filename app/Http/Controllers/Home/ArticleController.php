<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Article;
use App\Model\Columns;

class ArticleController extends Controller
{
	public function index(Request $req,Article $article,Columns $columns){
		if($req->cid>0){
			$data['article'] = $article->where('cid',$req->cid)->orderBy('id','desc')->paginate(16);
		}else{
			$data['article'] = $article->orderBy('id','desc')->paginate(16);
		}
		$data['columns'] = $columns->where('is_type',1)->orderBy('id','asc')->get();
		return $data;
	}

    public function  getArticle(Request $req,Article $article,$id){
    	$data['article'] = $article->find($id);
    	$data['next_id'] = $article->where('id','<',$id)->max('id');
    	$data['prev_id'] = $article->where('id','>',$id)->min('id');

    	if(empty($data['prev_id'])){
    		$data['prev']['title'] = '没有上一篇了。';
    	}else{
    		$data['prev'] = $article->select('title')->find($data['prev_id']);
    	}

    	if(empty($data['next_id'])){
    		$data['next']['title'] = '没有下一篇了。';
    	}else{
    		$data['next'] = $article->select('title')->find($data['next_id']);
    	}
    	
    	
    	return $data;
    }
}
