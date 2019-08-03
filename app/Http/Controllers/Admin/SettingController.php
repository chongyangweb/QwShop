<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Setting;
use App\Tools\Uploads;

class SettingController extends BaseController
{
    public function index(Request $req,Setting $setting){

    	if($req->isMethod('get')){
    		$data = $setting->get();
	    	foreach($data as $k=>$v){
	    		$returnData[$v['name']] = $v;
	    	}
	    	return $returnData;
    	}

    	$data = $req->all();

    	foreach($data as $k=>$v){
    		if(!empty($v)){
    			$rs = $setting->where('name',$k)->update(['val'=>$v]);
    		}
    	}

    	return $this->returnData(true);
    	
    }

    public function upload_logo(Uploads $uploads){
    	$fileInfo = $uploads->uploads();
        return $fileInfo;
    }
}
