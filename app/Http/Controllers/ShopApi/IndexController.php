<?php

namespace App\Http\Controllers\ShopApi;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Slide;

class IndexController extends BaseController
{

	// 首页信息
    public function index(Request $req){

    }

    // 获取主页幻灯片
    public function get_slide(Request $req,Slide $slide){
    	$data['list'] = $slide->where(['is_type'=>1])->get();
    	return $this->successMsg('ok',$data);
    }
}
