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

		<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
		<div style="margin: 15px 0;"></div>
		<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
			<div v-for="city in cities">
			<el-checkbox class="checkbox_text_color" :label="city" :key="city">{{city}}</el-checkbox>
			</div>
		</el-checkbox-group>
	</div>
</template>

<script>
	const cityOptions = ['上海', '北京', '广州', '深圳'];
	export default {
	    data() {
	      return {
	        checkAll: false,
	        checkedCities: ['上海', '北京'],
	        cities: cityOptions,
	        isIndeterminate: true
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