<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = "setting"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
