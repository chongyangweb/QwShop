<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GoodsArea extends Model
{
    protected $table = "goods_area"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
