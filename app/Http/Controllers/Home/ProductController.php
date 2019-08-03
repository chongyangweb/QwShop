<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Product;
use App\Model\Columns;

class ProductController extends Controller
{
    public function index(Request $req,Product $product,Columns $columns){
		if($req->cid>0){
			$data['product'] = $product->where('cid',$req->cid)->orderBy('id','desc')->paginate(12);
		}else{
			$data['product'] = $product->orderBy('id','desc')->paginate(12);
		}
		$data['columns'] = $columns->where('is_type',2)->orderBy('id','asc')->get();
		return $data;
	}

    public function  getProduct(Request $req,Product $product,$id){
    	$data['product'] = $product->find($id);
    	$data['next_id'] = $product->where('id','<',$id)->max('id');
    	$data['prev_id'] = $product->where('id','>',$id)->min('id');

    	if(empty($data['prev_id'])){
    		$data['prev']['title'] = '没有上一篇了。';
    	}else{
    		$data['prev'] = $product->select('title')->find($data['prev_id']);
    	}

    	if(empty($data['next_id'])){
    		$data['next']['title'] = '没有下一篇了。';
    	}else{
    		$data['next'] = $product->select('title')->find($data['next_id']);
    	}
    	
    	
    	return $data;
    }
}
