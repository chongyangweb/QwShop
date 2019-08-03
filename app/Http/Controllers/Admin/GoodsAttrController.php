<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsAttr;

class GoodsAttrController extends BaseController
{
    public function add(Request $req,GoodsAttr $goods_attr){
    	$goods_id = explode(':',$req->goods_id);
    	$name = explode(':',$req->name);
    	$val = explode(':',$req->val);
    	for($i=0;$i<count($goods_id);$i++){
    		$data[$i]['goods_id'] = $goods_id[$i];
    		$data[$i]['name'] = $name[$i];
    		$data[$i]['val'] = $val[$i];
    		$data[$i]['add_time'] = time();
    	}
    	$rs = $goods_attr->insert($data);
    	return $this->returnData($rs);
    }

    public function goods_attr_del(Request $req,GoodsAttr $goods_attr,$id){
        $rs = $goods_attr->where('goods_id',$id)->delete();
        return response($rs.'',200);
    }
}
