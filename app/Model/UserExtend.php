<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class UserExtend extends Model
{
    protected $table = "user_extend"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
