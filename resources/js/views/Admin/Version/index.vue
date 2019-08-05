<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button type="primary" icon="el-icon-plus">添加</el-button>

			<!-- <input class="index_search_input" type="text" placeholder="输入搜索内容"> -->
			<el-input  class="search_input" size="small" placeholder="请输入内容"></el-input>
			<el-button icon="el-icon-search" plain>搜索</el-button>

			<el-button class="main_del_right" icon="el-icon-delete" type="danger">批量删除</el-button>
		</div>
		<div class="unline"></div>

			<el-table
			ref="multipleTable"
			:data="tableData3"
			tooltip-effect="dark"
			size="medium"
			style="width: 100%"
			>
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
				label="日期2"
				>
				<template slot-scope="scope">{{ scope.row.date2 }}</template>
				</el-table-column>
				<el-table-column
				label="操作"
				width="180">
				<template slot-scope="scope">
				<el-button plain>查看</el-button>
				<el-button plain icon="el-icon-edit">编辑</el-button>
				</template>
				</el-table-column>
			</el-table>
			<div class="fy">
				<el-pagination
				medium
				layout="total, sizes, prev, pager"
				:total="50">
				</el-pagination>
			</div>
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	        tableData3: [{
		          date: '2016-05-03',
		          date2: '2016-05-03',
		        }, {
		          date: '2016-05-02',
		          date2: '2016-05-03',
		        }, {
		          date: '2016-05-04',
		          date2: '2016-05-03',
		        }, {
		          date: '2016-05-01',
		          date2: '2016-05-03',
		        }, {
		          date: '2016-05-08',
		          date2: '2016-05-03',
		        }, {
		          date: '2016-05-06',
		          date2: '2016-05-03',
		        }, {
		          date: '2016-05-07',
		          date2: '2016-05-03',
		        }],
	        };
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
	      }
	    }
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_del_right{float: right;}
.index_search_input{width: 200px;margin:0 10px 0 70px;border-radius: 2px;height: 29px;border:1px solid #DCDFE6;outline: none;text-indent: 8px;}
.search_input{width: 200px;margin:0 10px 0 30px;}
.checkbox_text_color .el-checkbox__label{color:#666;}
</style>