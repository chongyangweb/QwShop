<?php

namespace App\Http\Controllers\Seller;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Cash;
use App\Model\Bank;
use App\Model\UserExtend;

class CashController extends BaseController
{
    public function index(Request $req,Cash $cash_model){
    	$userInfo = JWTAuth::parseToken()->touser();
    	array_push($this->where,['user_id',$userInfo['id']]);
    	$data['data'] = $this->getData($cash_model);
        $data['page'] = $this->getPage('Cash');
        return $data;
    }

    public function add(Request $req,Cash $cash_model,Bank $bank_model,UserExtend $user_extend_model){
    	
    	$userInfo = JWTAuth::parseToken()->touser();
    	$userExtendInfo = $user_extend_model->where('user_id',$userInfo['id'])->find();

    	if($req->isMethod('get')){
    		$data['bank'] = $bank_model->get();
    		return $data;
    	}
    	

    	if($userExtendInfo['balance']<$req->money){
    		return $this->returnData(false);
    	}


    	$data['bank_name'] = $req->bank_name;
    	$data['card_no'] = $req->card_no;
    	$data['name'] = $req->name;
    	$data['user_id'] = $userInfo['id'];
    	$data['money'] = $req->money;
    	$data['add_time'] = time();
    	$rs = $cash_model->insert($data);
    	return $this->returnData($rs);

    }


}
