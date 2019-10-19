<template>
<div class="shopcart">
  <!-- NavBar 导航栏 -->
    <van-nav-bar
      title="购物车"
      left-arrow
      @click-left="goback"
      fixed
      border
    />

    <!-- SwipeCell 滑动单元格 -->
    <van-swipe-cell :right-width="65" v-for="n in 20" :key="n">
      
      <van-cell-group>
        <van-card
          num="2"
          :tag="'标签' + n"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          :thumb="'https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg'"
        >
          <div slot="footer">
            <van-stepper v-model="value"/>
          </div>
        </van-card>
      </van-cell-group>
     
      <div slot="right">删除</div>
      
    </van-swipe-cell>

    
    <!-- SubmitBar 提交订单栏 -->
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
    />

  </div>
</template>

<script>

  export default {
    data() {
      return {
        value: 1
      };
    },
    methods:{
      goback(){this.$router.go(-1)}
    }

  }

</script>

<style scoped>
.shopcart{padding-top:46px;padding-top:46px;padding-bottom:50px;}
.shopcart >>> .van-swipe-cell__right {
  color: white;
  font-size: 15px;
  width: 65px;
  display: inline-block;
  text-align: center;
  line-height: 100px;
  background-color: red;
}
.van-nav-bar >>> .van-icon{
  color:#399;
}
.van-button--danger{
  background-color: #399;
  border: 1px solid #399;
}
.van-submit-bar__price{
  color: #399;
}
.van-card__price {
  color: #399;
}
.van-nav-bar__title {
    color: #399;
}
</style>