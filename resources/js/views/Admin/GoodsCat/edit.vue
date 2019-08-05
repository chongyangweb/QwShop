<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">商品栏目编辑</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">栏目名</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="name" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">父栏目</div></el-col>
				<el-col :span="10">
					<el-select v-model="pid" size="small" placeholder="请选择">
						<el-option value="0" label="顶级栏目"></el-option>
						<el-option v-for="v in parent" :value="v.id" :label="catRepeat(v)"></el-option>
					</el-select>
				 </el-col>
				 <el-col :span="11"><div class="input_notice"></div></el-col>
			 </el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">广告图</div></el-col>
				<el-col :span="10">
				<el-upload
				  class="upload-demo"
				  :action="ROOT_URL + 'Admin/goods_cat/thumb?token=' + getToken()"
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
				<el-col :span="3"><div class="input_lable">排序</div></el-col>
				<el-col :span="10"><el-input size="small" type="number" v-model="is_sort" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">&nbsp;</div></el-col>
				<el-col :span="10"><el-switch
				  v-model="is_index"
				  active-text="首页显示"
				  >
				</el-switch></el-col>
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
	      	name:'',
	      	is_sort:'0',
	      	is_index:'0',
	      	parent:null,
	        pid:"0",
	        thumb:'',
	        fileList2:[],
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	var is_index = 0;
	      	if(this.is_index){
	      		is_index = 1;
	      	}
	      	this.$post(this.ROOT_URL + 'Admin/goods_cat/edit/' + this.$route.params.id ,{name:this.name,pid:this.pid,is_index:is_index,is_sort:this.is_sort,thumb:this.thumb}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      catRepeat:function(v){
	      	return '——'.repeat(v.lev)+' '+v.name;
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      onSuccess:function(e){
	      	this.thumb = e.thumb_path;
	      },
	      getToken:function(){
	      	return localStorage.getItem('token');
	      }
	    },
	    created:function(){
	    	var _this = this;
	    	this.$get(this.ROOT_URL + "Admin/goods_cat/edit/"+this.$route.params.id).then(function(res){
	    		var is_index = false;
	    		if(res.info.is_index==1){
	    			is_index = true;
	    		}
	    		_this.name = res.info.name;
	    		_this.is_sort = res.info.is_sort;
	    		_this.is_index = is_index;
	    		_this.parent = res.goods_cat;
	    		if(res.info.pid != 0){
	    			_this.pid = res.info.pid;
	    		}
	    		_this.thumb  = res.info.thumb;
	    		_this.fileList2.push({name:'',url:res.info.thumb});
	    		console.log(res.info);
	    	});
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-select-dropdown__wrap{margin-bottom: 0px;}
.el-select-dropdown{padding-bottom: 15px;}
</style>