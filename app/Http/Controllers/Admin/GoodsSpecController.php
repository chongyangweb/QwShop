<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsSpec;

class GoodsSpecController extends BaseController
{
    public function add(Request $req,GoodsSpec $goods_spec){
    	$goods_id = explode(':',$req->goods_id);
    	$name = explode(':',$req->name);
    	$price = explode(':',$req->price);

    	// $marking_price = explode(':',$req->marking_price);
    	$num = explode(':',$req->num);
    	for($i=0;$i<count($goods_id);$i++){
    		$data[$i]['goods_id'] = $goods_id[$i];
    		$data[$i]['name'] = $name[$i];
    		$data[$i]['price'] = $price[$i];
    		// $data[$i]['marking_price'] = $marking_price[$i];
    		$data[$i]['num'] = $num[$i];
    		$data[$i]['add_time'] = time();
    	}
    	$rs = $goods_spec->insert($data);
    	return $this->returnData($rs);
    }


    public function edit(Request $req,GoodsSpec $goods_spec){
        $spec_id = explode(':',$req->spec_id);
        $name = explode(':',$req->name);
        $price = explode(':',$req->price);
        // $marking_price = explode(':',$req->marking_price);
        $num = explode(':',$req->num);
        for($i=0;$i<count($spec_id);$i++){
            $data['price'] = $price[$i];
            // $data[$i]['marking_price'] = $marking_price[$i];
            $data['num'] = $num[$i];
            $data['add_time'] = time();
            $rs = $goods_spec->where('id',$spec_id[$i])->update($data);
        }
        
        return $this->returnData($rs);
    }

    public function goods_spec_del(Request $req,GoodsSpec $goods_spec,$id){
        $rs = $goods_spec->where('goods_id',$id)->delete();
        return response('success',200);
    }
}
