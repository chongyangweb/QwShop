<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Model\Cat;
use App\Model\Role;

class IndexController extends BaseController
{
    public function index(Request $req,Cat $cat,Role $role){
        $cat = $cat->orderBy('sort','asc')->get();
        $data['user'] = JWTAuth::parseToken()->touser();

        $role_id = $data['user']['role'];
        $roleInfo = $role->whereIn('id',explode(',',$role_id))->get();

        $perssionIds = '';
        foreach($roleInfo as $v){
        	if(empty($perssionIds)){
        		$perssionIds = $v['perssion'];
        	}else{
        		$perssionIds .= ','.$v['perssion'];
        	}
        }

        $perssionIdsArr = explode(',', $perssionIds);
        $data['cat'] = [];
        foreach($cat as $k=>$v){
        	if(in_array($v['id'],$perssionIdsArr)){
        		$data['cat'][] = $v;
        	}
        }

        return $data;
    }
}
