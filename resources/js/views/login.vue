<template>

  <div class="login_bg">

        <div class="login_black_hg">
            <h3 class="head_log"><img src="../assets/head-logo.png" alt=""></h3>

                <div class="form-group">
		<el-input size="small" v-model="username" @keyup.enter.native="login" placeholder="用户名"></el-input>
                </div>
                <div class="form-group">
                <el-input type="password" size="small" v-model="password" @keyup.enter.native="login" class="login_input" placeholder="密码"></el-input>
                </div>
		<div class="form-group" style="font-size:12px;">
                    <el-checkbox name="isCheck" v-model="isCheck" label="1"><font style="font-size:13px;">我已同意</font></el-checkbox>
			&nbsp;&nbsp;&nbsp;&nbsp;<a class="must_rad" href="/index.php/Admin/Test/mustRead">《系统用户使用协议》</a>（必读）
                </div>
                 <el-button size="mini" class="login_btn" @click="login" type="primary">登 录</el-button>

        </div>

  </div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username:'',
      password:'',
      isCheck:true,
    }
  },
  methods:{
	// 登录
  	login:function(){
      // 重新赋值vm使 axios可用vue实例
      var vm = this;
      if(!this.isCheck){
        this.$message.error('请先认真阅读本站协议！');
        return;
      }

      if(this.username == '' || this.password == ''){
        this.$message.error('用户名和密码不能为空！');
        return;
      }

      this.$post(this.ROOT_URL + 'Admin/login',{username:this.username,password:this.password})
      .then(function (res) {
        if(res.code == 200){
          console.log(res);
          // 存储用户的token
          localStorage.setItem('token',res.token);
          vm.$message({message:'登录成功！',type:'success'});
          vm.$router.push({name:'default'});
        }
      });
  	}
  },
  created:function(){
    var vm = this;
    // 判断token是否失效
    this.$post(this.ROOT_URL + 'Admin/checkUser')
      .then(function (res) {
        if(res.code == 200){
          vm.$router.push({name:'default'});
        }
      });
  }
	
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.login_bg{
background:url('../assets/login_bg.svg');background-position: center;background-size: 100%;height:100%;background-color:#f1f1f1
;}
.login_black_hg{background:#fff;width:400px;border-radius:6px;padding:0px 40px 20px 40px;box-sizing:border-box;
-moz-box-sizing:border-box; /* Firefox */
-webkit-box-sizing:border-box; /* Safari */
position:absolute;
top:50%;
left:50%;
margin-left:-200px;margin-top:-200px;
}
.login_input{margin:20px 0 20px 0 ;}
.head_log{margin-left:47px;margin-top:-46px;}
.login_btn{margin-top:20px;width:100%;font-size:14px;}
.must_rad{font-size:12px;}
</style>

