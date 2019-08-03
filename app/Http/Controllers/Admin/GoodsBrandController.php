<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsBrand;
use App\Tools\Uploads;

class GoodsBrandController extends BaseController
{
    public function index(Request $req,GoodsBrand $goods_brand){
    	$this->where = empty($req->name)?'':[['name','like','%'.$req->name.'%']];
        $data['data'] = $this->getData($goods_brand);
        $data['page'] = $this->getPage('GoodsBrand');
        return $data;
    }

    public function add(Request $req,GoodsBrand $goods_brand){
    	
        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['add_time'] = time();

        if(!empty($req->image)){
            $data['image'] = $req->image;
        }

        $rs = $goods_brand->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,GoodsBrand $goods_brand,$id){
        if($req->isMethod('get')){
            $data['info'] = $goods_brand->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;

        if(!empty($req->image)){
            $data['image'] = $req->image;
        }

        $rs = $goods_brand->where('id',$id)->update($data);
        return $this->returnData(true);

    }

    public function del(Request $req,GoodsBrand $goods_brand){
        $ids = explode(',',$req->id);
    	$rs = $goods_brand->whereIn('id',$ids)->delete();
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
