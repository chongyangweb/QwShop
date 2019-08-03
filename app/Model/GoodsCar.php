<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GoodsCar extends Model
{
    protected $table = "goods_car"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;

    // 获取商户信息
    public function get_goods_info(){
    	return $this->hasOne('App\Model\Goods','id','goods_id');
    }

    public function get_goods_spec(){
    	return $this->hasOne('App\Model\GoodsSpec','id','spec_id');
    }
}
