<?php

namespace App\Http\Controllers\Seller;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Model\Cat;
use App\Model\Role;

class IndexController extends BaseController
{
    public function index(Request $req,Cat $cat,Role $role){
        $data['user'] = JWTAuth::parseToken()->touser();
        return $data;
    }
}
