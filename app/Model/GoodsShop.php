<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GoodsShop extends Model
{
    protected $table = "goods_shop"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
