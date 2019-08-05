<template>
	<div class="index_main">
		<div class="main_btn_left">
			<router-link class="admin_fff_btn" :to="{name:'goods_cat_add'}"><el-button type="primary" icon="el-icon-plus">添加</el-button></router-link>


			<el-button class="main_del_right" icon="el-icon-delete" type="danger" @click="del">批量删除</el-button>
		</div>
		<input type="hidden" v-model="ids" value="">
		<div class="unline"></div>

			<el-table ref="multipleTable" :data="lists" tooltip-effect="dark" size="medium" style="width: 100%" @selection-change="changeFun">‘

				<el-table-column type="selection" width="55"></el-table-column>

				<el-table-column label="#" width="120">
				<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>

				<el-table-column label="栏目名" >
				<template slot-scope="scope">{{ '——'.repeat(scope.row.lev)+' '+scope.row.name }}</template>
				</el-table-column>

				<el-table-column label="操作" width="180">
				<template slot-scope="scope">
				<!-- <el-button plain>查看</el-button> -->
				<router-link :to="{name:'goods_cat_edit',params:{id:scope.row.id}}"><el-button plain icon="el-icon-edit" >编辑</el-button></router-link>
				</template>
				</el-table-column>

			</el-table>
			
	</div>
</template>

<script>
	export default {
	    data() {
		    return {
		    	lists: [],
		    	ids:null,
		    	page:[],
		    	name:'',

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
	      	this.$post(this.ROOT_URL + 'Admin/goods_cat/del',{id:this.ids}).then(function(res){
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
	      
	      getList:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/goods_cat/index',{limit:this.page.limit,page:this.page.page}).then(function(res){
	    		_this.lists = res.data;
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