<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BalanceLog extends Model
{
    protected $table = "balance_log"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
