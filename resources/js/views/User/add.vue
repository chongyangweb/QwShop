<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">用户添加</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">用户名</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="username" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">密码</div></el-col>
				<el-col :span="10"><el-input size="small" type="password" v-model="password" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">昵称</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="nickname" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>
			
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">头像</div></el-col>
				<el-col :span="10">
				<el-upload
				  class="upload-demo"
				  :action="ROOT_URL + 'Admin/user/avatar?token=' + getToken()"
				  :on-remove="handleRemove"
				  :file-list="fileList2"
				  :on-success="onSuccess"
				  limit:1
				  list-type="picture">
				  <el-button size="small" type="primary">点击上传</el-button>
				  <div slot="tip" class="el-upload__tip">只能上传jpg/png/gif文件，且不超过500kb</div>
				</el-upload>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20" >
				<el-col :span="3"><div class="input_lable">角色</div></el-col>
				<el-col :span="21">
				    <el-checkbox style="margin-bottom:10px;" :label="vo.name" border size="small" @change="change" :true-label="vo.id" :false-label="-vo.id" v-for="vo in parent" ></el-checkbox>
				 </el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">邮箱</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="email" placeholder="请输入内容"></el-input></el-col>
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
	      	username:'',
	      	password:'',
	      	nickname:'',
	      	email:'',
	      	role:'',
	      	avatar:'',
	      	parent:null,
	      	perssion:[],
	      	perssionStr:'',
	        fileList2: [],
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/user/add',{username:this.username,password:this.password,email:this.email,nickname:this.nickname,avatar:this.avatar,role:this.perssionStr}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，添加成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      change:function(val){
	      	val = Math.abs(val);
	      	var index = null;
	      	for(var i=0;i<this.perssion.length;i++){
	      		if(this.perssion[i] == val){
	      			index = i;
	      		}
	      	}

	      	if(index == null){
	      		this.perssion.push(val);
	      	}else{
	      		this.perssion.splice(index,1);
	      	}

	      	this.perssionStr = this.perssion.join(',');
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      onSuccess:function(e){
	      	console.log(e);
	      	this.avatar = e;
	      },
	      getToken:function(){
	      	return localStorage.getItem('token');
	      }
	    },
	    created:function(){
	    	var _this = this;
	    	_this.$get(_this.ROOT_URL + "Admin/user/add").then(function(res){
	    		_this.parent = res.roleList;
	    	});
	    },
	    handleRemove(file, fileList) {
        	console.log(file, fileList);
      	},
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>