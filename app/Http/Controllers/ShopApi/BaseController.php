<?php

namespace App\Http\Controllers\ShopApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;

class BaseController extends Controller
{
    public $dealer = 13; // 默认使用的经销商店铺
    public $agent = 13; // 代理

    public $limit = 30;
    public $page = 1;
    public $where = [];
    public $whereIn = [];
    public $order = ['id','desc'];
    public $select = [];
    public $join = '';
    public $with = [];
    private $modelSpace = 'App\Model\\';

    public function __construct(Request $req){
    	$dealer = $req->dealer;
    	$agent = $req->agent;

    	if(!empty($dealer)){
            if(empty(session('dealer'))){
                session('dealer',$dealer);
                $this->dealer = $dealer;
                // if(empty($agent)){
                //     $this->agent = $this->dealer;
                // }else{
                //     $this->agent = $agent;
                // }
            }else{
                $this->dealer = session('dealer');
            }
    	}else{
            if(!empty(session('dealer'))){
                $this->dealer = session('dealer');
            }
        }
    }

    // 公用状态码返回
    public function returnData($rs,$code=401,$msg=''){
    	if($rs){
    		return response('success',200);
    	}else{
    		return response($msg.' fail',$code);
    	}
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


    public function errorMsg($msg='异常'){
        return ['code'=>500,'message'=>$msg];
    }

    public function successMsg($msg='成功',$data=""){
        return ['code'=>200,'message'=>$msg,'data'=>$data];
    }

    public function autoMsg($code="401",$msg='成功'){
        return ['code'=>$code,'message'=>$msg];
    }

    public function putFile($name,$content){
        return file_put_contents(getcwd().'/'.$name.'.txt',$content);
    }
}
