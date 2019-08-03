<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Goods extends Model
{
    protected $table = "goods"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;

    // 获取单个SKU
    public function get_sku(){
    	return $this->hasOne('App\Model\GoodsSpec','goods_id','id');
    }

    // 获取所有sku
    public function get_all_sku(){
    	return $this->hasMany('App\Model\GoodsSpec','goods_id','id');
    }

    // 获取所有规格属性
    public function get_all_attr(){
    	return $this->hasMany('App\Model\GoodsAttr','goods_id','id');
    }

    // 获取店铺信息
    public function get_shop(){
        return $this->hasOne('App\Model\GoodsShop','user_id','user_id');
    }

}
