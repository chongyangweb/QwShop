<template>
	<div class="index_main">
		<!-- <div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">系统设置</div>
		</div>
		<div class="unline"></div> -->

		<!-- 内容 -->
		<div class="main_content">
			<el-tabs :tab-position="tabPosition" style="height: 200px;">

				<el-tab-pane label="微信">
					<!-- <el-row :gutter="0">
						<el-col :span="8">1</el-col>
						<el-col :span="16">
							<el-table
							ref="multipleTable"
							:data="tableData3"
							tooltip-effect="dark"
							style="width: 100%"
							@selection-change="handleSelectionChange">
								<el-table-column
								type="selection"
								width="55">
								</el-table-column>
								<el-table-column
								label="日期"
								width="120">
								<template slot-scope="scope">{{ scope.row.date }}</template>
								</el-table-column>
								<el-table-column
								prop="name"
								label="姓名"
								width="120">
								</el-table-column>
								<el-table-column
								prop="address"
								label="地址"
								show-overflow-tooltip>
								</el-table-column>
							</el-table>
						</el-col> -->
					</el-row>
					
				</el-tab-pane>
				<el-tab-pane label="扣扣">扣扣</el-tab-pane>
				<el-tab-pane label="陌陌">陌陌</el-tab-pane>
				<el-tab-pane label="脉脉">脉脉</el-tab-pane>
			</el-tabs>			
		</div>

		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        tabPosition: 'top',
	      };
	    },
	    methods: {
	      
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>