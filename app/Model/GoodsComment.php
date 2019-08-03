<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GoodsComment extends Model
{
    protected $table = "goods_comment"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;

    public function get_user(){
    	return $this->hasOne('App\Model\User','id','user_id');
    }

    public function get_goods(){
    	return $this->hasOne('App\Model\Goods','id','goods_id');
    }

    // 获取回复
    public function get_rec(){
    	return $this->hasOne('App\Model\GoodsComment','parent_id','id');
    }
}
