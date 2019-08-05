<template>
	<div class="index_main">
		<div class="main_btn_left">
			<el-button class="main_del_right" icon="el-icon-back" @click="$router.go(-1)">返回</el-button>
			<div class="index_main_title">店铺信息编辑</div>
		</div>
		<div class="unline"></div>

		<!-- 内容 -->
		<div class="main_content">

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">店铺名</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="title" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">Logo</div></el-col>
				<el-col :span="10">
					<el-upload
					  class="avatar-uploader"
					  :action="ROOT_URL + 'Admin/goods_shop/avatar?token=' + getToken()"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  >
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">门店图片</div></el-col>
				<el-col :span="10">
					<el-upload
					  class="upload-demo"
					  :action="ROOT_URL + 'Admin/goods_shop/shop_thumb?token=' + getToken()"
					  :file-list="fileList2"
					  :on-success="onSuccess"
					  :on-remove = "onRemove"
					  :limit="3"
					  :multiple="true"
					  list-type="picture">
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
					</el-upload>
				</el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">百度地图</div></el-col>
				<el-col :span="16"><div style="width:100%;height:300px;" id="allmap"></div></el-col>
				<el-col :span="5"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">地址</div></el-col>
				<el-col :span="10"><el-input size="small" :value="province+'/'+city+'/'+region" disabled></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">详细地址</div></el-col>
				<el-col :span="10"><el-input size="small" v-model="address" placeholder="请输入内容"></el-input></el-col>
				<el-col :span="11"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3"><div class="input_lable">描述店铺</div></el-col>
				<el-col :span="18">
				<el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入内容"
				  v-model="content">
				</el-input></el-col>
				<el-col :span="13"><div class="input_notice"></div></el-col>
			</el-row>
			<div class="unline2"></div>

			<el-row :gutter="20">
				<el-col :span="3">&nbsp;</el-col>
				<el-col :span="4"><el-button type="primary" @click="submit" :disabled="allow_btn">提 交</el-button></el-col>
				<el-col :span="17"><div class="input_notice"></div></el-col>
			</el-row>
			
		</div>
		
	</div>
</template>

<script>
	export default {
	    data() {
	      return {
	      	content:'',
	      	fileList2: [],
	      	imageUrl:'',
	      	imageUrls:[],
	      	title:'',
	      	lat:'',
	      	lng:'',
	      	province:'',
	      	city:'',
	      	region:'',
	      	address:'',
	      	allow_btn:true,
	      };
	    },
	    methods: {
	      submit:function(){
	      	var _this = this;
	      	this.$post(this.ROOT_URL + 'Admin/goods_shop/edit' ,{content:this.content,title:this.title,logo:this.imageUrl,images:this.imageUrls,lat:this.lat,lng:this.lng,province:this.province,city:this.city,region:this.region,address:this.address}).then(function(res){
	      		_this.$message({
		          message: '恭喜你，修改成功！',
		          type: 'success'
		        });
		        _this.$router.go(0);
	      	});
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      onSuccess:function(e){
	      	console.log(e);
	      	this.imageUrls.push(e.thumb_path);
	      	// console.log(e);
	      	// console.log(this.imageUrl);
	      },
	      handleAvatarSuccess:function(e){
	      	this.imageUrl = e.thumb_path;
	      },
	      onRemove:function(e){
	      	console.log(e.response);
	      	if(e.response == undefined){
	      		this.imageUrls.splice(this.imageUrls.indexOf(e.url),1);
	      	}else{
	      		this.imageUrls.splice(this.imageUrls.indexOf(e.response.thumb_path),1);
	      	}
	      	
	      },
	      baidu_map:function(shop_info){
	      	var _this = this;
	      	// 百度地图API功能
	      	var allow = true;

	      	// 判断你是否定位
	      	if(shop_info.lat == ''){
	      		allow = false;
	      	}

			var map = new BMap.Map("allmap");
			if(allow){
				var point = new BMap.Point(shop_info.lng,shop_info.lat);
			}else{
				var point = new BMap.Point(116.331398,39.897445);
			}
			
			map.centerAndZoom(point,12);
			var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});// 左上角，添加比例尺
			var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
			var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
			map.addControl(top_left_control);        
			map.addControl(top_left_navigation);     
			map.addControl(top_right_navigation);  

			var geoc = new BMap.Geocoder();


			if(!allow){
				var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r){
					if(this.getStatus() == BMAP_STATUS_SUCCESS){
						// 允许提交 地址定位好后
						_this.allow_btn = false;
						var mk = new BMap.Marker(r.point);
						map.addOverlay(mk);
						map.panTo(r.point);
						point = new BMap.Point(r.point.lng,r.point.lat);
						// alert('您的位置：'+r.point.lng+','+r.point.lat);
						geoc.getLocation(point, function(rs){
						var addComp = rs.addressComponents;
						_this.lat = r.point.lat;
						_this.lng = r.point.lng;
						_this.province = addComp.province;
						_this.city = addComp.city;
						_this.region = addComp.district;
							// alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
						});   
					}
					else {
						alert('failed'+this.getStatus());
					}        
				},{enableHighAccuracy: true});
			}else{
				_this.allow_btn = false;
				var mk = new BMap.Marker(point);
				map.addOverlay(mk);
				map.panTo(point);
			}
			
			map.addEventListener("click", function(e){
				map.clearOverlays();
				var point = new BMap.Point(e.point.lng, e.point.lat);
				var marker = new BMap.Marker(point);  // 创建标注
				map.addOverlay(marker);               // 将标注添加到地图中
				geoc.getLocation(point, function(rs){
				var addComp = rs.addressComponents;
				_this.lat = e.point.lat;
				_this.lng = e.point.lng;
				_this.province = addComp.province;
				_this.city = addComp.city;
				_this.region = addComp.district;
					// alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
				}); 
			});

	      },
	      getToken:function(){
	      	return localStorage.getItem('token');
	      }
	    },
	    created:function(){
	    	
	    },
	    mounted:function(){
	    	var _this = this;

	    	this.$get(this.ROOT_URL + "Admin/goods_shop/edit").then(function(res){
	    		_this.content = res.info.content;
	    		_this.title = res.info.title;
	    		_this.lat = res.info.lat;
	    		_this.lng = res.info.lng;
	    		_this.province = res.info.province;
	    		_this.city = res.info.city;
	    		_this.region = res.info.region;
	    		_this.address = res.info.address;
	    		_this.imageUrl = res.info.logo;
	    		if(res.info.images != ''){
	    			_this.imageUrls = res.info.images.split(',');
	    		}else{
	    			_this.imageUrls = [];
	    		}
	    		if(_this.imageUrls.length>0){
	    			for(var i=0;i<_this.imageUrls.length;i++){
		    			_this.fileList2.push({name:'',url:_this.imageUrls[i]});
		    		}
	    		}
	    		_this.baidu_map(res.info);
	    	});

	    	
		
	    },
	  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
  }
    .avatar-uploader .el-upload i{padding-top: 50px;}
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 90px;
    line-height: 178px;
    text-align: center;
  }

</style>