<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Slide extends Model
{
    protected $table = "slide"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;
}
