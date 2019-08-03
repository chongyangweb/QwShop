<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\UserExtend;
use App\Model\BalanceLog;

class BalanceLogController extends BaseController
{
    // 修改余额并加入日志
    public function auto_balance($data){
    	$userId = $data['user_id'];
    	$is_type = $data['is_type'];
    	$money = abs($data['money']+0);
    	$remarks = $data['remarks'];

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
    	$log['add_time'] = $add_time;

    	$rs = $balance_log->insert($log);

    	return $this->returnData($rs);

    }
}
