<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Product;
use App\Model\Columns;
use App\Tools\Uploads;

class ProductController extends BaseController
{
    public function index(Request $req,Product $product){
    	$this->where = empty($req->title)?'':[['title','like','%'.$req->title.'%']];
        $product = $product->with(['get_parent_name'=>function($q){
            $q->select('id','name')->withDefault(['name'=>'【无分类】']);
        }]);
        $data['data'] = $this->getData($product);
        $data['page'] = $this->getPage('Product');
        return $data;
    }

    public function add(Request $req,Product $product,Columns $columns){
    	if($req->isMethod('get')){
    		$data['columns'] = $columns->where('is_type',2)->get();
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

        $rs = $product->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,Product $product,Columns $columns,$id){
        if($req->isMethod('get')){
            $data['info'] = $product->find($id);
            $data['columns'] = $columns->where('is_type',2)->get();
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

        $rs = $product->where('id',$id)->update($data);
        return $this->returnData(true);

    }

    public function del(Request $req,Product $product){
        $ids = explode(',',$req->id);
    	$rs = $product->whereIn('id',$ids)->delete();
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
