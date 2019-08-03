<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class WechatCat extends Model
{
    protected $table = "wechat_cat"; //指定表
    protected $primaryKey = "id"; //指定id字段
    public $timestamps = false;

    // 获取所有子栏目
    public function get_child_cat(){
    	return $this->hasMany('App\Model\WechatCat','pid','id');
    }
}
