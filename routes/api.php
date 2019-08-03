<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Admin')->prefix('Admin')->group(function(){
	Route::get('test',function(){
		$token = JWTAuth::attempt(['username'=>'6666','password'=>'123456']);
		var_dump($token);
		return 123;
	});

	// 视图公共部分 index.vue
	Route::get('/index','IndexController@index');

	// 单独出来的各种接口
	Route::match(['options','post','get'],'/Auto/content_upload', 'AutoController@content_upload');

	// 登陆接口
	Route::post('/login', 'LoginController@login');
	Route::get('/logout', 'LoginController@logout');
	Route::post('/checkUser', 'LoginController@checkUser');
	Route::get('/refresh', 'LoginController@refresh'); // 刷新token

	// 栏目
	Route::get('/cat/add', 'CatController@add');
	Route::post('/cat/add', 'CatController@added');
	Route::post('/cat/del', 'CatController@del');
	Route::post('/cat/edit/{id}', 'CatController@edited');
	Route::get('/cat/edit/{id}', 'CatController@edit');
	Route::post('/cat/index', 'CatController@index');

	// 角色
	Route::get('/role/add', 'RoleController@add');
	Route::post('/role/add', 'RoleController@added');
	Route::post('/role/del', 'RoleController@del');
	Route::post('/role/edit/{id}', 'RoleController@edited');
	Route::get('/role/edit/{id}', 'RoleController@edit');
	Route::post('/role/index', 'RoleController@index');

	// 用户
	Route::match(['get','post'],'/user/add', 'UserController@add');
	Route::post('/user/del', 'UserController@del');
	Route::match(['get','post'],'/user/edit/{id}', 'UserController@edit');
	Route::post('/user/index', 'UserController@index');
	Route::match(['options','post'],'/user/avatar', 'UserController@avatar');

	// 幻灯片
	Route::match(['get','post'],'/slide/add', 'SlideController@add');
	Route::post('/slide/del', 'SlideController@del');
	Route::match(['get','post'],'/slide/edit/{id}', 'SlideController@edit');
	Route::post('/slide/index', 'SlideController@index');
	Route::match(['options','post'],'/slide/slide', 'SlideController@slide');

	// 系统设置
	Route::match(['get','post'],'/setting/index','SettingController@index');
	Route::match(['options','post'],'/setting/upload_logo', 'SettingController@upload_logo');

	// 配置信息 如微信App_id 等
	Route::post('/config/getConfig','ConfigController@getConfig');
	Route::post('/config/editConfig','ConfigController@editConfig');

	// 文章产品专题栏目
	Route::match(['get','post'],'/columns/add/{is_type?}', 'ColumnsController@add')->where('is_type', '[0-9]+');
	Route::post('/columns/del', 'ColumnsController@del');
	Route::match(['get','post'],'/columns/edit/{id}/{is_type?}', 'ColumnsController@edit')->where('is_type', '[0-9]+');
	Route::post('/columns/index', 'ColumnsController@index');

	// 文章管理
	Route::match(['get','post'],'/article/add', 'ArticleController@add');
	Route::post('/article/del', 'ArticleController@del');
	Route::match(['get','post'],'/article/edit/{id}', 'ArticleController@edit');
	Route::post('/article/index', 'ArticleController@index');
	Route::match(['options','post'],'/article/thumb', 'ArticleController@thumb');

	// 产品管理
	Route::match(['get','post'],'/product/add', 'ProductController@add');
	Route::post('/product/del', 'ProductController@del');
	Route::match(['get','post'],'/product/edit/{id}', 'ProductController@edit');
	Route::post('/product/index', 'ProductController@index');
	Route::match(['options','post'],'/product/thumb', 'ProductController@thumb');

	// 专题管理
	Route::match(['get','post'],'/seminar/add', 'SeminarController@add');
	Route::post('/seminar/del', 'SeminarController@del');
	Route::match(['get','post'],'/seminar/edit/{id}', 'SeminarController@edit');
	Route::post('/seminar/index', 'SeminarController@index');
	Route::match(['options','post'],'/seminar/thumb', 'SeminarController@thumb');

	// 商品管理
	Route::match(['get','post'],'/goods/add', 'GoodsController@add');
	Route::post('/goods/del', 'GoodsController@del');
	Route::match(['get','post'],'/goods/edit/{id}', 'GoodsController@edit');
	Route::post('/goods/index', 'GoodsController@index');
	Route::match(['OPTIONS','post'],'/goods/thumb', 'GoodsController@thumb');

	// 商品是否免单 是否上架
	Route::post('/goods/onFree','GoodsController@onFree');
	Route::post('/goods/onSale','GoodsController@onSale');

	// 商品属性添加
	Route::post('/goods_attr/add', 'GoodsAttrController@add');
	Route::post('/goods_spec/add', 'GoodsSpecController@add');// SKU添加
	Route::post('/goods_spec/edit', 'GoodsSpecController@edit');// SKU修改
	Route::get('/goods_spec/goods_spec_del/{id}', 'GoodsSpecController@goods_spec_del');
	Route::get('/goods_attr/goods_attr_del/{id}', 'GoodsAttrController@goods_attr_del');

	// 商品栏目
	Route::match(['get','post'],'/goods_cat/add', 'GoodsCatController@add');
	Route::post('/goods_cat/del', 'GoodsCatController@del');
	Route::match(['get','post'],'/goods_cat/edit/{id}', 'GoodsCatController@edit');
	Route::post('/goods_cat/index', 'GoodsCatController@index');
	Route::match(['options','post'],'/goods_cat/thumb', 'GoodsCatController@thumb');

	// 商品品牌
	Route::match(['get','post'],'/goods_brand/add', 'GoodsBrandController@add');
	Route::post('/goods_brand/del', 'GoodsBrandController@del');
	Route::match(['get','post'],'/goods_brand/edit/{id}', 'GoodsBrandController@edit');
	Route::post('/goods_brand/index', 'GoodsBrandController@index');
	Route::match(['OPTIONS','post'],'/goods_brand/thumb', 'GoodsBrandController@thumb');

	// 店铺幻灯片
	Route::match(['get','post'],'/goods_slide/add', 'GoodsSlideController@add');
	Route::post('/goods_slide/del', 'GoodsSlideController@del');
	Route::match(['get','post'],'/goods_slide/edit/{id}', 'GoodsSlideController@edit');
	Route::post('/goods_slide/index', 'GoodsSlideController@index');
	Route::match(['options','post'],'/goods_slide/slide', 'GoodsSlideController@slide');

	// 快递模版
	Route::match(['get','post'],'/goods_delivery/add', 'GoodsDeliveryController@add');
	Route::post('/goods_delivery/del', 'GoodsDeliveryController@del');
	Route::match(['get','post'],'/goods_delivery/edit/{id}', 'GoodsDeliveryController@edit');
	Route::post('/goods_delivery/index', 'GoodsDeliveryController@index');

	// 地区代理
	// 获取指定的地区信息
	Route::match(['get','post'],'/goods_area/getArea', 'GoodsAreaController@getArea');
	Route::match(['get','post'],'/goods_area/editArea', 'GoodsAreaController@editArea');//添加代理

	// 订单
	Route::post('/order/index', 'OrderController@index');
	Route::post('/order/getOrderInfo', 'OrderController@getOrderInfo');
	Route::post('/order/edit_delivery_no', 'OrderController@edit_delivery_no'); // 修改快递号，和状态

	// 售后服务内容
	Route::match(['get','post'],'/goods_server/edit', 'GoodsServerController@edit');

	//  商品评论
	Route::post('/goods_comment/index', 'GoodsCommentController@index');
	Route::post('/goods_comment/recGoodsComment', 'GoodsCommentController@recGoodsComment');

	// 店铺信息
	Route::match(['get','post'],'/goods_shop/edit', 'GoodsShopController@edit');
	Route::match(['options','post'],'/goods_shop/avatar', 'GoodsShopController@avatar');
	Route::match(['options','post'],'/goods_shop/shop_thumb', 'GoodsShopController@shop_thumb');

	// 微信公众号
	Route::match(['get','post'],'/wechat_cat/add', 'WechatCatController@add');
	Route::post('/wechat_cat/del', 'WechatCatController@del');
	Route::match(['get','post'],'/wechat_cat/edit/{id}', 'WechatCatController@edit');
	Route::post('/wechat_cat/index', 'WechatCatController@index');
	Route::get('/wechat_cat/push_wechat_cat', 'WechatCatController@push_wechat_cat'); // 推送到微信服务器

	// 微信回调服务器接口
	Route::any('/wechat/index', 'WechatController@index'); 
	Route::any('/wechat/getWechat', 'WechatController@getWechat'); 
	Route::any('/wechat/callback', 'WechatController@callback'); 


	/****************
	 * 教师答题系统
	**********************/

	// 年级
	Route::match(['get','post'],'/teacher_grade/add', 'TeacherGradeController@add');
	Route::post('/teacher_grade/del', 'TeacherGradeController@del');
	Route::match(['get','post'],'/teacher_grade/edit/{id}', 'TeacherGradeController@edit');
	Route::post('/teacher_grade/index', 'TeacherGradeController@index');

	// 科目
	Route::match(['get','post'],'/teacher_subject/add', 'TeacherSubjectController@add');
	Route::post('/teacher_subject/del', 'TeacherSubjectController@del');
	Route::match(['get','post'],'/teacher_subject/edit/{id}', 'TeacherSubjectController@edit');
	Route::post('/teacher_subject/index', 'TeacherSubjectController@index');

	// 材料
	Route::match(['get','post'],'/teacher_material/add', 'TeacherMaterialController@add');
	Route::post('/teacher_material/del', 'TeacherMaterialController@del');
	Route::match(['get','post'],'/teacher_material/edit/{id}', 'TeacherMaterialController@edit');
	Route::post('/teacher_material/index', 'TeacherMaterialController@index');
	Route::post('/teacher_material/bind_question', 'TeacherMaterialController@bind_question');

	// 问题
	Route::match(['get','post'],'/teacher_question/add', 'TeacherQuestionController@add');
	Route::post('/teacher_question/del', 'TeacherQuestionController@del');
	Route::post('/teacher_question/add_public', 'TeacherQuestionController@add_public');
	Route::match(['get','post'],'/teacher_question/edit/{id}', 'TeacherQuestionController@edit');
	Route::post('/teacher_question/index', 'TeacherQuestionController@index');
	Route::post('/teacher_question_public/index', 'TeacherQuestionController@index_public');

	// 班级
	Route::match(['get','post'],'/teacher_class/add', 'TeacherClassController@add');
	Route::post('/teacher_class/del', 'TeacherClassController@del');
	Route::match(['get','post'],'/teacher_class/edit/{id}', 'TeacherClassController@edit');
	Route::post('/teacher_class/index', 'TeacherClassController@index');

	// 班级人员先是
	Route::match(['get','post'],'/teacher_class/user_index/{id}', 'TeacherClassController@user_index');
	Route::match(['get','post'],'/teacher_class/user_del', 'TeacherClassController@user_del');	// 删除成员
	Route::match(['get','post'],'/teacher_class/add_paper', 'TeacherClassController@add_paper'); //  加入试卷

	// 试卷
	Route::match(['get','post'],'/teacher_paper/add', 'TeacherPaperController@add');
	Route::post('/teacher_paper/del', 'TeacherPaperController@del');
	Route::match(['get','post'],'/teacher_paper/edit/{id}', 'TeacherPaperController@edit');
	Route::post('/teacher_paper/index', 'TeacherPaperController@index');

	// 试卷详细展示
	Route::get('/teacher_paper/get_paper', 'TeacherPaperController@get_paper'); // 获取用户的试卷
	Route::post('/teacher_paper/add_paper', 'TeacherPaperController@add_paper'); // 试卷中添加题目
	Route::match(['get','post'],'/teacher_paper/question_index/{id}', 'TeacherPaperController@question_index');
	Route::post('/teacher_paper/question_add', 'TeacherPaperController@question_add');
	Route::post('/teacher_paper/question_del', 'TeacherPaperController@question_del');

	// 广告
	Route::match(['get','post'],'/teacher_gg/index', 'TeacherGgController@index');



});

