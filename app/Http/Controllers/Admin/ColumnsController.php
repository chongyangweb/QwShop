<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Columns;

class ColumnsController extends BaseController
{
    public function index(Request $req,Columns $columns){

    	$is_type = empty($req->is_type)?0:$req->is_type;
    	// 判断是否存在类型
    	if(!empty($req->is_type)){
    		array_push($this->where,['is_type',$req->is_type]);
    	}

    	if(!empty($req->name)){
    		array_push($this->where,['name',$req->name]);
    	}

    	$columns = $columns->with(['get_parent_name'=>function($q){
            $q->select('id','name')->withDefault(['name'=>'【顶级栏目】']);
        }]);

    	$data['data'] = $this->getData($columns);
        $data['page'] = $this->getPage('Columns');
        return $data;
    }

    // 添加
    public function add(Request $req,Columns $columns,$is_type=0){

    	// 判断是否存在类型
        $where = ['is_type'=>$req->is_type];

    	if($req->isMethod('get')){
    		$data['parent'] = $columns->where('pid',0)->where($where)->get();
    		return $data;
    	}

    	$data['is_type'] = $req->is_type??1;
    	$data['pid'] = $req->pid??0;
    	$data['name'] = $req->name??'';
    	$data['sort'] = $req->sort??0;

    	$rs = $columns->insert($data);
    	$this->returnData($rs);
    }

    // 修改
    public function edit(Request $req,Columns $columns,$id,$is_type=0){

    	$where['is_type'] = $is_type;
    	$where['pid'] = 0;

    	if($req->isMethod('get')){
    		$data['info'] = $columns->find($id);
    		$data['parent'] = $columns->where($where)->get();
    		return $data;
    	}

    	$data['is_type'] = $req->is_type??1;
    	$data['pid'] = $req->pid??0;
    	$data['name'] = $req->name??'';
    	$data['sort'] = $req->sort??0;

    	$rs = $columns->where('id',$id)->update($data);
    	$this->returnData(true);
    }

    public function del(Request $req,Columns $columns){
        $ids = explode(',',$req->id);
    	$rs = $columns->whereIn('id',$ids)->delete();
    	return $this->returnData($rs);
    }
}
