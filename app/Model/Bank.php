<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Bank extends Model
{
    protected $table = "bank"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
