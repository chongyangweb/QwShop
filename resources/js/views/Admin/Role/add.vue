<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">栏目添加</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">角色名</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="name" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>
			
			<div v-for="v in parent" v-if="v.pid==0">
				<el-row :gutter="20" >
					<el-col :span="3"><div class="input_lable">{{v.name}}</div></el-col>
					<el-col :span="21">
						<el-checkbox style="margin-bottom:10px;" :label="v.name" border size="small" :true-label="v.id" :false-label="-v.id" @change="change"></el-checkbox>
					    <el-checkbox style="margin-bottom:10px;" :label="vo.name" border size="small" @change="change" :true-label="vo.id" :false-label="-vo.id" v-for="vo in parent" v-if="vo.pid==v.id"></el-checkbox>
					 </el-col>
				</el-row>
				<div class="unline2"></div>
			</div>
			
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
	      	perssion:[],
	      	perssionStr:'',
	      	parent:null,
	        pid:"0",
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/role/add',{name:this.name,perssion:this.perssionStr}).then(function(res){
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
	      }
	    },
	    created:function(){
	    	var _this = this;
	    	_this.$get(_this.ROOT_URL + "Admin/role/add").then(function(res){
	    		_this.parent = res;
	    	});
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-select-dropdown__wrap{margin-bottom: 0px;}
.el-select-dropdown{padding-bottom: 15px;}
</style>