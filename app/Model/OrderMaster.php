<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OrderMaster extends Model
{
    protected $table = "order_master"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
