<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class BaseController extends Controller
{
	public $limit = 30;
	public $page = 1;
	public $where = [];
    public $whereIn = [];
	public $order = ['id','desc'];
	public $select = [];
	public $join = '';
	public $with = [];
	private $modelSpace = 'App\Model\\';

    public function __construct()
    {
        // 这里额外注意了：官方文档样例中只除外了『login』
        // 这样的结果是，token 只能在有效期以内进行刷新，过期无法刷新
        // 如果把 refresh 也放进去，token 即使过期但仍在刷新期以内也可刷新
        // 不过刷新一次作废
        $this->middleware('jwt.auth', ['except' => ['login','checkUser']]);
        // 另外关于上面的中间件，官方文档写的是『auth:api』
        // 但是我推荐用 『jwt.auth』，效果是一样的，但是有更加丰富的报错信息返回
    } 

    // 获取数据
    public function getData($tableObj){
    	$this->limit = Input::get('limit')??$this->limit;
        $this->page = Input::get('page')??$this->page;

    	// 条件查询
    	if(!empty($this->where)){
    		foreach($this->where as $v){
    			if(count($v)>2){
    				$tableObj = $tableObj->where($v[0],$v[1],$v[2]);
    			}else{
    				$tableObj = $tableObj->where($v[0],$v[1]);
    			}
    		}
    	}

        if(!empty($this->whereIn)){
            foreach($this->whereIn as $v){
                 $tableObj = $tableObj->whereIn($v[0],$v[1]);
            }
        }

    	// 字段筛选
    	if(!empty($this->select)){
    		$tableObj = $tableObj->select('id');
    		foreach($this->select as $v){
    			$tableObj = $tableObj->addSelect($v);
    		}
    	}

    	$skip = ($this->page-1)*$this->limit;
    	$tableObj = $tableObj->offset($skip)->limit($this->limit);

    	// 排序
    	$tableObj = $tableObj->orderBy($this->order[0],$this->order[1]);

    	$data = $tableObj->get();

    	return $data;
    }


    // 获取分页数据
    public function getPage($table){
    	$modelPath = $this->modelSpace.$table;
    	$tableObj = new $modelPath();

    	// 条件查询
    	if(!empty($this->where)){
    		foreach($this->where as $v){
    			if(count($v)>2){
    				$tableObj = $tableObj->where($v[0],$v[1],$v[2]);
    			}else{
    				$tableObj = $tableObj->where($v[0],$v[1]);
    			}
    		}
    	}

        if(!empty($this->whereIn)){
            foreach($this->whereIn as $v){
                 $tableObj = $tableObj->whereIn($v[0],$v[1]);
            }
        }

    	// file_put_contents(getcwd().'/huanggao.txt', $tableObj);
    	$data['count'] = $tableObj->count();
    	$data['page'] = (int)$this->page;
    	$data['limit'] = (int)$this->limit;
    	$data['pageCount'] = empty($data['count'])?1:ceil($data['count']/$data['limit']);

    	return $data;
    }

    // 公用状态码返回
    public function returnData($rs,$code=401,$msg=''){
    	if($rs){
    		return response('success',200);
    	}else{
    		return response($msg.' fail',$code);
    	}
    }

    public function isEmpty($data){
        if(is_null($data) || empty($data)){
            return false;
        }else{
            return true;
        }
    }

    // 获取控制器名字和方法
    public function getController(){
        // App\Http\Controllers\Admin\ColumnsController@index
        $act = request()->route()->getAction();
        $actArr = explode('\\',$act['controller']);
        $realAct = end($actArr);
        $realActArr = explode('@',$realAct);
        $data['controller'] = $realActArr[0];
        $data['action'] = $realActArr[1];
        $data['controller_name'] = str_replace('Controller','',$data['controller']);
        return $data;
    }

    
}
