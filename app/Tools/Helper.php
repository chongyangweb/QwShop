<?php


/**
 * @param $url 请求网址
 * @param bool $params 请求参数
 * @param int $ispost 请求方式
 * @param int $https https协议
 * @return bool|mixed
 */
function curl($url, $params = false, $ispost = 0, $https = 0)
{
    $httpInfo = array();
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36');
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    if ($https) {
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); // 对认证证书来源的检查
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); // 从证书中检查SSL加密算法是否存在
    }
    if ($ispost) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
        curl_setopt($ch, CURLOPT_URL, $url);
    } else {
        if ($params) {
            if (is_array($params)) {
                $params = http_build_query($params);
            }
            curl_setopt($ch, CURLOPT_URL, $url . '?' . $params);
        } else {
            curl_setopt($ch, CURLOPT_URL, $url);
        }
    }

    $response = curl_exec($ch);

    if ($response === FALSE) {
        //echo "cURL Error: " . curl_error($ch);
        return false;
    }
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $httpInfo = array_merge($httpInfo, curl_getinfo($ch));
    curl_close($ch);
    return $response;
}

//无限树状结构
function getTree($data,$pid=0,$lev=0){
    static $arr = array();
    foreach($data as $v){
        if($v['pid']==$pid){
            $v['lev'] = $lev;
            $arr[] = $v;
            getTree($data,$v['id'],$lev+1);
        }
    }
    return $arr;
}


//获取真实ip地址 并转化
function getIp(){
    static $ips = null;//防止用户多次访问多次调用函数用静态变量存储
    if($ips == null){
        if(getenv('REMOTE_ADDR')){//初次判断是否能直接获取到ip
            $ips = sprintf('%u',ip2long(getenv('REMOTE_ADDR')));
        }elseif(getenv('HTTP_CLIENT_IP')){//如果是iis搭建的服务器也能获取
            $ips = sprintf('%u',ip2long(getenv('HTTP_CLIENT_IP')));
        }elseif(getenv('HTTP_X_FORWORDED_FOR')){//是否是服务器代理服务器代理也能获取
            $ips = sprintf('%u',ip2long(getenv('HTTP_FORWORDED_FOR')));
        }
    }
    return $ips;
}

