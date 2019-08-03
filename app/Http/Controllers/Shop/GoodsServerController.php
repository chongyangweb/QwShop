<?php

namespace App\Http\Controllers\Shop;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GoodsServer;

class GoodsServerController extends BaseController
{
    public function getGoodsServer(Request $req,GoodsServer $goods_server){
    	$dealer = $this->dealer;
    	$data['goods_server'] = $goods_server->where(['user_id'=>$dealer])->first();
    	return $data;
    }
}
