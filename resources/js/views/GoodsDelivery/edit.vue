<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">快递模版编辑</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">模版名</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="name" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">添加地区</div></el-col>
				<el-col :span="10"><el-button type="success" @click="addArea">添加地区</el-button></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>
			
			<div ref="area">
				<el-row :gutter="20" v-for="v,k in list" style="margin-bottom: 1rem;">
					<el-col :span="3"><div class="input_lable">地区</div></el-col>
					<el-col :span="3"><el-input size="small" v-model="v.price" type="number" placeholder="运费"></el-input></el-col>
					<el-col :span="2"><el-button @click="selectArea(k)">选择地区</el-button></el-col>
					<el-col :span="2">{{v.area}}</el-col>
					<el-col :span="2"><el-button type="danger" @click="delArea(k)">删除</el-button></el-col>
					<el-col :span="12"><div class="input_notice"></div></el-col>
				</el-row>
				<div class="unline2"></div>
			</div>


			<el-row :gutter="20">
				<el-col :span="3">&nbsp;</el-col>
				<el-col :span="4"><el-button type="primary" @click="submit">提 交</el-button></el-col>
				<el-col :span="17"><div class="input_notice"></div></el-col>
			</el-row>
			
		</div>

		<el-dialog title="选择地区" :visible.sync="dialogFormVisible">
			<el-select v-model="selects" placeholder="请选择活动区域">
		        <el-option v-for="v in areaList" :label="v.name" :value="v.name"></el-option>
		    </el-select>
		    <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="c_area">确 定</el-button>
			  </div>
		</el-dialog>

		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      	list:[],
			name:'',
	      	delivery_price:'',
	      	parent:null,
	      	dialogFormVisible:false,
	      	selects:'广东省',
	      	areaList:[],
	      	is_sort:0,
	      	content:[],
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	var area = '';
	      	var price = '';
	      	this.content = [];
	      	for(var i=0;i<this.list.length;i++){
	      		area = this.$refs.area.childNodes[i].childNodes[3].innerText;
	      		price = this.$refs.area.childNodes[i].childNodes[1].childNodes[0].childNodes[1].value;
	      		this.content.push({price:price,area:area});
	      	}
	      	this.$post(this.ROOT_URL + 'Admin/goods_delivery/edit/' + this.$route.params.id ,{name:this.name,content:this.content}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      addArea:function(){
	      	this.list.push({price:'',area:''});
	      },
	      selectArea:function(k){
	      	this.dialogFormVisible=true;
	      	var _this = this;
	    	this.$get(_this.ROOT_URL + "Admin/goods_area/getArea",{id:0}).then(function(res){
	    		_this.areaList = res;
	    		_this.is_sort = k;
	    	});
	      },
	      c_area:function(){
	      	var _this = this;
	      	this.dialogFormVisible=false;
	      	this.list[this.is_sort].area = this.selects;
	      	// console.log(this.list);
	      },
	      delArea:function(k){
	      	this.list.splice(k,1);
	      },
	      
	    },
	    created:function(){
	    	var _this = this;
	    	this.$get(this.ROOT_URL + "Admin/goods_delivery/edit/"+this.$route.params.id).then(function(res){
	    		_this.name = res.info.name;
	    		_this.list = res.info.content;
	    	});
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-select-dropdown__wrap{margin-bottom: 0px;}
.el-select-dropdown{padding-bottom: 15px;}
</style>