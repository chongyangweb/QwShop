<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">产品添加</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">标题</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="title" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">父栏目</div></el-col>
				<el-col :span="10">
					<el-select v-model="cid" size="small" placeholder="请选择">
						<el-option value="0" label="无栏目"></el-option>
						<el-option v-for="v in parent" :value="v.id" :label="v.name"></el-option>
					</el-select>
				 </el-col>
				 <el-col :span="11"><div class="input_notice"></div></el-col>
			 </el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">作者</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="author" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>
			
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">缩略图</div></el-col>
				<el-col :span="10">
				<el-upload
				  class="upload-demo"
				  :action="ROOT_URL + 'Admin/product/thumb?token=' + getToken()"
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

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">内容</div></el-col>
				<el-col :span="18">
				<div id="editor">
			    </div><textarea v-model="content" style="display:none;"></textarea></el-col>
				<el-col :span="13"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">热门</div></el-col>
				<el-col :span="10">
					<el-select v-model="is_hot" size="small" placeholder="请选择">
						<el-option value="0" label="否"></el-option>
						<el-option value="1" label="是"></el-option>
					</el-select>
				 </el-col>
				 <el-col :span="11"><div class="input_notice"></div></el-col>
			 </el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">置顶</div></el-col>
				<el-col :span="10">
					<el-select v-model="is_top" size="small" placeholder="请选择">
						<el-option value="0" label="否"></el-option>
						<el-option value="1" label="是"></el-option>
					</el-select>
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
	      	title:'',
	      	content:'',
	      	is_hot:'0',
	      	is_top:'0',
	      	thumb:'',
	      	author:'Admin',
	      	parent:null,
	      	cid:'0',
	        fileList2: [],
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/product/add',{title:this.title,content:this.content,is_hot:this.is_hot,is_top:this.is_top,thumb:this.thumb,cid:this.cid,author:this.author}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，添加成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      onSuccess:function(e){
	      	console.log(e);
	      	this.thumb = e.thumb_path;
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
	    	_this.$get(_this.ROOT_URL + "Admin/product/add").then(function(res){
	    		_this.parent = res.columns;
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