<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsComment;
use Tymon\JWTAuth\Facades\JWTAuth;

class GoodsCommentController extends BaseController
{
    public function index(Request $req,GoodsComment $goods_comment){
    	$userInfo = JWTAuth::parseToken()->touser();
    	// array_push($this->where,['order_no','like',"%".$req->id."%"]);
    	array_push($this->where,['dealer_id',$userInfo['id']]);
    	array_push($this->where,['parent_id',0]);
    	$goods_comment = $goods_comment->with(['get_goods','get_rec']);
        $data['goods_comment'] = $this->getData($goods_comment);
        $data['page'] = $this->getPage('GoodsComment');
        return $data;
    }

    // 商家回复
    public function recGoodsComment(Request $req,GoodsComment $goods_comment){
    	$id = $req->id;
    	$content = isset($req->content)?$req->content:'';
    	$userInfo = JWTAuth::parseToken()->touser();
    	$data['user_id'] = $userInfo['id'];
    	$data['parent_id'] = $id;
    	$data['content'] = $content;
    	$data['add_time'] = time();
    	$rs = $goods_comment->insert($data);
    	return $this->returnData($rs);
    }
}
