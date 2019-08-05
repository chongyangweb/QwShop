<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">售后编辑</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">内容</div></el-col>
				<el-col :span="18">
				<div id="editor">
			    </div><textarea v-model="content" style="display: none;"></textarea></el-col>
				<el-col :span="13"><div class="input_notice"></div></el-col>
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
	      	content:'',
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/goods_server/edit' ,{content:this.content}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      onSuccess:function(e){
	      	this.thumb = e.thumb_path;
	      },
	      checked:function(id){
	      	for(var i=0;i<this.perssion.length;i++){
	      		if(this.perssion[i] == id){
	      			return true;
	      		}
	      	}
	      },
	      getToken:function(){
	      	return localStorage.getItem('token');
	      }
	    },
	    created:function(){
	    	
	    },
	    mounted:function(){

	    	var E = require('wangeditor')  // 使用 npm 安装
	    	E = new E('#editor')
	    	var _this = this;
		    E.customConfig.onchange = function (html) {
            	_this.content = html;
        	}
        	E.customConfig.uploadImgServer = this.ROOT_URL + 'Admin/Auto/content_upload?token=' + this.getToken();
        	E.customConfig.uploadFileName = 'file';
        	E.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
		    E.create();
		    

	    	var _this = this;
	    	this.$get(this.ROOT_URL + "Admin/goods_server/edit").then(function(res){
	    		_this.content = res.goods_server.content;
	    		E.txt.html(_this.content);
	    	});

	    	
		
	    },
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>