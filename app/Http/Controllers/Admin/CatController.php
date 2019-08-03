<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CatRequest;
use App\Model\Cat;

class CatController extends BaseController
{
    public function index(Request $req,Cat $cat){
        $this->where = empty($req->name)?'':[['name','like','%'.$req->name.'%']];
        $cat = $cat->with(['get_parent_name'=>function($q){
            $q->select('id','name')->withDefault(['name'=>'【顶级栏目】']);
        }]);
        $data['data'] = getTree($this->getData($cat));
        $data['page'] = $this->getPage('Cat');
        return $data;
    }

    public function add(Request $req,Cat $cat){
        $parent = $cat->where('pid','0')->get();
        $data = getTree($parent);
        return $data;
    }

    public function added(CatRequest $req,Cat $cat){
    	$data = $req->only('pid','name','ename','url','icon','sort');
        $data['url'] = is_null($req->url)?'':$data['url'];
        $data['ename'] = is_null($req->ename)?'':$data['ename'];
        $data['icon'] = is_null($req->icon)?'':$data['icon'];
        $data['sort'] = is_null($req->sort)?'':$data['sort'];
    	$rs = $cat->insert($data);
    	return $this->returnData($rs);
    }

    public function edit(Cat $cat,$id){
		$parent = $cat->where('pid','0')->get();
		$data['parent'] = getTree($parent);
		$data['info'] = $cat->find($id);
		return $data;
    }

    public function edited(CatRequest $req,Cat $cat,$id){
		$data = $req->only('pid','name','ename','url','icon','sort');
        $data['url'] = is_null($req->url)?'':$data['url'];
        $data['ename'] = is_null($req->ename)?'':$data['ename'];
        $data['icon'] = is_null($req->icon)?'':$data['icon'];
        $data['sort'] = is_null($req->sort)?'':$data['sort'];
		$rs = $cat->where('id',$id)->update($data);
		return $this->returnData(true);
    }

    public function del(Request $req,Cat $cat){
        $ids = explode(',',$req->id);
    	$rs = $cat->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

}
