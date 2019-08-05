<template>
	<div class="index_main2" >
		<el-row :gutter="20">
			<el-col :span="8" class="default_block_col">
				<el-card shadow="hover" :body-style="{padding:'15px 20px'}">
				  总销售额
				  <i style="float: right; margin: 3px 0 10px 0;font-size: 18px;" class="el-icon-refresh"></i>
				  <div class="unline"></div>
				  <div class="default_total">
				  	<font style="font-size:30px;">￥ 21,200</font>
				  	<div class="default_tongbi">
				  		<div class="default_tongbi_left">周同比：10.25% <i class="el-icon-caret-top" style="color:red"></i></div>
				  		<div class="default_tongbi_right">日同比：10.25% <i class="el-icon-caret-bottom" style="color:green"></i></div>
				  	</div>
				  	<div class="unline"></div>
				  	<el-progress :percentage="90" ></el-progress>
				  	<div class="default_day_sale">日销售额：￥ 11,900</div>
				  </div>
				</el-card>
			</el-col>
			<el-col :span="8"  class="default_block_col">
				<el-card shadow="hover" :body-style="{padding:'15px 20px'}">
				  订单信息
				  <i style="float: right; margin: 3px 0 10px 0;font-size: 18px;" class="el-icon-refresh"></i>
				  <div class="unline"></div>
				  <div class="default_program2">
				  	<ul>
				  		<li><div class="default_sq"><el-tag>等待付款</el-tag></div><p>1,000</p></li>
				  		<li><div class="default_sq"><el-tag type="success">完成订单</el-tag></div><p>560</p></li>
				  		<li><div class="default_sq"><el-tag type="danger">等待发货</el-tag></div><p>1,000</p></li>
				  		<!-- <li><div class="default_sq"></div><p></p></li> -->
				  	</ul>
				  </div>
				</el-card>
			</el-col>
			<el-col :span="8" class="default_block_col">
				<el-card shadow="hover" :body-style="{padding:'15px 20px'}">
				    版本信息
				    <div class="unline" style="margin-bottom: 0px;"></div>
					<div class="default_copyright">
						<ul>
							<li><span>当前版本：</span><el-tag type="info">v 1.0.0</el-tag></li>
							<li><span>前端框架：</span>Element Ui</li>
							<li><span>下载Apk：</span><el-button type="primary" size='mini' icon="el-icon-download">点击下载</el-button></li>
						</ul>
					</div>
				</el-card>
			</el-col>
		</el-row>

		<div  class="default_tubiao"><el-card shadow="hover" :body-style="{padding:'15px 20px'}">
		  总销售额
		  <i style="float: right; margin: 3px 0 10px 0;font-size: 18px;" class="el-icon-refresh"></i>
		  <div class="unline"></div>
		  <div class="default_total">
		  	<div id="myChart2" :style="{width:'60%',height:'250px',float:'left'}"></div>
		  	<div class="default_hot_goods" style="float: left;margin-left:3%;width:37%;">
		  		<div>门店销售额排名</div>
		  		<ul>
		  			<li><div style="color:#999;float:right;">12,000</div><span>1</span> <div style="width:70%;overflow:hidden;height:20px;">北京华为电信手机Mate 20 Pro</div></li>
		  			<li><div style="color:#999;float:right;">12,000</div><span>2</span> <div style="width:70%;overflow:hidden;height:20px;">北京华为电信手机Mate 20 Pro</div></li>
		  			<li><div style="color:#999;float:right;">12,000</div><span>3</span> <div style="width:70%;overflow:hidden;height:20px;">北京华为电信手机Mate 20 Pro</div></li>
		  			<li><div style="color:#999;float:right;">12,000</div><span>4</span> <div style="width:70%;overflow:hidden;height:20px;">北京华为电信手机Mate 20 Pro</div></li>
		  			<li><div style="color:#999;float:right;">12,000</div><span>5</span> <div style="width:70%;overflow:hidden;height:20px;">北京华为电信手机Mate 20 Pro</div></li>
		  			<li><div style="color:#999;float:right;">12,000</div><span>6</span> <div style="width:70%;overflow:hidden;height:20px;">北京华为电信手机Mate 20 Pro</div></li>
		  		</ul>
		  	</div>
		  </div>
		</el-card></div>

		<el-row :gutter="20">

			<el-col :span="16" class="default_block_col">
				<el-card shadow="hover" :body-style="{padding:'15px 20px'}">
				    我的软件
				    <i style="float: right; margin: 3px 0 10px 0;font-size: 18px;" class="el-icon-refresh"></i>
				    <div class="unline"></div>
				    <!-- 图表 -->
				    <div id="myChart" :style="{width:'100%',height:'250px'}"></div>
				</el-card>
			</el-col>

			<el-col :span="8" class="default_block_col">
				<el-card shadow="hover" :body-style="{padding:'15px 20px'}">
				  授权信息
				  <i style="float: right; margin: 3px 0 10px 0;font-size: 18px;" class="el-icon-refresh"></i>
				  <div class="unline"></div>
			
				</el-card>
			</el-col>
			
		</el-row>
	</div>
