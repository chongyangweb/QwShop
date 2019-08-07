
<template>

<div class="index">
		
		<el-row :gutter="0">
			<el-col :span="spanLen">
				<!-- 左导航栏 -->
			    <div class="index_left">
					<div class="index_logo"><!-- <font>Yun</font>Yi --></div>

					<!-- 导航 -->
					<div class="left_bar" ref="left_bar">
						<div class="admin_logo"><span :style="barshow"><font color="#409EFF">Q</font>wShop</span><span :style="barhide"><font color="#409EFF">Q</font>w</span></div>
						<el-menu background-color="#20222A" text-color="#cfcfcf"  active-text-color="#fff" :router=true>
							<el-menu-item index="/Seller/index">
			      				<span slot="title"><i class="icon iconfont title_i">&#xe625;</i><font :class="{left_bar_text:is_left_bar_text}">系统首页</font></span>
			      			</el-menu-item>

			      			<el-submenu index="1">
				      			<span slot="title" @click="hideBar(false)"><i class="icon iconfont title_i">&#xe654;</i><font :class="{left_bar_text:is_left_bar_text}">店铺设置</font></span>
				      			<el-menu-item  index="/Seller/goods_slide/index">
				      				<span slot="title">店铺幻灯片</span>
				      			</el-menu-item>
				      			<el-menu-item  index="/Seller/store/edit">
				      				<span slot="title">店铺信息</span>
				      			</el-menu-item>
				      			<el-menu-item  index="/Seller/cash/index">
				      				<span slot="title">提现列表</span>
				      			</el-menu-item>
				      			<el-menu-item  index="/Seller/goods_server/edit">
				      				<span slot="title">售后服务</span>
				      			</el-menu-item>
							</el-submenu>
			
							<el-submenu index="2">
				      			<span slot="title" @click="hideBar(false)"><i class="icon iconfont title_i">&#xe61d;</i><font :class="{left_bar_text:is_left_bar_text}">商品管理</font></span>
				      			<el-menu-item index="/Seller/goods/index">
				      				<span slot="title">商品列表</span>
				      			</el-menu-item>
				      		<!-- 	<el-menu-item index="/Seller/warehouse/index">
				      				<span slot="title">仓库列表</span>
				      			</el-menu-item> -->
							</el-submenu>

							<el-submenu index="3">
				      			<span slot="title" @click="hideBar(false)"><i class="icon iconfont title_i">&#xe61b;</i><font :class="{left_bar_text:is_left_bar_text}">订单管理</font></span>
				      			<el-menu-item index="/Seller/order/index">
				      				<span slot="title">订单列表</span>
				      			</el-menu-item>
				      			<el-menu-item index="/Seller/goods_comment/index">
				      				<span slot="title">评论列表</span>
				      			</el-menu-item>
				      			<el-menu-item index="/Seller/goods_delivery/index">
				      				<span slot="title">物流管理</span>
				      			</el-menu-item>
							</el-submenu>

							
							<el-submenu index="4">
				      			<span slot="title" @click="hideBar(false)"><i class="icon iconfont title_i">&#xe6c3;</i><font :class="{left_bar_text:is_left_bar_text}">推广活动</font></span>
				      			<el-menu-item  index="/">
				      				<span slot="title">xx</span>
				      			</el-menu-item>
				      			<el-menu-item  index="/">
				      				<span slot="title">店铺信息</span>
				      			</el-menu-item>
							</el-submenu>
							
						</el-menu>
					</div>
			    </div>
			</el-col>

			<el-col :span="spanLen2">
				<!-- 右侧 -->
			    <div class="index_right">
			    	<!-- 右侧头部 -->
			    	<div class="right_head">
			    		<el-row>
						  <el-col :span="12">
						  	<i class="icon iconfont right_head_i" @click="hideBar(true);">&#xe62c;</i>
						  	<i class="icon iconfont right_head_i" title="刷新页面" @click="$router.go(0)">&#xe638;</i>
						  </el-col>
						  <el-col :span="12">
						  	

							<div class="head_user">
								<el-dropdown  @command="handleCommand">
									<span class="el-dropdown-link">
									{{user.username}}<i class="el-icon-arrow-down el-icon--right"></i>
									</span>
									<el-dropdown-menu class="head_menu" slot="dropdown">
										<el-dropdown-item>黄金糕</el-dropdown-item>
										<el-dropdown-item>狮子头</el-dropdown-item>
										<el-dropdown-item>螺蛳粉</el-dropdown-item>
										<el-dropdown-item command="logout" divided>退出</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</div>

							<div class="avatar"><img src="https://www.layui.com/admin/pro/dist/style/res/template/portrait.png"></div>

							<div class="right_head_other">
								<el-badge is-dot :value="12" class="item" id="dot">
								<i class="icon iconfont right_head_i">&#xe793;</i>
								</el-badge>
						  	</div>
							
						  </el-col>
						</el-row>
			    	</div>

			    	<!-- 面包屑 -->
			    	<div class="right_head_mbx">
						<el-breadcrumb separator="/">
							<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
							<el-breadcrumb-item v-for="v in mbx">{{v.name}}</el-breadcrumb-item>
						</el-breadcrumb>
			    	</div>

			    	<!-- Main -->
			    	<div id="main" :style="winHeight">
			    		<el-scrollbar style="height: 100%">
			    			<transition :name="transitionName" mode="out-in">
	    						<router-view />
	    					</transition>
	    				</el-scrollbar>
			    	</div>
			    </div>
			</el-col>
		</el-row>
	    

	    

	    
</div>

</template>

