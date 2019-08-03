<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $table = "role"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
