<template>
  <div class="login">
    <van-nav-bar left-arrow @click-left="goback" fixed :border="false"/>

    <van-cell-group :border="false">
      <van-field v-model="username" placeholder="请输入用户名" label="用户名" left-icon="contact"/>
      <van-field type="password" v-model="password" placeholder="请输入密码" label="密码" left-icon="eye-o"/>
      
    </van-cell-group>
    
    <van-button size="large" round>登录</van-button>
    

  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.login {
  padding-top: 15em;
  padding-left: 30px;
  padding-right: 30px;
}
.van-button--default {
  color: #fff;
  background-color: #f99;
  margin-top: 20px;
}
.van-nav-bar--fixed {
  background: none;
}

/* 不加soped*/
.van-nav-bar.van-icon {
  color: #F99;
  vertical-align: middle;
}

/*加了scoped  css*/
/* .van-nav-bar >>> .van-icon {
  color: #399;
  vertical-align: middle;
} */

/*加了scoped scss */
/* .van-nav-bar{
  /deep/ .van-icon {
    color: #399;
    vertical-align: middle;
  }
}
 */
 .van-cell {
    line-height: 24px;
    background-color: #f2f4f5;
    border:none;
    border-bottom:.5px solid #399
}

</style>