// 前端接口

Route::namespace('Home')->group(function(){
	Route::get('/index','IndexController@index');
	Route::get('/getSetting','IndexController@getSetting');

	Route::get('/article/getArticle/{id}','ArticleController@getArticle');
	Route::match(['get','post'],'/article/index','ArticleController@index');

	Route::get('/product/getProduct/{id}','ProductController@getProduct');
	Route::match(['get','post'],'/product/index','ProductController@index');
});

// 商城前端

Route::namespace('Shop')->prefix('Shop')->group(function(){
	Route::get('/getGoodsCat','IndexController@getGoodsCat'); // 获取栏目
	Route::get('/getBanner','IndexController@getBanner'); // 获取幻灯片
	Route::get('/getIndexGoods','IndexController@getIndexGoods'); // 获取热门产品
	Route::get('/getIndexCat','IndexController@getIndexCat'); // 获取首页栏目
	Route::match(['get','post'],'/getGoodsList','GoodsListController@getGoodsList'); // 根据条件获取产品列表
	Route::match(['get','post'],'/goodsSearch','GoodsListController@goodsSearch'); // 根据条件获取产品列表

	// 獲取商品詳情
	Route::post('/getGoodsInfo','GoodsController@getGoodsInfo'); // 获取热门产品
	Route::get('/getHotGoods','GoodsController@getHotGoods'); // 获取热门产品
	Route::post('/getGoodsComment','GoodsCommentController@getGoodsComment'); // 获取热门产品

	// 购物车
	Route::post('/addGoodsCar','GoodsCarController@addGoodsCar'); 
	Route::get('/getGoodsCar','GoodsCarController@getGoodsCar'); 
	Route::get('/getGoodsCarList','GoodsCarController@getGoodsCarList'); 
	Route::post('/editGoodsCarNum','GoodsCarController@editGoodsCarNum'); 
	Route::post('/delGoodsCar','GoodsCarController@delGoodsCar'); 
	Route::post('/delGoodsCarOrder','GoodsCarController@delGoodsCarOrder'); 

	// 用户登录
	Route::post('/login','UserController@login');
	Route::post('/logout','UserController@logout'); //退出
	Route::post('/checkUser','UserController@checkUser'); // 验证是否登录
	Route::post('/getUserInfo','UserController@me'); // 获取用户信息
	Route::get('/getUserInfos','UserController@getUserInfo'); // 获取用户信息
	Route::match(['get','post'],'/editUserInfo','UserController@editUserInfo'); // 修改用户信息
	Route::match(['get','post'],'/editPassword','UserController@editPassword'); // 修改密码
	Route::get('/getRegister','UserController@getRegister'); // 注册前
	Route::post('/postRegister','UserController@postRegister'); // 注册后

	// 购物地址
	Route::post('/addGoodsAddress','GoodsAddressController@addGoodsAddress'); //添加
	Route::get('/getGoodsAddress','GoodsAddressController@getGoodsAddress');  // 获取
	Route::post('/delGoodsAddress','GoodsAddressController@delGoodsAddress');  // 获取
	Route::post('/defaultGoodsAddress','GoodsAddressController@defaultGoodsAddress');  // 获取

	// 订单
	Route::post('/addOrder','OrderController@addOrder');  // 添加订单
	Route::post('/getOrderList','OrderController@getOrderList');  // 订单列表
	Route::post('/order/cancelPay','OrderController@cancelPay');  // 取消订单
	Route::post('/order/confirm','OrderController@confirm');  // 确认收货
	Route::post('/order/logistics','OrderController@logistics');  // 确认收货
	Route::post('/order/comment','OrderController@comment');  // 去评论
	Route::post('/order/pay','OrderController@pay');  // 订单支付

	// 支付
	Route::match(['get','post'],'/pay', 'PayController@pay');
	Route::match(['post'],'/pay/index', 'PayController@index'); // 支付回调
	Route::match(['post'],'/pay/wechat_index', 'PayController@wechat_index'); // 支付回调

	// 头像上传
	Route::any('/avatar', 'UserController@avatar');
	Route::post('/editAvatar', 'UserController@editAvatar'); // 修改头像

	// 微信
	Route::any('/wechat/getQrcode', 'WechatController@getQrcode'); 


	Route::get('/getGoodsServer', 'GoodsServerController@getGoodsServer');


});


