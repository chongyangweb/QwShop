<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OrderPayLog extends Model
{
    protected $table = "order_pay_log"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