</template>

<script>
	import echarts from 'echarts';

	export default {
	    data() {
	        return {
	        };
	    },
	    methods: {
	    	
	    },
		mounted () {

			/*ECharts图表*/
			var myChart = echarts.init(document.getElementById('myChart'));
			myChart.setOption({
				title:{text:'Echart入门'},
				tooltip:{trigger: 'axis'},
				grid:{left: '3%',right:'4%',bottom:'8%',containLabel:true},
				toolbox:{feature:{saveAsImage: {}}},
				xAxis:{type: 'category',boundaryGap: false,data: ['周一','周二','周三']},
				yAxis:{type:'value'},
				series: [
			        {
			            name:'直接访问',
			            type:'line',
			            stack: '总量2',
			            data:[320, 332, 301]
			        },
			        {
			            name:'搜索引擎',
			            type:'line',
			            stack: '总量',
			            data:[820, 932, 901]
			        }
		    	]
			});


			/*ECharts图表*/
			var myChart2 = echarts.init(document.getElementById('myChart2'));
			myChart2.setOption({
				color:'#409EFF',
				title:{text:'销售趋势'},
				legend: {
                	data:['销量']
            	},
				tooltip:{trigger: 'axis'},
				grid:{left: '0%',right:'0%',bottom:'0%',containLabel:true},
				toolbox:{feature:{saveAsImage: {}}},
				xAxis:{data: ['01','02','03','04','05','06','07','08','09','10','11','12']},
				yAxis:{type:'value'},
				series: [
			        {
			            name:'销量',
			            type:'bar',
			            stack: '总量2',
			            data:[320, 332, 901, 21, 180, 301, 301, 301, 301, 301]
			        },
			        
		    	]
			});
		},

	  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index_main{background: #666;margin-left: 15px;margin-right: 10px;margin-top:10px;border: 1px solid #e7eaec !important;padding-bottom: 80px;padding: 20px;}
.unline{margin:15px 0;}
.default_program{text-align: center;width: 100%;}
.default_program ul li{float: left;width: 22%;background: #f9f9f9;margin-right:4%; margin-bottom:10px; }
.default_program ul li:nth-child(4n){margin-right:0;}
.default_program ul li:hover{background: #f1f1f1}
.default_program2 ul li{float: left;width: 48%;background: #f9f9f9;margin-right:4%; margin-bottom:10px; height: 82px;padding: 10px;box-sizing: border-box;font-size: 12px;color:#999;}
.default_program2 ul li:nth-child(2n){margin-right:0;}
.default_program2 ul li:nth-child(3){width: 100%;}
.default_program2 ul li:hover{background: #f3f3f3}
.default_program .i_backgraounds{text-align: center;margin: 0 auto;display: block;padding: 5px 0;}
.default_program2 p{line-height: 55px;font-size: 22px;color:#303133;}
.i_backgraounds i{font-size: 28px;}
.default_program p{text-align: center;background: #fff;line-height: 30px;font-size:12px;clear: both;}
.default_block_col{margin-bottom: 20px;}
.default_copyright ul li{line-height: 66px;border-bottom: 1px solid #efefef;}
.default_copyright ul li:nth-child(3){border-bottom: none;}
.default_copyright ul li span{margin-right: 60px;}
.default_tongbi_left{float:left;}
.default_tongbi_right{float:left;margin-left:40px;}
.default_tongbi:after{clear:both;content:'';display: block;}
.default_total:after{clear:both;content:'';display: block;}
.default_tongbi{margin-top: 20px;}
.default_day_sale{margin-top: 15px;margin-bottom: 17px;}
.default_tubiao{width: 100%;;margin-bottom: 20px;}
.default_hot_goods ul li {margin-top: 20px;overflow: hidden;}
.default_hot_goods ul li span{border-radius: 50%;background: #f5f5f5;width: 20px;height: 20px;text-align: center;display: block;float: left;margin-right: 8px;}
.default_hot_goods ul li:nth-child(1) span{background: #314659;color:#fff;}
.default_hot_goods ul li:nth-child(2) span{background: #314659;color:#fff;}
.default_hot_goods ul li:nth-child(3) span{background: #314659;color:#fff;}
</style>