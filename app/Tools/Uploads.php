<?php

namespace App\Tools;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Intervention\Image\ImageManager;
use App\Model\Setting;
use App\Model\Config;

class Uploads extends Controller{

    private $ossClient;

    private $resp = [
        'status'        =>  false,
        'path'          =>  '', 
        'thumb_path'    =>  '', 
    ];

    private $allow = ['image/jpeg','image/png','image/gif'];
    private $water = ''; // 水印图片地址

    private $width = 800;
    private $height = 800;

    // 上传文件
    public function uploads($data = []){

        // 默认name
        $name = 'file';

        // 如果没有name默认file
        if(isset($data['name'])){
            $name = $data['name'];
        }

        // 如果没有文件则返回false
        if(!Input::hasFile($name)){
            $this->resp['msg'] = '无图片上传！';
            return $this->resp;
        }

        // 获取文件后缀
        $ext = Input::file($name)->getClientOriginalExtension();//获取后缀

        // 文件名字
        $filename = time().mt_rand(1000,9999);

        // 判断是否又自定义名字
        if(isset($data['filename'])){
            $filename = $data['filename'];
        }

        $returnPath = '/Uploads/'.date('Y_m_d');

        // 文件存储路径
        $filepath = public_path($returnPath);

        // 判断是否又自定义路径
        if(isset($data['filepath'])){
            $returnPath = '/Uploads/'.$data['filepath'];
            $filepath = public_path($returnPath);
        }

        if (!file_exists($filepath)) {
            mkdir($filepath,  0777, true);
        }

        // 保存文件全路径
        $file = $filepath.'/'.$filename.'.'.$ext;

        // 文件资源
        $fileres = Input::file($name);

        // 实例化扩展 使用gd
        $manager = new ImageManager(['driver' => 'gd']);

        // 获取他的mine类型
        $mime = $manager->make($fileres)->mime();

        // 自定义限制
        if(isset($data['allow'])){
            $this->allow = $data['allow'];
        }

        if(!in_array($mime,$this->allow)){
            $this->resp['msg'] = $mime.'，图片类型非法！';
            return $this->resp;
        }

        $obj = $manager->make($fileres);

        //  判断是否缩略图
        if(isset($data['is_thumb'])){
            
            // 判断是否有自定义宽高
            if(isset($data['width']) && isset($data['height'])){
                $this->width = $data['width'];
                $this->height = $data['height'];
            }

            $width = $manager->make($fileres)->width();
            $height = $manager->make($fileres)->height();

            if($width > $this->width || $height > $this->height){
                $width = $this->width;
                $height = $this->height;
            }

            $obj = $obj->resize($width,$height,function($v){
                $v->aspectRatio();  // 这个应该是同比例缩减
            })->resizeCanvas($width,$height);

            $is_thumb = true;
            
        }

        // 是否加水印
        if(isset($data['is_water'])){
            $obj = $obj->insert($this->water,'bottom-right', 10, 10);
        }

        // 是否留存原图片
        if(isset($data['is_source']) && isset($data['is_thumb'])){
            unset($data['is_thumb'],$data['is_source']);
            $source = $this->uploads($data);
             $this->data['path'] = $source['path'];
        }

        $obj->save($file);

        $realfile = $returnPath.'/'.$filename.'.'.$ext;

        // 判断是否使用OSS
        $setting_model = new Setting;
        $upload_setting = $setting_model->where(['name'=>'upload'])->first();
        if($upload_setting['val'] == 'local'){
            $appUrl = env("APP_URL");
        }else{
            $config_model = new Config;
            $config_alioss = $config_model->where(['is_type'=>'alioss'])->get();
            $config_alioss_format = $this->get_config_name($config_alioss);

            // Alioss   阿里云OSS上传
            $is_endpoint = empty($config_alioss_format['city'])?false:true;
            require_once base_path('vendor/aliyuncs/oss-sdk-php/autoload.php');
            $OssClient = new \OSS\OssClient($config_alioss_format['app_id'], $config_alioss_format['app_secret'], $config_alioss_format['alioss_endpoint'], $is_endpoint);
            try {
                $ossInfo = $OssClient->uploadFile($config_alioss_format['alioss_bucket'],ltrim($realfile,'/'),$file);
            } catch (OssException $e) {
                return $e->getMessage();
            }

            $appUrl = '';
            $realfile = $ossInfo['info']['url'];
            
        }

        if(isset($is_thumb)){
            $this->data['thumb_path'] = $appUrl.$realfile;
        }else{
             $this->data['path'] = $appUrl.$realfile;
        }

        $this->data['status'] = true;
        $this->data['msg'] = '上传成功！';

        return $this->data;

    }


    // 头像
    public function avatar($data = []){
        $data['is_thumb'] = true;
        $data['width'] = 80;
        $data['height'] = 80;
        $uploadInfo = $this->uploads($data);
        
        return $uploadInfo['thumb_path'];
    }

    // 获取配置文件内容
    public function get_config_name($data){
        $res = [];
        foreach($data as $v){
            $res[$v['name']] = $v['val'];
        }
        return $res;
    }

}
