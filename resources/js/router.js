import  Vue from 'vue'
import  Router from 'vue-router'

const  Home = () => import ('./views/Admin/Home.vue')
const  Login = () => import('./views/Admin/login.vue')
const  Index = () => import('./views/Admin/index.vue')
const  Default = () => import('./views/Admin/default2.vue')
const  System = () => import('./views/Admin/System/index.vue')
const  Version = () => import('./views/Admin/Version/index.vue')
const  Task = () => import('./views/Admin/Task/index.vue')

// 404视图
const  Error404 = () => import('./views/Admin/Error/404.vue')

// 栏目
const  Cat = () => import('./views/Admin/Cat/index.vue')
const  CatAdd = () => import('./views/Admin/Cat/add.vue')
const  CatEdit = () => import('./views/Admin/Cat/edit.vue')

// 角色
const  Role = () => import('./views/Admin/Role/index.vue')
const  RoleAdd = () => import('./views/Admin/Role/add.vue')
const  RoleEdit = () => import('./views/Admin/Role/edit.vue')

// 用户
const  User = () => import('./views/Admin/User/index.vue')
const  UserAdd = () => import('./views/Admin/User/add.vue')
const  UserEdit = () => import('./views/Admin/User/edit.vue')

// 幻灯片
const  Slide = () => import('./views/Admin/Slide/index.vue')
const  SlideAdd = () => import('./views/Admin/Slide/add.vue')
const  SlideEdit = () => import('./views/Admin/Slide/edit.vue')

// 其他设置
const  OtherSetting = () => import('./views/Admin/OtherSetting/index.vue')

// 配置 微信app_id等
const  Config = () => import('./views/Admin/Config/index.vue')

// 栏目管理
const  Columns = () => import('./views/Admin/Columns/index.vue')
const  ColumnsAdd = () => import('./views/Admin/Columns/add.vue')
const  ColumnsEdit = () => import('./views/Admin/Columns/edit.vue')

// 文章管理
const  Article = () => import('./views/Admin/Article/index.vue')
const  ArticleAdd = () => import('./views/Admin/Article/add.vue')
const  ArticleEdit = () => import('./views/Admin/Article/edit.vue')

// 产品管理
const  Product = () => import('./views/Admin/Product/index.vue')
const  ProductAdd = () => import('./views/Admin/Product/add.vue')
const  ProductEdit = () => import('./views/Admin/Product/edit.vue')

// 专题管理
const  Seminar = () => import('./views/Admin/Seminar/index.vue')
const  SeminarAdd = () => import('./views/Admin/Seminar/add.vue')
const  SeminarEdit = () => import('./views/Admin/Seminar/edit.vue')

// 商品管理
const  Goods = () => import('./views/Admin/Goods/index.vue')
const  GoodsAdd = () => import('./views/Admin/Goods/add.vue')
const  GoodsEdit = () => import('./views/Admin/Goods/edit.vue')

// 商品栏目
const  GoodsCat = () => import('./views/Admin/GoodsCat/index.vue')
const  GoodsCatAdd = () => import('./views/Admin/GoodsCat/add.vue')
const  GoodsCatEdit = () => import('./views/Admin/GoodsCat/edit.vue')

// 商品品牌
const  GoodsBrand = () => import('./views/Admin/GoodsBrand/index.vue')
const  GoodsBrandAdd = () => import('./views/Admin/GoodsBrand/add.vue')
const  GoodsBrandEdit = () => import('./views/Admin/GoodsBrand/edit.vue')

// 店铺幻灯片
const  GoodsSlide = () => import('./views/Admin/GoodsSlide/index.vue')
const  GoodsSlideAdd = () => import('./views/Admin/GoodsSlide/add.vue')
const  GoodsSlideEdit = () => import('./views/Admin/GoodsSlide/edit.vue')

// 快递模版
const  GoodsDelivery = () => import('./views/Admin/GoodsDelivery/index.vue')
const  GoodsDeliveryAdd = () => import('./views/Admin/GoodsDelivery/add.vue')
const  GoodsDeliveryEdit = () => import('./views/Admin/GoodsDelivery/edit.vue')

// 地区代理
const  GoodsArea = () => import('./views/Admin/GoodsArea/index.vue')

// 商品评论
const  GoodsComment = () => import('./views/Admin/GoodsComment/index.vue')

// 订单列表
const  Order = () => import('./views/Admin/Order/index.vue')
const  OrderInfo = () => import('./views/Admin/Order/info.vue')

// 售后服务
const  GoodsServerEdit = () => import('./views/Admin/GoodsServer/edit.vue')

// 店铺信息
const  GoodsShop = () => import('./views/Admin/GoodsShop/edit.vue')

// 微信公众号
// 商品栏目
const  WechatCat = () => import('./views/Admin/WechatCat/index.vue')
const  WechatCatAdd = () => import('./views/Admin/WechatCat/add.vue')
const  WechatCatEdit = () => import('./views/Admin/WechatCat/edit.vue')


/**********************************
 * 商家后台
***********/

