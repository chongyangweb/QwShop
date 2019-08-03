<?php

namespace App\Http\Controllers\Home;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Slide;
use App\Model\Product;
use App\Model\Article;
use App\Model\Setting;
use App\Model\columns;

class IndexController extends Controller
{
	// 首页信息
	public function index(Request $req,Slide $slide,Product $product,Article $article){
		$data['product'] = $product->take(9)->orderBy('id','desc')->get();
		$data['article'] = $article->take(4)->orderBy('id','desc')->get();
		$data['slide_pc'] = $slide->where('is_type',0)->orderBy('sort','asc')->get();
		$data['slide_mobile'] = $slide->where('is_type',1)->orderBy('sort','asc')->get();
		return $data;
	}

	// 全局公共信息
    public function getCommon(Request $req,Columns $columns,Setting $setting){
    	// $data['columns'] = $columns->orderBy('sort','asc')->get();
    	// $data['setting'] = $setting->get();
    	// return $data;
    }

    public function getSetting(Request $req,Setting $setting){
    	$settingData = $setting->get();
    	foreach($settingData as $v){
    		$data['setting'][$v['name']] = $v['val'];
    	}
    	return $data;
    }
}
