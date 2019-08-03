<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GoodsServer extends Model
{
    protected $table = "goods_server"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
