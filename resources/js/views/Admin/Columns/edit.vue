<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">分类编辑</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">分类名</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="name" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">父栏目</div></el-col>
				<el-col :span="10">
					<el-select v-model="pid" size="small" placeholder="请选择">
						<el-option value="0" label="顶级栏目"></el-option>
						<el-option v-for="v in parent" :value="v.id" :label="v.name"></el-option>
					</el-select>
				 </el-col>
				 <el-col :span="11"><div class="input_notice"></div></el-col>
			 </el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">排序</div></el-col>
				<el-col :span="10"><el-input size="small" type="number" v-model="sort" placeholder="请输入内容"></el-input></el-col>
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
	      	pid:0,
	      	is_type:1,
	      	sort:'0',
	      	parent:null,
	        pid:"0",
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/columns/edit/' + this.$route.params.id ,{name:this.name,pid:this.pid,is_type:this.$route.params.is_type,sort:this.sort}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      }
	    },
	    created:function(){
	    	var _this = this;
	    	this.$get(this.ROOT_URL + "Admin/columns/edit/"+this.$route.params.id+"/"+this.$route.params.is_type).then(function(res){
	    		_this.name = res.info.name;
	    		_this.is_type = res.info.is_type;
	    		_this.sort = res.info.sort;
	    		_this.parent = res.parent;
	    		if(res.info.pid != 0){
	    			_this.pid = res.info.pid;
	    		}
	    		console.log(_this.pid);
	    	});
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-select-dropdown__wrap{margin-bottom: 0px;}
.el-select-dropdown{padding-bottom: 15px;}
</style>