// 教育答题前端api
Route::namespace('Edu')->prefix('Edu')->group(function(){

	// 微信回调服务器接口
	Route::any('/wechat/getWechat', 'WechatController@getWechat'); 
	Route::any('/wechat/callback', 'WechatController@callback'); 

	Route::post('/wechat/getLogin', 'WechatController@getLogin'); // 微信登陆

	// 用户信息
	Route::get('/user/get_user_info', 'UserController@get_user_info'); // 获取用户信息
	Route::get('/user/get_grade_subject', 'UserController@get_grade_subject'); // 获取年纪科目
	Route::post('/user/edit_learning_scope', 'UserController@edit_learning_scope');// 修改学习范围

	Route::get('/user/clear_error_question', 'UserController@clear_error_question');// 清空错题本


	// 首页获取打卡日志
	Route::get('/index/getSign', 'IndexController@getSign'); // 数量和今日打卡

	// 获取题目
	Route::post('/question/getQuestion', 'QuestionController@getQuestion'); // 正常题目
	Route::post('/question/getQuestionError', 'QuestionController@getQuestionError'); // 错题题目
	Route::post('/question/del_error_question', 'QuestionController@del_error_question'); // 错题删除

	// 加入错题本
	Route::post('/question/add_error_question', 'QuestionController@add_error_question'); // 正常题目

});



