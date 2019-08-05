<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">订单详情</div>
		</div>
		<div class="unline"></div>

		<!-- 订单信息 -->
		<div class="order_info_detail">
			<div class="order_info_detail_row">
				<el-row :gutter="20">
				  <el-col :span="8">订单号：&nbsp;&nbsp;<span style="color:#999;">{{order_no}}</span></el-col>
				  <el-col :span="16">状态：&nbsp;&nbsp;
				  	<el-tag type="danger" v-show="data.pay_status==0">待付款</el-tag>
				  	<el-tag type="danger" v-show="data.pay_status==1 && data.delivery_status==0">待发货</el-tag>
				  	<el-tag type="danger" v-show="data.pay_status==1 && data.delivery_status==1 && data.order_status==0">待收货</el-tag>
				  	<el-tag type="danger" v-show="data.pay_status==1 && data.delivery_status==1 && data.order_status==1 && data.comment_status==0">待评论</el-tag>
				  </el-col>
				</el-row>
			</div>

			<div class="order_info_detail_row">
				<el-row :gutter="20">
				  <el-col :span="8">用户：&nbsp;&nbsp;<span style="color:#999;">{{receive_name}}</span></el-col>
				  <el-col :span="8">联系电话：&nbsp;&nbsp;<span style="color:#999;">{{receive_tel}}</span></el-col>
				  <el-col :span="8">取货地址：&nbsp;&nbsp;<span style="color:#999;">{{province!=city?province+city+region+address:city+region+address}}</span></el-col>
				</el-row>
			</div>

			<div class="order_info_detail_row">
				<el-row :gutter="20">
				  <el-col :span="24">备注：<span style="color:#999;"></span></el-col>
				</el-row>
			</div>
			
			<div class="unline"></div>
		</div>

		<div class="order_goods_list">
			<el-table  :data="lists"  size="medium" style="width: 100%">‘

				<el-table-column type="selection" width="55"></el-table-column>

				<el-table-column label="#" width="60">
				<template slot-scope="scope">{{ scope.row.id }}</template>
				</el-table-column>

				<el-table-column label="缩略图" width="80">
				<template slot-scope="scope"><img width="50px" height="50px" :src="scope.row.image"></template>
				</el-table-column>

				<el-table-column label="标题" >
				<template slot-scope="scope">{{ scope.row.title }}</template>
				</el-table-column>

				<el-table-column label="规格属性" >
				<template slot-scope="scope">{{ scope.row.spec_name }}</template>
				</el-table-column>

				<el-table-column label="单价" >
				<template slot-scope="scope">{{ scope.row.price }}</template>
				</el-table-column>

				<el-table-column label="数量" >
				<template slot-scope="scope">{{ scope.row.num }}</template>
				</el-table-column>

				<el-table-column label="小计" >
				<template slot-scope="scope">{{ scope.row.num*scope.row.price }}</template>
				</el-table-column>

			</el-table>
		</div>

		<div class="order_info_total_price">
			总计：￥ {{total_price}}
		</div>

		<div class="clear"></div>

		<div class="unline"></div>
		<br>
		<br>
		<div class="main_btn_left">
			<div class="index_main_title"><font>快递信息</font></div>
		</div>
		<div class="unline"></div>

		<div class="delivery_content" v-show="delivery_content.length==0">
			<div style="text-align: center;color:#999">没有快递号！</div>
		</div>

		<div class="delivery_content" v-show="delivery_content.length>0">
			<p v-for="v in delivery_content"><font style="margin-right: 1rem;color:#000;">{{v.AcceptTime}}</font>-{{v.AcceptStation}}</p>
		</div>
		<div class="unline"></div>
		
	</div>
</template>

<style>
.order_info_detail_row{
	margin-bottom: 20px;
}
.order_info_total_price{float: right;color:red;line-height: 60px;}
.delivery_content{margin-bottom: 2rem;}
.delivery_content p{line-height: 2rem;}
</style>

<script>
	let Base64 = require('js-base64').Base64
	export default {
	    data() {
		    return {
		    	lists: [],
		    	order_no:'',
		    	province:'',
		    	city:'',
		    	region:'',
		    	address:'',
		    	receive_tel:'',
		    	receive_name:'',
		    	data:{},
		    	total_price:0.00,
		    	delivery_content:[],
		    	ShipperCode:'',
		    }
	    },
	    methods:{
	    	get_delivery_name:function(){

	    		if(this.data.delivery_no == ''){
	    			return;
	    		}

	    		var _this = this;
	    		var delivery_url = 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx'; // API
	    		var RequestData = "{'LogisticCode':'"+this.data.delivery_no+"'}"; // 快递单号
	    		var RequestType = '2002';
	    		var EBusinessID = '1542264'; // 商户ID
	    		var key = "52c8ce3d-59a6-491a-ac75-aa5cd844bf1e" // key
	    		var DataSign = encodeURIComponent(Base64.encode(this.$md5(RequestData+key))); // 签名
	    		var DataType = 'json'; // 返回类型
	    		// console.log(RequestData);
	    		this.$post(delivery_url,{RequestData:RequestData,RequestType:RequestType,EBusinessID:EBusinessID,DataSign:DataSign,DataType:DataType}).then(function(res){
	    			if(res.Success == true){
	    				_this.ShipperCode = res.Shippers[0].ShipperCode;
	    				_this.get_delivery_content();
	    			}else{
	    				return false;
	    			}
	    		});
	    		
	    	},
	    	get_delivery_content:function(){
	    		var _this = this;
	    		var delivery_url = 'http://api.kdniao.com/Ebusiness/EbusinessOrderHandle.aspx'; // API
	    		var RequestData = "{'LogisticCode':'"+this.data.delivery_no+"','ShipperCode':'"+this.ShipperCode+"'}"; // 快递单号
	    		var RequestType = '1002';
	    		var EBusinessID = '1542264'; // 商户ID
	    		var key = "52c8ce3d-59a6-491a-ac75-aa5cd844bf1e" // key
	    		var DataSign = encodeURIComponent(Base64.encode(this.$md5(RequestData+key))); // 签名
	    		var DataType = 'json'; // 返回类型

	    		this.$post(delivery_url,{RequestData:RequestData,RequestType:RequestType,EBusinessID:EBusinessID,DataSign:DataSign,DataType:DataType}).then(function(res){
	    			if(res.Success == true){
	    				_this.delivery_content = res.Traces;
	    			}
	    		});

	    	},
	    },
	    mounted(){
	    	var id = this.$route.params.id;
	    	var _this = this;
	    	this.$post(this.ROOT_URL + 'Admin/order/getOrderInfo',{id:id}).then(function(res){
	    		console.log(res);
	    		_this.data = res.data;
	    		_this.lists = res.data.get_order_goods;
	    		_this.province = res.data.province;
	    		_this.city = res.data.city;
	    		_this.region = res.data.region;
	    		_this.receive_tel = res.data.receive_tel;
	    		_this.receive_name = res.data.receive_name;
	    		_this.order_no = res.data.order_no;
	    		_this.total_price = res.data.price;
	    		_this.get_delivery_name();

	    	});

	    	
	    },
	}
</script>