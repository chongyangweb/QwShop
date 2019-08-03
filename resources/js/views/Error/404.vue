<template>
  <div class="lose-main" style="background-color:#004f67;height:100%;">
    <div class="lose-box">
      <img src="../../assets/404_images/pic1.png">
      <p>抱歉，没有找到您请求的页面</p>
      <p class="lose-en">Sorry, didn't find the page you requet.</p>
      <a href="/">返回首页</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  computed: {
    message() {
      return 'The webmaster said that you can not enter this page...'
    }
  }
}
</script>
<style scoped>
body { background: #004f67; font-family: 'Arial','Microsoft Yahei'; }  /* 009b8d*/
p { margin: 0; color: #fff; line-height: 30px; text-align: center; font-size: 18px; }
.lose-en { font-size: 14px; }
.lose-main { background: url("../../assets/404_images/lose-bg.png") 0 0 no-repeat; background-size: 100%; min-height: 540px; }
.lose-box { width: 440px; height: 450px; position: absolute; left: 50%; top: 50%; margin: -225px 0 0 -220px; }
.lose-box img { margin-bottom: 50px; }
.lose-box a { width: 218px; height: 50px; display: block; margin: 50px auto 0 auto; border: solid 1px #fff; border-radius: 3px; text-align: center; line-height: 50px; color: #fff; text-decoration: none; transition: all ease-out .4s; }
.lose-box a:hover { background: #fff; color: #004f67; border-color: transparent; }

</style>