<template>
  <div class="footer">
    <van-tabbar v-model="$store.state.active">
      <van-tabbar-item icon="home-o" to="/home">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="5" to="/shoppingcart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/user"  dot>个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data() {
    return {
    
    }
  },
// props: {
    
  // },
}
</script>


<style scoped>

  /* color: #42b983; */
  .footer{
    height:50px;
  }

</style>
