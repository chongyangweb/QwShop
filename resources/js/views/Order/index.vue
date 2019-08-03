<template>
	<div class="index_main">
		<div class="main_btn_left">
			<!-- <router-link class="admin_fff_btn" :to="{name:'goods_add'}"><el-button type="primary" icon="el-icon-plus">添加</el-button></router-link> -->

			<!-- <input class="index_search_input" type="text" placeholder="输入搜索内容"> -->
			<el-input  class="search_input" size="small" v-model="order_no" placeholder="请输入订单号"></el-input>
			<el-select style="margin-right: 10px;" v-model="order_type" placeholder="请选择" size="small">
			    <el-option label="订单状态" value=""></el-option>
			    <el-option label="未支付" value="pay_status"></el-option>
			    <el-option label="等待发货" value="delivery_status"></el-option>
			    <el-option label="等待确认" value="order_status"></el-option>
			    <el-option label="等待评论" value="comment_status"></el-option>
			    <el-option label="完成订单" value="comp_order"></el-option>
			    <el-option label="取消订单" value="del_order"></el-option>
		  	</el-select>

		  	<el-date-picker
		  	  style="margin-right: 10px;"
		  	  size="small"
		      v-model="date_picker"
		      @change="date_picker_change"
		      value-format="timestamp"
		      type="daterange"
		      range-separator="至"
		      start-placeholder="开始日期"
		      end-placeholder="结束日期">
		    </el-date-picker>

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
				<template slot-scope="scope"><img width="50px" height="50px" :src="scope.row.image"></template>
				</el-table-column>

				<el-table-column label="标题" >
				<template slot-scope="scope">{{ scope.row.title }}</template>
				</el-table-column>

				<el-table-column label="订单号">
				<template slot-scope="scope">{{ scope.row.order_no}}</template>
				</el-table-column>

				<el-table-column label="支付状态">
				<template slot-scope="scope">
					<div v-if="scope.row.pay_status==0">
						<el-tag type="info">未支付</el-tag>
					</div>
					<div v-if="scope.row.pay_status==1">
						<el-tag type="success">已经支付</el-tag>
					</div>
				</template>
				</el-table-column>

				<el-table-column label="订单状态">
				<template slot-scope="scope">
					<div v-if="scope.row.pay_status == 0 && scope.row.order_status == 0">
						<el-tag type="info">等待支付</el-tag>
					</div>

					<div v-if="scope.row.pay_status == 1 && scope.row.delivery_status==0">
						<el-tag type="info">等待发货</el-tag>
					</div>

					<div v-if="scope.row.pay_status == 1 && scope.row.delivery_status==1 && scope.row.order_status==0">
						<el-tag type="info">等待确认</el-tag>
					</div>

					<div v-if="scope.row.pay_status == 1 && scope.row.delivery_status==1 && scope.row.order_status==1 && scope.row.comment_status==0">
						<el-tag type="success">等待评论</el-tag>
					</div>

					<div v-if="scope.row.pay_status == 1 && scope.row.delivery_status==1 && scope.row.order_status==1 && scope.row.comment_status==1">
						<el-tag type="success">完成</el-tag>
					</div>
					<div v-if="scope.row.order_status==99">
						<el-tag type="danger">取消</el-tag>
					</div>
				</template>
				</el-table-column>

				<el-table-column label="加入时间">
				<template slot-scope="scope">{{ scope.row.add_time|formatDate}}</template>
				</el-table-column>

				<el-table-column label="操作">
				<template slot-scope="scope">
				<!-- <el-button plain>查看</el-button> -->
				<div style="float: left;margin-right: 1rem;"><router-link :to="{path:'/Admin/order/info/'+scope.row.id}"><el-button plain icon="el-icon-edit" >查看</el-button></router-link></div>
				<div v-if="scope.row.pay_status == 1 && scope.row.delivery_status==0"><el-button @click="open_dialog(scope.row.id)">发货设置</el-button></div>
				</template>
				</el-table-column>

			</el-table>
			<div class="fy">
				<el-pagination medium layout="total, sizes, prev, pager" :total="page.count" :page-size="page.limit" :current-page="page.page" @size-change="size_change" @current-change="current_change"> </el-pagination>
			</div>

			<!-- 物流表单 -->
			<el-dialog title="填写快递单号" :visible.sync="dialogshow">
			    <el-form-item label="快递单号" label-width="120px" >
			      <el-input v-model="delivery_no" autocomplete="off"></el-input>
			    </el-form-item>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogshow = false">取 消</el-button>
			    <el-button type="primary" @click="add_delivery_no()">确 定</el-button>
			  </div>
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
		    	order_no:'',
		    	dialogshow:false,
		    	delivery_no:'',
		    	order_id:'',
		    	order_type:'',
		    	date_picker:'',
		    	start_time:0,
		    	end_time:0,

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
	      	this.$post(this.ROOT_URL + 'Admin/goods/del',{id:this.ids}).then(function(res){
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
	    	_this.$post(this.ROOT_URL + 'Admin/order/index',{limit:this.page.limit,page:this.page.page,order_no:this.order_no,order_type:this.order_type,start_time:this.start_time,end_time:this.end_time}).then(function(res){
	    		_this.lists = res.order_list;
	    		_this.page = res.page;
	    	});
	      },
	      getList:function(){
	      	var _this = this;
	    	_this.$post(this.ROOT_URL + 'Admin/order/index',{limit:this.page.limit,page:this.page.page}).then(function(res){
	    		_this.lists = res.order_list;
	    		_this.page = res.page;
	    	});
	      },
	      // 打开快递
	      open_dialog:function(e){
	      	this.dialogshow=true;
	      	this.order_id = e;
	      },
	      // 快递号添加
	      add_delivery_no:function(e){
	      	if(this.$isEmpty(this.delivery_no)){
	      		this.$message({
		          message: '请认真填写订单号！',
		          type: 'error'
		        });
		        return;
	      	}
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/order/edit_delivery_no',{order_id:this.order_id,delivery_no:this.delivery_no}).then(function(res){
	    		_this.$message({
		          message: '恭喜，设置成功！',
		          type: 'success'
		        });
		        return;
	    	});
	      },
	      // 时间选择改变
	      date_picker_change:function(e){
	      	this.start_time = e[0]/1000;
	      	this.end_time = e[1]/1000;
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