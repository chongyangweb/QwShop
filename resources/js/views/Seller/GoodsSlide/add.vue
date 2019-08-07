<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">幻灯片添加</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">标题</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="name" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">幻灯片</div></el-col>
				<el-col :span="10">
				<el-upload
				  class="upload-demo"
				  :action="ROOT_URL + 'Admin/goods_slide/slide?token=' + getToken()"
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
				<el-col :span="3"><div class="input_lable">链接</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="url" placeholder="请输入链接"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">排序</div></el-col>
				<el-col :span="10"><el-input size="small" type="number" v-model="sort" placeholder="请输入排序"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">分类</div></el-col>
				<el-col :span="10">
					<el-select v-model="is_type" size="small" placeholder="请选择">
						<el-option v-for="v in parent" :value="v.value" :label="v.label"></el-option>
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
	      	name:'',
	      	image_url:'',
	      	url:'',
	      	sort:'',
	      	is_type:'0',
	      	parent:[{label:'PC端',value:'0'},{label:'Mobile端',value:'1'}],
	        fileList2: [],
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/goods_slide/add',{name:this.name,image_url:this.image_url,url:this.url,sort:this.sort,is_type:this.is_type}).then(function(res){
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
	      	this.image_url = e.path;
	      },
	      getToken:function(){
	      	return localStorage.getItem('token');
	      },
	    },
	    handleRemove(file, fileList) {
        	console.log(file, fileList);
      	},
      	
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>