<script>
export default {
	name: 'index',
	data () {
		return {
			data:null,
			cat:[], // 栏目
			user:[], // 用户信息
			transitionName:'slide-fade',
			spanLen:3,
			spanLen2:21,
			mbx:[],
			is_left_bar_text:false,
		  	winHeight:{
		  		height:'600px',
		  	},
		  	barshow:'display:block;text-align:center;',
		  	barhide:'display:none;text-align:center;',
		}
	},
	methods:{
		// 子组件告诉父组件去掉indexMain
		isIndexMain:function(){
			this.indexMain = false;
			this.indexMain2 = true;
		},

		// 退出账号
		logout:function(){
			var _this = this;
			this.$get(this.ROOT_URL + "Seller/logout").then(function(res){
				if(res.code == 200){
					localStorage.removeItem('token');
					_this.$message({message:res.message,type:'success'});
					_this.$router.push({name:'login'});
				}
			});
			
		},
		handleCommand:function(name=''){
			console.log(name);
			if(name == 'logout'){
				this.logout();
			}
		},

		// 隐藏左侧栏目
		hideBar:function(e){
			var lis = this.$refs.left_bar.children[1].children;
			// console.log(this.$refs);
			
			if(this.spanLen == 3 && e){
				this.spanLen = 1;
				this.spanLen2 = 23;
				this.is_left_bar_text = true;
				this.barshow = 'display:none;text-align:center;';
				this.barhide = 'display:block;text-align:center;';
				this.$refs.left_bar.children[1].style.width = "52px";
				this.$refs.left_bar.children[1].style.margin = "0 auto";
				this.$refs.left_bar.children[1].style.borderRight = "none";
				for(var i=1;i<lis.length;i++){
					if(lis[i].children["0"].children.length > 0){
						lis[i].children["0"].children[1].style.display = "none";
					}
				}
			}else{
				this.is_left_bar_text = false;
				this.spanLen = 3;
				this.spanLen2 = 21;
				this.barshow = 'display:block;text-align:center;';
				this.barhide = 'display:none;text-align:center;';
				this.$refs.left_bar.children[1].style.width = "";
				this.$refs.left_bar.children[1].style.margin = "";
				this.$refs.left_bar.children[1].style.borderRight = "";
				for(var i=1;i<lis.length;i++){
					if(lis[i].children["0"].children.length > 0){
						lis[i].children["0"].children[1].style.display = "block";
					}
				}
			}
			
		},
		mbx_f:function(e){
			
			var name = [];
			for(var i=0;i<e.length;i++){
				name.push(e[i].name);
			}
			this.mbx = name;
		}


	},
	// 如果没有登录信息 则返回login页面
	created:function(){
		// var isLogin = localStorage.getItem('token');
		// if(this.$isEmpty(isLogin)){
		// 	this.$router.push({name:'login'});
		// 	this.$message.error('请先登录账号！');
		// }else{
		// 	// 做post 带验证信息请求服务器 而非去数据库查找 如果信息失效则返回login
		// 	var token = localStorage.getItem('token');
		// 	this.$axios.post('/Admin/validate',{token:token})
		// 	.then(function(res){

		// 	});
		// }
		var _this = this;
		this.$get(this.ROOT_URL + "Seller/index").then(function(res){
			// _this.cat = res.cat;
			_this.user = res.user;
		});
	},
	mounted:function(){
		/*this.$get(this.ROOT_URL + "admin/cat/edit/4").then(function(res){
			console.log(res);
		});*/
		this.winHeight.height=window.innerHeight-115+'px';
	},
	// watch $route 决定使用哪种过渡
	watch: {
	  '$route' (to, from) {
	    const toDepth = to.path.split('/').length
	    const fromDepth = from.path.split('/').length
	    this.transitionName = toDepth < fromDepth ? 'slide-fade' : 'slide-fade'
	  }
	}
	
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{height: 100%;position: relative;background: #f3f3f4;}
.index .el-row{height: 100%;}
.index .el-row .el-col-3{height: 100%;}
.index .el-row .el-col-1{height: 100%;}
.index_left{height: 100%;}
.left_bar{background: #20222A;color:#e1e1e1;height: 100%;}
.index_logo{color:#fff;font-size: 24px;text-align: center;line-height: 60px;background: #111;}
.index_logo font{color:#3498e9;}
.left_bar i{margin-right: 10px;}
.title_i{color:#cfcfcf;}
.index_right{}
.right_head{background: #fff;height: 50px;display: block;border-bottom: 1px solid #e7eaec !important;line-height: 50px;}
.right_head_mbx{background: #fff;height: 50px;display: block;border-bottom: 1px solid #e7eaec !important;line-height: 50px;}
.right_head_mbx .el-breadcrumb{margin-left: 30px;font-size: 12px;}
.right_head_mbx .el-breadcrumb .el-breadcrumb__item{line-height: 50px;}
.right_head .right_head_i{line-height: 50px;font-size: 18px;color:#333;margin-left: 30px;}
.avatar img{width: 30px; height: 30px;border-radius: 50%;float: right;margin-top: 10px;}
.right_head_other{float: right;margin-right: 40px;position: relative;}
.head_user{line-height: 50px;float: right;position: relative;margin-left: 10px;margin-right: 30px;}
.head_menu{width: 140px;}
.right_head_other .item{margin-top: 17px;}
.item .right_head_i{line-height: 20px;}
.left_bar_text{display: none;}
.admin_logo{text-align: center;background: #111;height: 42px;padding-top: 10px;color:#fff;}
.admin_logo span{line-height: 20px;font-size: 20px;}
</style>

