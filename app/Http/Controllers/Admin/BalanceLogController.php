<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\UserExtend;
use App\Model\BalanceLog;

class BalanceLogController extends BaseController
{
    public function index(Request $req,UserExtend $user_extend){
    	$userId = $req->user_id;
    	$userExtendInfo = $user_extend->where('user_id',$userId)->first();
    	return $userExtendInfo;
    }


    // 修改余额并加入日志
    public function auto_balance(Request $req,UserExtend $user_extend,BalanceLog $balance_log){
    	$userId = $req->user_id;
    	$is_type = $req->is_type;
    	$money = abs($req->money+0);
    	$remarks = $req->remarks;

    	$userExtendInfo = $user_extend->where('user_id',$userId)->first();
    	$balance = $userExtendInfo['balance'];

    	if($is_type == 0){
    		if($balance < $money){
    			return $this->returnData(false,401,'余额不够。');
    		}
    		$extends['balance'] = $balance - $money;
    	}else{
    		$extends['balance'] = $balance + $money;
    	}
    	$rs = $user_extend->where('user_id',$userId)->update($extends);

    	$log['money'] = $money;
    	$log['user_id'] = $userId;
    	$log['is_type'] = $is_type;
    	$log['remarks'] = $remarks;
    	$log['add_time'] = time();

    	$rs = $balance_log->insert($log);

    	return $this->returnData($rs);

    }
}
