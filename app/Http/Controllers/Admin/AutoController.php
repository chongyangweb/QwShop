<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tools\Uploads;

class AutoController extends BaseController
{
	// 图片上传
    public function content_upload(Request $req,Uploads $uploads){
    	$fileInfo = $uploads->uploads();
    	$fileInfo['errno'] = 0;
    	$fileInfo['data'] = [$fileInfo['path']];
        return $fileInfo;
    }
}
