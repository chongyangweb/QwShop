<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">系统设置</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">标题</div></el-col>
				<el-col :span="10"><el-input size="small" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">问题内容</div></el-col>
				<el-col :span="10"><el-input size="small" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">标题</div></el-col>
				<el-col :span="10"><el-input size="small" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3">&nbsp;</el-col>
				<el-col :span="4"><el-button type="primary">提 交</el-button></el-col>
				<el-col :span="17"><div class="input_notice"></div></el-col>
			</el-row>
			
		</div>

		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        
	      };
	    },
	    methods: {
	      
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_del_right{float: right;}
.index_search_input{width: 200px;margin:0 10px 0 70px;border-radius: 2px;height: 29px;border:1px solid #DCDFE6;outline: none;text-indent: 8px;}
.search_input{width: 200px;margin:0 10px 0 30px;}
.index_main_title{line-height: 35px;font-size: 16px;}
.input_lable{line-height: 34px;float: right;}
</style>