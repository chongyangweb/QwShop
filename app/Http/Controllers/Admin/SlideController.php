<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Slide;
use App\Tools\Uploads;

class SlideController extends BaseController
{
    public function index(Request $req,Slide $slide){
        $this->where = empty($req->name)?'':[['name','like','%'.$req->name.'%']];
        $data['data'] = $this->getData($slide);
        $data['page'] = $this->getPage('Slide');
        return $data;
    }

    public function add(Request $req,Slide $slide){
    	if($req->isMethod('get')){
    		return $data;
    	}

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['image_url'] = $req->image_url;
        $data['url'] = $req->url;
        $data['sort'] = $req->sort;
        $data['is_type'] = $req->is_type;

        if(empty($req->image_url)){
            return $this->returnData(false,401,'请上传图片！');
        }

        $rs = $slide->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,Slide $slide,$id){
        if($req->isMethod('get')){
            $data['info'] = $slide->find($id);
            return $data;
        }

        if(empty($req->name)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['name'] = $req->name;
        $data['image_url'] = $req->image_url;
        $data['url'] = $req->url;
        $data['sort'] = $req->sort;
        $data['is_type'] = $req->is_type;

        if(empty($req->image_url)){
            return $this->returnData(false,401,'请上传图片！');
        }

        $rs = $slide->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,Slide $slide){
        $ids = explode(',',$req->id);
    	$rs = $slide->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

    public function slide(Request $req,Uploads $uploads){
    	$fileInfo = $uploads->uploads();
        return $fileInfo;
    }

}
