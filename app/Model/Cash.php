<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Cash extends Model
{
    protected $table = "cash"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
