<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsComment;

class GoodsCommentController extends BaseController
{
    public function getGoodsComment(Request $req,GoodsComment $goods_comment){
    	$id = $req->id;
    	// array_push($this->where,['goods_id',$id]);
    	// var_dump($this->where);
    	$goods_comment = $goods_comment->with(['get_user','get_rec']);
    	$data['goods_comment'] = $this->getData($goods_comment);
    	$data['page'] = $this->getPage('GoodsComment');
    	return $data;
    }
}
