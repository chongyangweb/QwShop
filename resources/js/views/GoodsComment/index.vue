<template>
	<div class="index_main">
		<div class="main_btn_left">
			<!-- <router-link class="admin_fff_btn" :to="{name:'goods_add'}"><el-button type="primary" icon="el-icon-plus">添加</el-button></router-link> -->

			<!-- <input class="index_search_input" type="text" placeholder="输入搜索内容"> -->
			<el-input  class="search_input" size="small" v-model="id" placeholder="请输入ID"></el-input>
			<el-button icon="el-icon-search" @click="search" plain>搜索</el-button>

			<!-- <el-button class="main_del_right" icon="el-icon-delete" type="danger" @click="del">批量删除</el-button> -->
		</div>
		<input type="hidden" v-model="ids" value="">
		<div class="unline"></div>

			<el-table ref="multipleTable" :data="lists" tooltip-effect="dark" size="medium" style="width: 100%" @selection-change="changeFun">‘

				<el-table-column type="selection" width="55"></el-table-column>

				<el-table-column label="#" width="80">
				<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>

				<el-table-column label="产品" width="70">
				<template slot-scope="scope"><img width="50px" height="50px" :src="scope.row.get_goods.images.split(',')[0]"></template>
				</el-table-column>

				<el-table-column label="标题" >
				<template slot-scope="scope">{{ scope.row.get_goods.title }}</template>
				</el-table-column>

				<el-table-column label="内容">
				<template slot-scope="scope">{{ scope.row.content}}</template>
				</el-table-column>


				<el-table-column label="加入时间">
				<template slot-scope="scope">{{ scope.row.add_time|formatDate}}</template>
				</el-table-column>

				<el-table-column label="操作">
				<template slot-scope="scope">
				<!-- <el-button plain>查看</el-button> -->
				<el-button plain icon="el-icon-edit" v-show="scope.row.get_rec == null " @click="recGoodsComment(scope.row.id)">回复</el-button>
				</template>
				</el-table-column>

			</el-table>
			<div class="fy">
				<el-pagination medium layout="total, sizes, prev, pager" :total="page.count" :page-size="page.limit" :current-page="page.page" @size-change="size_change" @current-change="current_change"> </el-pagination>
			</div>

			<el-dialog
			  title="回复评价"
			  :visible.sync="dialogVisible"
			  width="30%"
			  :before-close="handleClose">
			  	<el-input
				  type="textarea"
				  :autosize="{ minRows: 2, maxRows: 4}"
				  placeholder="请输入内容"
				  v-model="textarea3">
				</el-input>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="startComment()">确 定</el-button>
			  </span>
			</el-dialog>
	</div>
</template>

<script>

	export default {
	    data() {
		    return {
		    	lists: [],
		    	ids:null,
		    	page:[],
		    	id:'',
		    	dialogVisible: false,
		    	commentId:'',
		    	textarea3:'',

		    }
	    },
	    methods: {
	      handleCheckAllChange(val) {
	        this.checkedCities = val ? cityOptions : [];
	        this.isIndeterminate = false;
	      },
	      handleCheckedCitiesChange(value) {
	        let checkedCount = value.length;
	        this.checkAll = checkedCount === this.cities.length;
	        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
	      },
	      changeFun:function(val){
	      	this.ids = null;
	      	if(val.length>0){
	      		var ids = '';
	      		for(var i=0;i<val.length;i++){
	      			ids = ids + val[i]['id']+',';
	      		}
	      		this.ids = ids;
	      	}
	      },
	      del:function(){

	      	var _this = this;
	      	this.ids = this.ids.substr(0, this.ids.length - 1);
	      	this.$post(this.ROOT_URL + 'Admin/goods_comment/del',{id:this.ids}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，删除成功！',
		          type: 'success'
		        });
		        _this.getList();
	      	});
	      },
	      size_change:function(val){
	      	this.page.limit = val;
	      	this.getList();
	      },
	      current_change:function(val){
	      	this.page.page = val;
	      	this.getList();
	      },
	      search:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/goods_comment/index',{limit:this.page.limit,page:this.page.page,id:this.id}).then(function(res){
	    		_this.lists = res.goods_comment;
	    		_this.page = res.page;
	    	});
	      },
	      getList:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/goods_comment/index',{limit:this.page.limit,page:this.page.page}).then(function(res){
	    		_this.lists = res.goods_comment;
	    		_this.page = res.page;
	    	});
	      },
	      recGoodsComment:function(id){
	      	
	      	this.commentId = id;
	      	this.dialogVisible = true;
	    	this.getList();
	      },

	      handleClose(done) {
	        this.$confirm('确认关闭？')
	          .then(_ => {
	            done();
	          })
	          .catch(_ => {});
	      },
	      startComment:function(){
	      	var _this = this;
	      	_this.$post(this.ROOT_URL + 'Admin/goods_comment/recGoodsComment',{id:this.commentId,content:this.textarea3}).then(function(res){
	    		_this.$message({
		          message: '恭喜你，回复成功！',
		          type: 'success'
		        });
		        _this.getList();
	    	});
	      }

	      
	    },
	    created:function(){
	    	this.getList();
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>