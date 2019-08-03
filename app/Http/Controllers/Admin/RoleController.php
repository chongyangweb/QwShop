<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Role;
use App\Model\Cat;
use App\Http\Requests\RoleRequest;

class RoleController extends BaseController
{
    public function index(Request $req,Role $role){
        $this->where = empty($req->name)?'':[['name','like','%'.$req->name.'%']];
        $data['data'] = $this->getData($role);
        $data['page'] = $this->getPage('Role');
        return $data;
    }

    public function add(Request $req,Cat $cat){
        $cat = $cat->get();
        $data = getTree($cat);
        return $data;
    }

    public function added(RoleRequest $req,Role $role){
    	$data = $req->only('name','perssion');
        $data['perssion'] = is_null($req->perssion)?'':$data['perssion'];
    	$rs = $role->insert($data);
    	return $this->returnData($rs);
    }

    public function edit(Role $role,Cat $cat,$id){
    	$data['info'] = $role->find($id);
		$perssion = $cat->get();
		$data['perssion'] = $perssion;
		return $data;
    }

    public function edited(RoleRequest $req,Role $role,$id){
		$data = $req->only('name','perssion');
        $data['perssion'] = is_null($req->perssion)?'':$data['perssion'];
		$rs = $role->where('id',$id)->update($data);
		return $this->returnData($rs);
    }

    public function del(Request $req,Role $role){
        $ids = explode(',',$req->id);
    	$rs = $role->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }
}
