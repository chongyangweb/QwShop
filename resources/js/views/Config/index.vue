<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">其他设置</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">

			<el-tabs v-model="activeName" tab-position="left" @tab-click="onChange">
			    <el-tab-pane label="微信配置" name="wechat">
			    	<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_ID</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_app_id" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_SECRET</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_app_secret" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">Token</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_token" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">商户ID</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_mch_id" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">API 密钥</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_app_key" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">同步回调地址</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_return_url" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">异步回调地址</div></el-col>
						<el-col :span="10"><el-input v-model="wechat_callback" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

			    </el-tab-pane>
			    <el-tab-pane label="支付宝配置" name="alipay">
			    	<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_ID</div></el-col>
						<el-col :span="10"><el-input v-model="alipay_app_id" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">PUBLIC_KEY</div></el-col>
						<el-col :span="10"><el-input v-model="alipay_public_key" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">PRIVATE_KEY</div></el-col>
						<el-col :span="10"><el-input v-model="alipay_private_key" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">同步回调地址</div></el-col>
						<el-col :span="10"><el-input v-model="alipay_return_url" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">异步回调地址</div></el-col>
						<el-col :span="10"><el-input v-model="alipay_callback" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>
			    </el-tab-pane>
			    <el-tab-pane label="阿里Oss" name="alioss">
			    	<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">Endpoint绑定域名</div></el-col>
						<el-col :span="10"><el-input v-model="alioss_city" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_ID</div></el-col>
						<el-col :span="10"><el-input v-model="alioss_app_id" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_SECRET</div></el-col>
						<el-col :span="10"><el-input v-model="alioss_app_secret" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">EndPoint</div></el-col>
						<el-col :span="10"><el-input v-model="alioss_endpoint" type="number" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">Bucket</div></el-col>
						<el-col :span="10"><el-input v-model="alioss_bucket" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

			    </el-tab-pane>
			    <el-tab-pane label="阿里Sms" name="alisms">
			    	<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_ID</div></el-col>
						<el-col :span="10"><el-input v-model="alisms_app_id" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">APP_SECRET</div></el-col>
						<el-col :span="10"><el-input v-model="alisms_app_secret" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">签名</div></el-col>
						<el-col :span="10"><el-input v-model="alisms_sign_name" size="small" placeholder="请输入内容"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>
			    </el-tab-pane>
			    <el-tab-pane label="七牛Oss" name="qiniuoss"></el-tab-pane>
			</el-tabs>
			<!-- <el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">上传设置：</div></el-col>
				<el-col :span="10" style="margin-top:6px;">
					<el-radio v-model="radio" label="1">本地</el-radio>
  					<el-radio v-model="radio" label="2">阿里云OSS</el-radio>
  					<el-radio v-model="radio" label="3">七牛云</el-radio>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">注册设置：</div></el-col>
				<el-col :span="10" style="margin-top:6px;">
					<el-radio v-model="radio2" label="1">邮箱</el-radio>
  					<el-radio v-model="radio2" label="2">手机</el-radio>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div> -->

			<el-row :gutter="20">
				<el-col :span="3">&nbsp;</el-col>
				<el-col :span="4"><el-button type="primary" @click="submit">提 交</el-button></el-col>
				<el-col :span="17"><div class="input_notice"></div></el-col>
			</el-row>

		</div>

		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      	activeName:'wechat',

	      	// 微信
	      	wechat_app_id:'',
	      	wechat_app_secret:'',
	      	wechat_mch_id:'',
	      	wechat_app_key:'',
	      	wechat_return_url:'',
	      	wechat_callback:'',

	      	// 支付宝
	      	alipay_app_id:'',
	      	alipay_publick_key:'',
	      	alipay_private_key:'',
	      	alipay_return_url:'',
	      	alipay_callback:'',

	      	// 阿里发送短信
	      	wechat_app_id:'',
	      	wechat_app_secret:'',
	      	wechat_sign_name:'',

	      	// 阿里云存储
	      	alioss_app_id:'',
	      	alioss_app_secret:'',
	      	alioss_city:'0',
	      	alioss_endpoint:'',
	      	alioss_bucket:'',

	      	data:null,
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	// this.$post(this.ROOT_URL + 'Admin/setting/index',{web_name:this.web_name,keywords:this.keywords,description:this.description,phone:this.phone,icp:this.icp,logo:this.logo}).then(function(res){
	      	// 	_this.$message({
		      //     message: '恭喜你，修改成功！',
		      //     type: 'success'
		      //   });
		      //   _this.$router.go(0);
	      	// });
	      },
	      
	      getToken:function(){
	      	return localStorage.getItem('token');
	      },
	      getList:function(){
	      	var _this = this;
	    	this.$post(this.ROOT_URL + "Admin/config/getConfig",{is_type:this.activeName}).then(function(res){
	    		// _this.data = res.data;
	    		// 微信的
	    		if(_this.activeName == 'wechat'){
	    			_this.wechat_app_id = res.data.app_id.val;
		    		_this.wechat_app_secret = res.data.app_secret.val;
		    		_this.wechat_mch_id = res.data.mch_id.val;
		    		_this.wechat_app_key = res.data.app_key.val;
		    		_this.wechat_token = res.data.token.val;
		    		_this.wechat_return_url = res.data.return_url.val;
		    		_this.wechat_callback = res.data.callback.val;
	    		}
	    		

	    		// 支付宝的
	    		if(_this.activeName == 'alipay'){
		    		_this.alipay_app_id = res.data.app_id.val;
		    		_this.alipay_public_key = res.data.public_key.val;
		    		_this.alipay_private_key = res.data.private_key.val;
		    		_this.alipay_return_url = res.data.return_url.val;
		    		_this.alipay_callback = res.data.callback.val;
	    		}

	    		// 支付宝的
	    		if(_this.activeName == 'alisms'){
		    		_this.alisms_app_id = res.data.app_id.val;
		    		_this.alisms_app_secret = res.data.app_secret.val;
		    		_this.alisms_sign_name = res.data.sign_name.val;
	    		}

	    		// 阿里oss
	    		if(_this.activeName == 'alioss'){
		    		_this.alioss_app_id = res.data.app_id.val;
		    		_this.alioss_app_secret = res.data.app_secret.val;
		    		_this.alioss_city = res.data.city.val;
		    		_this.alioss_endpoint = res.data.alioss_endpoint.val;
		    		_this.alioss_bucket = res.data.alioss_bucket.val;
	    		}
	    		
	    	});
	      },
	      onChange:function(e){
	      	// console.log(e);
	      	// this.activeName = e;
	      	this.getList();
	      }
	    },
	    created:function(){
	    	this.getList();
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>