<template>
	<div class="index_main">
		<div class="main_btn_left">
			<router-link class="admin_fff_btn" :to="{name:'product_add'}"><el-button type="primary" icon="el-icon-plus">添加</el-button></router-link>

			<!-- <input class="index_search_input" type="text" placeholder="输入搜索内容"> -->
			<el-input  class="search_input" size="small" v-model="title" placeholder="请输入标题"></el-input>
			<el-button icon="el-icon-search" @click="search" plain>搜索</el-button>

			<el-button class="main_del_right" icon="el-icon-delete" type="danger" @click="del">批量删除</el-button>
		</div>
		<input type="hidden" v-model="ids" value="">
		<div class="unline"></div>

			<el-table ref="multipleTable" :data="lists" tooltip-effect="dark" size="medium" style="width: 100%" @selection-change="changeFun">‘

				<el-table-column type="selection" width="55"></el-table-column>

				<el-table-column label="#" width="60">
				<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>

				<el-table-column label="缩略图" width="80">
				<template slot-scope="scope"><img width="50px" height="50px" :src="scope.row.thumb"></template>
				</el-table-column>

				<el-table-column label="标题" >
				<template slot-scope="scope">{{ scope.row.title }}</template>
				</el-table-column>

				<el-table-column label="栏目" >
				<template slot-scope="scope">{{ scope.row.get_parent_name.name }}</template>
				</el-table-column>

				<el-table-column label="热门" >
				<template slot-scope="scope"><el-tag v-if="scope.row.is_hot==1" type="success">是</el-tag><el-tag v-else type="danger">否</el-tag></template>
				</el-table-column>

				<el-table-column label="置顶">
				<template slot-scope="scope"><el-tag v-if="scope.row.is_top==1" type="success">是</el-tag><el-tag v-else type="danger">否</el-tag></template>
				</el-table-column>

				<el-table-column label="加入时间">
				<template slot-scope="scope">{{ scope.row.add_time|formatDate}}</template>
				</el-table-column>

				<el-table-column label="操作">
				<template slot-scope="scope">
				<!-- <el-button plain>查看</el-button> -->
				<router-link :to="{name:'product_edit',params:{id:scope.row.id}}"><el-button plain icon="el-icon-edit" >编辑</el-button></router-link>
				</template>
				</el-table-column>

			</el-table>
			<div class="fy">
				<el-pagination medium layout="total, sizes, prev, pager" :total="page.count" :page-size="page.limit" :current-page="page.page" @size-change="size_change" @current-change="current_change"> </el-pagination>
			</div>
	</div>
</template>

<script>

	export default {
	    data() {
		    return {
		    	lists: [],
		    	ids:null,
		    	page:[],
		    	title:'',

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
	      	this.$post(this.ROOT_URL + 'Admin/product/del',{id:this.ids}).then(function(res){
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
	    	_this.$post(this.ROOT_URL + 'Admin/product/index',{limit:this.page.limit,page:this.page.page,title:this.title}).then(function(res){
	    		_this.lists = res.data;
	    		_this.page = res.page;
	    	});
	      },
	      getList:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/product/index',{limit:this.page.limit,page:this.page.page}).then(function(res){
	    		_this.lists = res.data;
	    		_this.page = res.page;
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