<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">商品添加</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">
			<el-tabs :tab-position="tabPosition" v-model="selects">
			    <el-tab-pane label="商品信息" name="first">
					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">标题</div></el-col>
						<el-col :span="10"><el-input size="small" v-model="title" placeholder="请输入标题"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">副标题</div></el-col>
						<el-col :span="10"><el-input size="small" v-model="sub_title" placeholder="请输入副标题"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">商品编码</div></el-col>
						<el-col :span="10"><el-input size="small" v-model="goods_no" placeholder="QW-000001"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">品牌</div></el-col>
						<el-col :span="10">
							<el-select v-model="brand_id" size="small" placeholder="请选择">
								<el-option value="0" label="无品牌"></el-option>
								<el-option v-for="v in brand_parent" :value="v.id" :label="v.name"></el-option>
							</el-select>
						 </el-col>
						 <el-col :span="11"><div class="input_notice"></div></el-col>
					 </el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">父栏目</div></el-col>
						<el-col :span="10">
							<el-select v-model="cid" size="small" placeholder="请选择">
								<el-option value="0" label="无栏目"></el-option>
								<el-option v-for="v in parent" :value="v.id" :label="v.name"></el-option>
							</el-select>
						 </el-col>
						 <el-col :span="11"><div class="input_notice"></div></el-col>
					 </el-row>
					<div class="unline2"></div>
					
					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">缩略图</div></el-col>
						<el-col :span="19">
						<el-upload
						  :action="ROOT_URL + 'Admin/goods_brand/thumb?token=' + getToken()"
						  list-type="picture-card"
						  :on-success="onSuccess"
						  :on-remove="handleRemove">
						  <i class="el-icon-plus"></i>
						</el-upload>
						<!-- <el-dialog :visible.sync="dialogVisible">
						  <img width="100%" :src="dialogImageUrl" alt="">
						</el-dialog> -->
						</el-col>
						<el-col :span="2"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">价格</div></el-col>
						<el-col :span="10"><el-input size="small" type="number" v-model="price" placeholder="0.00"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">库存</div></el-col>
						<el-col :span="10"><el-input size="small" type="number" v-model="num" placeholder="0"></el-input></el-col>
						<el-col :span="11"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">内容</div></el-col>
						<el-col :span="18">
						<div id="editor">
					    </div><textarea v-model="content" style="display:none;"></textarea></el-col>
						<el-col :span="13"><div class="input_notice"></div></el-col>
					</el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">上架</div></el-col>
						<el-col :span="10">
							<el-select v-model="is_sale" size="small" placeholder="请选择">
								<el-option value="0" label="否"></el-option>
								<el-option value="1" label="是"></el-option>
							</el-select>
						 </el-col>
						 <el-col :span="11"><div class="input_notice"></div></el-col>
					 </el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">热门</div></el-col>
						<el-col :span="10">
							<el-select v-model="is_hot" size="small" placeholder="请选择">
								<el-option value="0" label="否"></el-option>
								<el-option value="1" label="是"></el-option>
							</el-select>
						 </el-col>
						 <el-col :span="11"><div class="input_notice"></div></el-col>
					 </el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3"><div class="input_lable">置顶</div></el-col>
						<el-col :span="10">
							<el-select v-model="is_top" size="small" placeholder="请选择">
								<el-option value="0" label="否"></el-option>
								<el-option value="1" label="是"></el-option>
							</el-select>
						 </el-col>
						 <el-col :span="11"><div class="input_notice"></div></el-col>
					 </el-row>
					<div class="unline2"></div>

					<el-row :gutter="20">
						<el-col :span="3">&nbsp;</el-col>
						<el-col :span="1.5"><el-button type="primary" @click="submit">提 交</el-button></el-col>
						<el-col :span="2"><el-button type="success" @click="nextto" v-if="is_add_goods">下一步</el-button></el-col>
						<el-col :span="17"><div class="input_notice"></div></el-col>
					</el-row>


			    </el-tab-pane>
			    <el-tab-pane label="规格信息" name="sec">
			    	<div v-for="(v,k) in attr">
			    		<el-row :gutter="20" ref="attr">
							<el-col :span="3"><div class="input_lable">规格<span v-if="k>0"> - {{k}}</span></div></el-col>
							<el-col :span="3"><el-input size="small"  placeholder="如：颜色" v-model="v.key"></el-input></el-col>
							<el-col :span="2"><div class="input_lable">参数<span v-if="k>0"> - {{k}}</span></div></el-col>
							<el-col :span="5"><el-input size="small"  placeholder="如：红,蓝" v-model="v.val"></el-input></el-col>
							<el-col :span="2"><el-button type="danger" @click="delAttr(k)">删除</el-button></el-col>
							<el-col :span="8"><div class="input_notice"></div></el-col>
						</el-row>
						<div class="unline2"></div>
			    	</div>
			    	
					<el-row :gutter="20" >
						<el-col :span="3">&nbsp;</el-col>
						<el-col :span="1.5"><el-button type="primary" @click="addAttr">增加规格</el-button></el-col>
						<el-col :span="1.5"><el-button type="success" @click="nextth">下一步</el-button></el-col>
					</el-row>
			    </el-tab-pane>
			    <el-tab-pane label="价格设置" name="thr">
			    	<div v-for="(v,k) in attrPrice">
			    		<el-row :gutter="20" ref="spec">
							<el-col :span="4"><div class="input_lable">【SKU】 <font color="red">{{v.name}}</font></div></el-col>
							<el-col :span="2"><div class="input_lable">价格 - ￥</div></el-col>
							<el-col :span="3"><el-input size="small"  placeholder="0.00"  v-model="v.price"></el-input></el-col>
							<el-col :span="2"><div class="input_lable">库存</div></el-col>
							<el-col :span="3"><el-input size="small"  placeholder=""  v-model="v.num"></el-input></el-col>
							<el-col :span="7"><div class="input_notice"></div></el-col>
						</el-row>
						<div class="unline2"></div>
			    	</div>
			    	<el-row :gutter="20" >
						<el-col :span="3">&nbsp;</el-col>
						<el-col :span="1.5"><el-button type="primary" @click="nextfo">提 交</el-button></el-col>
					</el-row>
			    </el-tab-pane>
			</el-tabs>
			
			
		</div>

		
	</div>
