<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = "orders"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;

    // 获取订单商品信息
    public function get_order_goods(){
    	return $this->hasMany('App\Model\OrderGoods','order_id','id');
    }
}
