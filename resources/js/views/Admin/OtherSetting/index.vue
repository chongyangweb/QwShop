<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">其他设置</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">上传设置：</div></el-col>
				<el-col :span="10" style="margin-top:6px;">
					<el-radio v-model="radio" label="local">本地</el-radio>
  					<el-radio v-model="radio" label="alioss">阿里云OSS</el-radio>
  					<el-radio v-model="radio" label="qiniuoss">七牛云</el-radio>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">注册设置：</div></el-col>
				<el-col :span="10" style="margin-top:6px;">
					<!-- <el-radio v-model="radio2" label="1">邮箱</el-radio> -->
  					<el-radio v-model="radio2" label="2">手机</el-radio>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

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
	      	radio:'local',
	      	radio2:'2',
	        fileList2: [],
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/setting/index',{upload:this.radio,register:this.radio2}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        // _this.$router.go(0);
	      	});
	      },
	      
	      getToken:function(){
	      	return localStorage.getItem('token');
	      }
	    },
	    mounted:function(){
	    	var _this = this;
	    	this.$get(this.ROOT_URL + "Admin/setting/index").then(function(res){
	    		_this.radio2 = res.register.val;
	    		_this.radio = res.upload.val;
	    		
	    	});
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>