const  SellerLogin = () => import('./views/Seller/login.vue')
const  SellerIndex = () => import('./views/Seller/index.vue')
const  SellerDefault = () => import('./views/Seller/default2.vue')

// 商品管理
const  SellerGoods = () => import('./views/Seller/Goods/index.vue')
const  SellerGoodsAdd = () => import('./views/Seller/Goods/add.vue')
const  SellerGoodsEdit = () => import('./views/Seller/Goods/edit.vue')

// 订单列表
const  SellerOrder = () => import('./views/Seller/Order/index.vue')
const  SellerOrderInfo = () => import('./views/Seller/Order/info.vue')

// 商品评论
const  SellerGoodsComment = () => import('./views/Seller/GoodsComment/index.vue')

// 快递模版
const  SellerGoodsDelivery = () => import('./views/Seller/GoodsDelivery/index.vue')
const  SellerGoodsDeliveryAdd = () => import('./views/Seller/GoodsDelivery/add.vue')
const  SellerGoodsDeliveryEdit = () => import('./views/Seller/GoodsDelivery/edit.vue')

// 店铺幻灯片
const  SellerGoodsSlide = () => import('./views/Seller/GoodsSlide/index.vue')
const  SellerGoodsSlideAdd = () => import('./views/Seller/GoodsSlide/add.vue')
const  SellerGoodsSlideEdit = () => import('./views/Seller/GoodsSlide/edit.vue')

// 店铺信息
const  SellerStore = () => import('./views/Seller/Store/edit.vue')

// 售后服务
const  SellerGoodsServerEdit = () => import('./views/Seller/GoodsServer/edit.vue')

