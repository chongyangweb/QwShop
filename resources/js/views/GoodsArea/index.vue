<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button type="primary" style="margin-right: 1rem;" icon="el-icon-plus" @click="openDia">修改代理</el-button>
			<el-button type="success" style="margin-right: 1rem;" icon="el-icon-plus" @click="nextArea">下级（市区县）</el-button>
			<el-button type="success" icon="el-icon-plus" @click="recArea">返回（省）</el-button>

			<!-- <input class="index_search_input" type="text" placeholder="输入搜索内容"> -->
			<!-- <el-input  class="search_input" size="small" v-model="name" placeholder="请输入内容"></el-input>
			<el-button icon="el-icon-search" @click="search" plain>搜索</el-button> -->

			<!-- <el-button class="main_del_right" icon="el-icon-delete" type="danger" @click="del">批量删除</el-button> -->
		</div>
		<!-- <input type="hidden" v-model="ids" value=""> -->
		<div class="unline"></div>
		<el-radio style="margin-bottom: 1rem;" v-model="radio1" :label="v.area_id" v-for="v in lists" border @change="onChange">{{v.name}} - <font :color="v.user_id>0?'#000;':'red'">{{v.user_id}}</font></el-radio>

		<el-dialog title="修改代理" :visible.sync="dialogFormVisible">
			<el-input v-model="input" placeholder="请输入内容"></el-input>
			<div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="editArea">确 定</el-button>
			</div>
		</el-dialog>


	</div>
</template>

<script>
	export default {
	    data() {
		    return {
		    	lists: [],
		    	dialogFormVisible:false,
		    	page:[],
		    	name:'',
		    	radio1:'',
		    	input:'0',

		    }
	    },
	    methods: {
	      getList:function(){
	      	var _this = this;
	      	var id = this.$route.params.id;
	      	if(this.$isEmpty(id)){
	      		id = 0;
	      	}
	    	_this.$post(this.ROOT_URL + 'Admin/goods_area/getArea',{id:id}).then(function(res){
	    		_this.lists = res;
	    	});
	      },
	      onChange:function(e){
	      	console.log(e);
	      },
	      openDia:function(){
	      	this.dialogFormVisible = true;
	      },
	      nextArea:function(){
	      	var id = this.radio1;
	      	if(this.$isEmpty(id)){
	      		id = 0;
	      	}
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/goods_area/getArea',{id:id}).then(function(res){
	    		_this.lists = res;
	    	});
	      },
	      recArea:function(){
	      	var _this = this;
	      	var id = 0;
	    	this.$post(this.ROOT_URL + 'Admin/goods_area/getArea',{id:id}).then(function(res){
	    		_this.lists = res;
	    	});
	      },
	      editArea:function(){
	      	var _this = this;
	      	var id = this.radio1;
	    	this.$post(this.ROOT_URL + 'Admin/goods_area/editArea',{id:id,user_id:this.input}).then(function(res){
	    		_this.$message({
		          message: '恭喜你，添加成功！',
		          type: 'success'
		        });
		        _this.getList();
	    	});
	      },

	      
	    },
	    created:function(){
	    	this.getList();
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>