<template>
	<div class="index_main">
		<div class="main_btn_left">
			<router-link class="admin_fff_btn" :to="{name:'wechat_cat_add'}"><el-button type="primary" icon="el-icon-plus">添加</el-button></router-link>
			<el-button class="main_del_left" style="margin-left: 20px;" icon="el-icon-s-promotion" type="info" @click="push_wechat_cat">推送微信菜单</el-button>

	

			<el-button class="main_del_right" icon="el-icon-delete" type="danger" @click="del">批量删除</el-button>
		</div>
		<input type="hidden" v-model="ids" value="">
		<div class="unline"></div>

			<el-table ref="multipleTable" :data="lists" tooltip-effect="dark" size="medium" style="width: 100%" @selection-change="changeFun">‘

				<el-table-column type="selection" width="55"></el-table-column>


				<el-table-column label="栏目名" width="120">
				<template slot-scope="scope">{{ scope.row.pid==0?'【'+scope.row.name+'】':scope.row.name }}</template>
				</el-table-column>

				<el-table-column label="内容">
				<template slot-scope="scope">{{ scope.row.content }}</template>
				</el-table-column>

				<el-table-column label="类型">
				<template slot-scope="scope">{{ scope.row.is_type==0?'链接':(scope.row.is_type==1?'事件':'其他') }}</template>
				</el-table-column>

				<el-table-column label="操作" width="180">
				<template slot-scope="scope">
				<!-- <el-button plain>查看</el-button> -->
				<router-link :to="{name:'wechat_cat_edit',params:{id:scope.row.id}}"><el-button plain icon="el-icon-edit" >编辑</el-button></router-link>
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
	      	this.$post(this.ROOT_URL + 'Admin/wechat_cat/del',{id:this.ids}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，删除成功！',
		          type: 'success'
		        });
		        _this.getList();
	      	});
	      },
	     
	      
	      getList:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/wechat_cat/index').then(function(res){
	    		_this.lists = res.data;
	    		_this.page = res.page;
	    		console.log(_this.lists);
	    	});
	      },

	      push_wechat_cat:function(){
	      	var _this = this;
	      	this.$get(this.ROOT_URL + 'Admin/wechat_cat/push_wechat_cat').then(function(res){
	    		if(res.errcode == 0){
	    			_this.$message({
			          message: '恭喜你，推送成功！',
			          type: 'success'
			        });
	    		}else{
	    			_this.$message({
			          message: '推送失败！',
			          type: 'error'
			        });
	    		}
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