// 商家提现
const  SellerCash = () => import('./views/Seller/Cash/index.vue')
const  SellerCashAdd = () => import('./views/Seller/Cash/add.vue')





Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path: '/',name: 'login',component: Login},
    // {path: '/home',name: 'home',component: Login},
    // { path: '*', redirect: '/404', hidden: true },
    // {path: '/404',name: '404',component: Error404},
  
    // 登录
    {path: '/Admin/login',name: 'login',component: Login},

    // 后台首页
    {path: '/Admin/index',name: 'index',component: Index,children:[
      {path:'/Admin/index',name:'default',component:Default}, // 默认后台首页
      {path:'/Admin/system_index',name:'system_index',component:System}, // 系统设置
      {path:'/Admin/system_version',name:'system_version',component:Version}, // 系统设置
      {path:'/Admin/task_index',name:'task_index',component:Task}, // 系统设置

      // 栏目
      {path:'/Admin/cat/index',name:'cat_index',component:Cat}, 
      {path:'/Admin/cat/add',name:'cat_add',component:CatAdd}, 
      {path:'/Admin/cat/edit/:id',name:'cat_edit',component:CatEdit}, 

      // 角色
      {path:'/Admin/role/index',name:'role_index',component:Role}, 
      {path:'/Admin/role/add',name:'role_add',component:RoleAdd}, 
      {path:'/Admin/role/edit/:id',name:'role_edit',component:RoleEdit}, 

      // 用户
      {path:'/Admin/user/index',name:'user_index',component:User}, 
      {path:'/Admin/user/add',name:'user_add',component:UserAdd}, 
      {path:'/Admin/user/edit/:id',name:'user_edit',component:UserEdit}, 

      // 幻灯片
      {path:'/Admin/slide/index',name:'slide_index',component:Slide}, 
      {path:'/Admin/slide/add',name:'slide_add',component:SlideAdd}, 
      {path:'/Admin/slide/edit/:id',name:'slide_edit',component:SlideEdit}, 

      // 栏目管理
      {path:'/Admin/columns/index/:is_type',name:'columns_index',component:Columns}, 
      {path:'/Admin/columns/add/:is_type',name:'columns_add',component:ColumnsAdd}, 
      {path:'/Admin/columns/edit/:id/:is_type',name:'columns_edit',component:ColumnsEdit}, 

      // 文章管理
      {path:'/Admin/article/index',name:'article_index',component:Article}, 
      {path:'/Admin/article/add',name:'article_add',component:ArticleAdd}, 
      {path:'/Admin/article/edit/:id',name:'article_edit',component:ArticleEdit}, 

      // 产品管理
      {path:'/Admin/product/index',name:'product_index',component:Product}, 
      {path:'/Admin/product/add',name:'product_add',component:ProductAdd}, 
      {path:'/Admin/product/edit/:id',name:'product_edit',component:ProductEdit},

      // 专题管理
      {path:'/Admin/seminar/index',name:'seminar_index',component:Seminar}, 
      {path:'/Admin/seminar/add',name:'seminar_add',component:SeminarAdd}, 
      {path:'/Admin/seminar/edit/:id',name:'seminar_edit',component:SeminarEdit},

      // 其他设置
      {path:'/Admin/other_setting/index',name:'other_setting',component:OtherSetting}, 

      // 设置 微信app_id 等
      {path:'/Admin/config/index',name:'config_index',component:Config}, 

      // 商品管理
      {path:'/Admin/goods/index',name:'goods_index',component:Goods}, 
      {path:'/Admin/goods/add',name:'goods_add',component:GoodsAdd},
      {path:'/Admin/goods/edit/edit/:id',name:'goods_edit',component:GoodsEdit},

      // 商品栏目
      {path:'/Admin/goods_cat/index',name:'goods_cat_index',component:GoodsCat}, 
      {path:'/Admin/goods_cat/add',name:'goods_cat_add',component:GoodsCatAdd}, 
      {path:'/Admin/goods_cat/edit/:id',name:'goods_cat_edit',component:GoodsCatEdit},

      // 商品品牌
      {path:'/Admin/goods_brand/index',name:'goods_brand_index',component:GoodsBrand}, 
      {path:'/Admin/goods_brand/add',name:'goods_brand_add',component:GoodsBrandAdd}, 
      {path:'/Admin/goods_brand/edit/:id',name:'goods_brand_edit',component:GoodsBrandEdit},

      // 店铺幻灯片
      {path:'/Admin/goods_slide/index',name:'goods_slide_index',component:GoodsSlide}, 
      {path:'/Admin/goods_slide/add',name:'goods_slide_add',component:GoodsSlideAdd}, 
      {path:'/Admin/goods_slide/edit/:id',name:'goods_slide_edit',component:GoodsSlideEdit},

      // 快递模版
      {path:'/Admin/goods_delivery/index',name:'goods_delivery_index',component:GoodsDelivery}, 
      {path:'/Admin/goods_delivery/add',name:'goods_delivery_add',component:GoodsDeliveryAdd}, 
      {path:'/Admin/goods_delivery/edit/:id',name:'goods_delivery_edit',component:GoodsDeliveryEdit},

      // 地区代理
      {path:'/Admin/goods_area/index',name:'goods_area_index',component:GoodsArea}, 

      // 订单列表
      {path:'/Admin/order/index',name:'order_index',component:Order}, 
      {path:'/Admin/order/info/:id',name:'order_info',component:OrderInfo}, 

      // 商品评论
      {path:'/Admin/goods_comment/index',name:'goods_comment_index',component:GoodsComment}, 

      // 售后服务
      {path:'/Admin/goods_server/edit',name:'goods_server_edit',component:GoodsServerEdit}, 

      // 店铺信息设置
      {path:'/Admin/goods_shop/edit',name:'goods_shop_edit',component:GoodsShop}, 

      // 微信公众号
      {path:'/Admin/wechat_cat/index',name:'wechat_cat_index',component:WechatCat}, 
      {path:'/Admin/wechat_cat/add',name:'wechat_cat_add',component:WechatCatAdd}, 
      {path:'/Admin/wechat_cat/edit/:id',name:'wechat_cat_edit',component:WechatCatEdit},

      


      // {path:'/Admin/list',name:'list',component:List}, // 模版
    ]},

    /****************************************
     * 商家后台
    **************************/

    // 商家登录
    {path:'/Seller/login',name:'seller_login',component:SellerLogin},
    {path:'/Seller/index',name:'seller_index',component:SellerIndex,children:[
      {path:'/Seller/index',name:'seller_default',component:SellerDefault}, // 默认后台首页

      // 商品管理
      {path:'/Seller/goods/index',name:'seller_goods_index',component:SellerGoods}, 
      {path:'/Seller/goods/add',name:'seller_goods_add',component:SellerGoodsAdd},
      {path:'/Seller/goods/edit/edit/:id',name:'seller_goods_edit',component:SellerGoodsEdit},

      // 订单列表
      {path:'/Seller/order/index',name:'seller_order_index',component:SellerOrder}, 
      {path:'/Seller/order/info/:id',name:'seller_order_info',component:SellerOrderInfo}, 

      // 商品评论
      {path:'/Seller/goods_comment/index',name:'seller_goods_comment_index',component:SellerGoodsComment}, 

      // 快递模版
      {path:'/Seller/goods_delivery/index',name:'seller_goods_delivery_index',component:SellerGoodsDelivery}, 
      {path:'/Seller/goods_delivery/add',name:'seller_goods_delivery_add',component:SellerGoodsDeliveryAdd}, 
      {path:'/Seller/goods_delivery/edit/:id',name:'seller_goods_delivery_edit',component:SellerGoodsDeliveryEdit},

      // 店铺幻灯片
      {path:'/Seller/goods_slide/index',name:'seller_goods_slide_index',component:SellerGoodsSlide}, 
      {path:'/Seller/goods_slide/add',name:'seller_goods_slide_add',component:SellerGoodsSlideAdd}, 
      {path:'/Seller/goods_slide/edit/:id',name:'seller_goods_slide_edit',component:SellerGoodsSlideEdit},

      // 店铺信息设置
      {path:'/Seller/store/edit',name:'seller_store_edit',component:SellerStore}, 

      // 售后服务
      {path:'/Seller/goods_server/edit',name:'seller_goods_server_edit',component:SellerGoodsServerEdit}, 

      // 商家提现
      {path:'/Seller/cash/index',name:'seller_cash',component:SellerCash},
      {path:'/Seller/cash/add',name:'seller_cash_add',component:SellerCashAdd},


    ]},
  ]
})