// 商品手机端Api
Route::namespace('ShopApi')->prefix('ShopApi')->group(function(){

	// 获取幻灯片
	Route::get('/slide/get_slide', 'IndexController@get_slide'); 

	// 获取免单产品
	Route::post('/goods/get_free_goods', 'GoodsController@get_free_goods');

	// 获取最新产品
	Route::post('/goods/get_new_goods', 'GoodsController@get_new_goods');

	// 获取单个产品信息
	Route::post('/goods/get_goods_info', 'GoodsController@get_goods_info');

	// 获取店铺列表
	Route::post('/goods/get_shop', 'ShopController@get_shop');
	Route::post('/goods/get_shop_info', 'ShopController@get_shop_info');

	// 购物车
	Route::post('/car/add_goods_car','CarController@add_goods_car'); 
	Route::get('/car/get_goods_car','CarController@get_goods_car'); 
	Route::get('/car/get_goods_car_list','CarController@get_goods_car_list'); 
	Route::post('/car/edit_goods_car_num','CarController@edit_goods_car_num'); 
	Route::post('/car/del_goods_car','CarController@del_goods_car'); 
	Route::post('/car/del_goods_car_order','CarController@del_goods_car_order'); 

	// 用户登录注册
	Route::post('/user/send_sms', 'UserController@send_sms');
	Route::post('/user/login', 'UserController@login');
	Route::match(['get','post'],'/user/register', 'UserController@register');

});

