<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/','index');
Route::view('/Admin/login','index');

// 后台首页
Route::view('/Admin/index','index');
Route::view('/Admin/system_index','index');
Route::view('/Admin/system_version','index');
Route::view('/Admin/task_index','index');

// 栏目
Route::view('/Admin/cat/index','index');
Route::view('/Admin/cat/add','index');
Route::view('/Admin/cat/edit','index');


/*********************
 * 商家后台
*****************************/

Route::view('/Seller/login','index');
Route::view('/Seller/index','index');
Route::view('/Seller/goods/index','index');
