<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GoodsDelivery extends Model
{
    protected $table = "goods_delivery"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
