<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use App\Model\User;
use App\Model\Role;
use App\Tools\Uploads;
use Illuminate\Support\Facades\Hash;

class UserController extends BaseController
{
    public function index(Request $req,User $user){
        $this->where = empty($req->username)?'':[['username','like','%'.$req->username.'%']];
        $data['data'] = $this->userRole($this->getData($user));
        $data['page'] = $this->getPage('User');
        return $data;
    }

    public function add(Request $req,User $user,Role $role){
    	if($req->isMethod('get')){
    		$data['roleList'] = $role->get();
    		return $data;
    	}

        if(empty($req->username) || empty($req->password) || empty($req->role)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['username'] = $req->username;
        $data['password'] = Hash::make($req->password);
        $data['email'] = $req->email;
        $data['nickname'] = $req->nickname;
        $data['role'] = $req->role;
        $data['add_time'] = time();

        if(!empty($req->avatar)){
            $data['avatar'] = $req->avatar;
        }

        $rs = $user->insert($data);
        return $this->returnData($rs);

    }

    public function edit(Request $req,User $user,Role $role,$id){
        if($req->isMethod('get')){
            $data['info'] = $user->find($id);
            $data['info']['password'] = '';
            $data['roleList'] = $role->get();
            return $data;
        }

        if(empty($req->username) || empty($req->role)){
            return $this->returnData(false,401,'请认真填写！');
        }

        $data['username'] = $req->username;
        $data['email'] = $req->email;
        $data['nickname'] = $req->nickname;
        $data['role'] = $req->role;

        if(!empty($req->avatar)){
            $data['avatar'] = $req->avatar;
        }

        if(!empty($req->password)){
            $data['password'] = Hash::make($req->password);
        }

        $rs = $user->where('id',$id)->update($data);
        return $this->returnData($rs);

    }

    public function del(Request $req,User $user){
        $ids = explode(',',$req->id);
    	$rs = $user->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }

    // 用户数据权限显示
    public function userRole($data){

        if(empty($data)){
            return $data;
        }

        $role = new Role;

        foreach($data as $k=>$v){

            if(!empty($v['role'])){
                $v['role'] = explode(',',$v['role']);
                $roleList = $role->whereIn('id',$v['role'])->get();
                foreach($roleList as $vo){
                    $v['role_name'] .= ','.$vo['name']; 
                }
                $v['role_name'] = ltrim($v['role_name'],',');
            }else{
                $v['role_name'] = '<font color="red">无任何权限</font>';
            }
            
            $arr[$k] = $v;
        }
        return $arr;
    }

    public function avatar(Request $req,Uploads $uploads){
    	$fileInfo = $uploads->avatar();
        return $fileInfo;
    }
}
