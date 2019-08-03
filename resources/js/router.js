import  Vue from 'vue'
import  Router from 'vue-router'

const  Home = () => import ('./views/Home.vue')
const  Login = () => import('./views/login.vue')
const  Index = () => import('./views/index.vue')
const  Default = () => import('./views/default2.vue')
const  System = () => import('./views/System/index.vue')
const  Version = () => import('./views/Version/index.vue')
const  Task = () => import('./views/Task/index.vue')

// 404视图
const  Error404 = () => import('./views/Error/404.vue')

// 栏目
const  Cat = () => import('./views/Cat/index.vue')
const  CatAdd = () => import('./views/Cat/add.vue')
const  CatEdit = () => import('./views/Cat/edit.vue')

// 角色
const  Role = () => import('./views/Role/index.vue')
const  RoleAdd = () => import('./views/Role/add.vue')
const  RoleEdit = () => import('./views/Role/edit.vue')

// 用户
const  User = () => import('./views/User/index.vue')
const  UserAdd = () => import('./views/User/add.vue')
const  UserEdit = () => import('./views/User/edit.vue')

// 幻灯片
const  Slide = () => import('./views/Slide/index.vue')
const  SlideAdd = () => import('./views/Slide/add.vue')
const  SlideEdit = () => import('./views/Slide/edit.vue')

// 其他设置
const  OtherSetting = () => import('./views/OtherSetting/index.vue')

// 配置 微信app_id等
const  Config = () => import('./views/Config/index.vue')

// 栏目管理
const  Columns = () => import('./views/Columns/index.vue')
const  ColumnsAdd = () => import('./views/Columns/add.vue')
const  ColumnsEdit = () => import('./views/Columns/edit.vue')

// 文章管理
const  Article = () => import('./views/Article/index.vue')
const  ArticleAdd = () => import('./views/Article/add.vue')
const  ArticleEdit = () => import('./views/Article/edit.vue')

// 产品管理
const  Product = () => import('./views/Product/index.vue')
const  ProductAdd = () => import('./views/Product/add.vue')
const  ProductEdit = () => import('./views/Product/edit.vue')

// 专题管理
const  Seminar = () => import('./views/Seminar/index.vue')
const  SeminarAdd = () => import('./views/Seminar/add.vue')
const  SeminarEdit = () => import('./views/Seminar/edit.vue')

// 商品管理
const  Goods = () => import('./views/Goods/index.vue')
const  GoodsAdd = () => import('./views/Goods/add.vue')
const  GoodsEdit = () => import('./views/Goods/edit.vue')

// 商品栏目
const  GoodsCat = () => import('./views/GoodsCat/index.vue')
const  GoodsCatAdd = () => import('./views/GoodsCat/add.vue')
const  GoodsCatEdit = () => import('./views/GoodsCat/edit.vue')

// 商品品牌
const  GoodsBrand = () => import('./views/GoodsBrand/index.vue')
const  GoodsBrandAdd = () => import('./views/GoodsBrand/add.vue')
const  GoodsBrandEdit = () => import('./views/GoodsBrand/edit.vue')

// 店铺幻灯片
const  GoodsSlide = () => import('./views/GoodsSlide/index.vue')
const  GoodsSlideAdd = () => import('./views/GoodsSlide/add.vue')
const  GoodsSlideEdit = () => import('./views/GoodsSlide/edit.vue')

// 快递模版
const  GoodsDelivery = () => import('./views/GoodsDelivery/index.vue')
const  GoodsDeliveryAdd = () => import('./views/GoodsDelivery/add.vue')
const  GoodsDeliveryEdit = () => import('./views/GoodsDelivery/edit.vue')

// 地区代理
const  GoodsArea = () => import('./views/GoodsArea/index.vue')

// 商品评论
const  GoodsComment = () => import('./views/GoodsComment/index.vue')

// 订单列表
const  Order = () => import('./views/Order/index.vue')
const  OrderInfo = () => import('./views/Order/info.vue')

// 售后服务
const  GoodsServerEdit = () => import('./views/GoodsServer/edit.vue')

// 店铺信息
const  GoodsShop = () => import('./views/GoodsShop/edit.vue')

// 微信公众号
// 商品栏目
const  WechatCat = () => import('./views/WechatCat/index.vue')
const  WechatCatAdd = () => import('./views/WechatCat/add.vue')
const  WechatCatEdit = () => import('./views/WechatCat/edit.vue')



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
  ]
})