</template>

<script>
	
	export default {
	    data() {
	      return {
	      	title:'',
	      	goods_no:'',
	      	sub_title:'',
	      	content:'',
	      	num:'9999',
	      	is_hot:'0',
	      	is_top:'0',
	      	is_sale:'1',
	      	brand_id:'0',
	      	price:'0',
	      	thumb:'',
	      	parent:null,
	      	brand_parent:null,
	      	cid:'0',
	        fileList2: [],
	        tabPosition: 'left',
	        selects:'first',
	        attr:[],
	        attrPrice:[],
	        user_id:'',
	        goods_id:'',
	        is_add_goods:true,
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/goods/add',{title:this.title,goods_no:this.goods_no,brand_id:this.brand_id,price:this.price,content:this.content,is_hot:this.is_hot,is_top:this.is_top,num:this.num,thumb:this.thumb,cid:this.cid,user_id:this.user_id,sub_title:this.sub_title,is_sale:this.is_sale}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，添加成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      handleRemove(file, fileList) {
	        // console.log(file, fileList);
	        this.thumb = '';
	        for(var i=0;i<fileList.length;i++){
	        	console.log(fileList[i]);
	        	if(this.thumb == ''){
	        		this.thumb = fileList[i].response.thumb_path;
	        	}else{
	        		this.thumb = this.thumb + ',' + fileList[i].response.thumb_path;
	        	}
	        }
	      },
	      onSuccess:function(e){
	      	if(this.thumb == ''){
        		this.thumb = e.thumb_path;
        	}else{
        		this.thumb = this.thumb + ',' + e.thumb_path;
        	}
	      },
	      nextto:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/goods/add',{title:this.title,goods_no:this.goods_no,brand_id:this.brand_id,price:this.price,content:this.content,is_hot:this.is_hot,is_top:this.is_top,thumb:this.thumb,cid:this.cid,user_id:this.user_id,sub_title:this.sub_title,is_sale:this.is_sale,num:this.num}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，添加成功！',
		          type: 'success'
		        });
		        _this.goods_id = res;
	      	});
	      	this.selects = 'sec';
	      	this.is_add_goods = false;
	      },
	      nextth:function(){
	      	var _this = this;
	      	var nexts = true;

	      	if(this.attr.length == 0){
	      		nexts = false;
	      		this.$message({
		          message: '下一步异常，认真填写规格！',
		          type: 'error'
		        });
	      	}
	      	var attr = [];
	      	for(var i=0;i<this.attr.length;i++){
	      		var guige = this.$refs.attr[i].$el.children[1].children[0].childNodes[1].value;
	      		var canshu = this.$refs.attr[i].$el.children[3].children[0].childNodes[1].value;
	      		if(guige=='' || canshu==''){
	      			this.$message({
			          message: '下一步异常，认真填写规格！',
		          	  type: 'error'
			        });
			        nexts = false;
			        break;
	      		}else{
	      			attr.push({guige:guige,canshu:canshu});
	      		}
	      	}

	      	
	      	

	      	// console.log(attr);

	      	if(nexts){

	      		var f = [];
	      		var s = [];
	      		var attrList = [];

	      		for(var i=0;i<attr.length;i++){
	      			s = attr[i].canshu.split(',');
	      			f = this.getMn(f,s);
	      		}

	      		// this.attrPrice = f;
	      		for(var x=0;x<f.length;x++){
	      			this.attrPrice.push({name:f[x],price:'',val:''});
	      		}
	      		

	      		var guige = '';
		      	var canshu = '';
		      	var goods_id = '';
		      	for(var g=0;g<attr.length;g++){
		      		if(guige == ''){
		      			guige = attr[g].guige;
		      		}else{
		      			guige = guige+':'+attr[g].guige;
		      		}
		      		if(canshu == ''){
		      			canshu = attr[g].canshu;
		      		}else{
		      			canshu = canshu+':'+attr[g].canshu;
		      		}
		      		if(goods_id == ''){
		      			goods_id = this.goods_id;
		      		}else{
		      			goods_id = goods_id+':'+this.goods_id;
		      		}
		      	}
		      	if(this.goods_id == ''){
		      		this.$message({
			          message: '非法异常，请刷新后重新添加商品！',
			          type: 'error'
			        });
		      	}else{
		      		this.$post(this.ROOT_URL + 'Admin/goods_attr/add',{goods_id:goods_id,name:guige,val:canshu}).then(function(res){
			      		_this.$message({
				          message: '恭喜你，规格添加成功！',
				          type: 'success'
				        });
			      	});
		      	}


	      		this.selects = 'thr';
	      	}
	      	
	      },
	      nextfo:function(){
	      	// console.log(this.$refs.spec);
	      	// console.log(this.$refs.spec[0].$el.children[0].children[0].childNodes[1].innerText);
	      	// console.log(this.$refs.spec[0].$el.children[2].children[0].childNodes[1].value);
	      	// console.log(this.$refs.spec[0].$el.children[4].children[0].childNodes[1].value);
	      	// console.log(this.attrPrice);
	      	var _this = this;
	      	var sku = '';
	      	var price = '';
	      	var num = '';
	      	var goods_id = '';
	      	for(var i=0;i<this.attrPrice.length;i++){
	      		if(sku == ''){
	      			sku = this.$refs.spec[i].$el.children[0].children[0].childNodes[1].innerText;
	      		}else{
	      			sku = sku+':'+this.$refs.spec[i].$el.children[0].children[0].childNodes[1].innerText;
	      		}
	      		if(price == ''){
	      			price = this.$refs.spec[i].$el.children[2].children[0].childNodes[1].value;
	      		}else{
	      			price = price+':'+this.$refs.spec[i].$el.children[2].children[0].childNodes[1].value;
	      		}
	      		if(num == ''){
	      			num = this.$refs.spec[i].$el.children[4].children[0].childNodes[1].value;
	      		}else{
	      			num = num+':'+this.$refs.spec[i].$el.children[4].children[0].childNodes[1].value;
	      		}
	      		if(goods_id == ''){
	      			goods_id = this.goods_id;
	      		}else{
	      			goods_id = goods_id+':'+this.goods_id;
	      		}
	      	}
	      	this.$post(this.ROOT_URL + 'Admin/goods_spec/add',{goods_id:goods_id,name:sku,price:price,num:num}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，规格添加成功！',
		          type: 'success'
		        });
		        _this.$router.go(-1);
	      	});
	      },
	      addAttr:function(){
	      	this.attr.push({});
	      },
	      delAttr:function(k){
	      	console.log(k);
	      	this.attr.splice(k,1);
	      },
	      getMn:function(m,n){
	      	var arr = [];
	      	if(m.length==0){
	      		return n;
	      	}
	      	for(var i=0;i<m.length;i++){
	      		for(var a=0;a<n.length;a++){
	      			arr.push(m[i]+','+n[a]);
	      		}
	      	}
	      	return arr;
	      },
	      getToken:function(){
	      	return localStorage.getItem('token');
	      }
	    },
	    created:function(){
	    	
	    },
	    mounted:function(){
	    	var E = require('wangeditor')  // 使用 npm 安装
	    	E = new E('#editor')
	    	var _this = this;
		    E.customConfig.onchange = function (html) {
            	_this.content = html;
        	}
        	E.customConfig.uploadImgServer = this.ROOT_URL + 'Admin/Auto/content_upload';
        	E.customConfig.uploadFileName = 'file';
        	E.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
		    E.create();

		    var _this = this;
	    	_this.$get(_this.ROOT_URL + "Admin/goods/add").then(function(res){
	    		_this.brand_parent = res.goods_brand;
	    		_this.parent = res.goods_cat;
	    		_this.user_id = res.user_id;
	    	});
		
	    },
	    handleRemove(file, fileList) {
        	console.log(file, fileList);
      	},
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>