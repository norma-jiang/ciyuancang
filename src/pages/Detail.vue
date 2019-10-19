<template>
  <div class="detail">
      <!-- <van-nav-bar
      left-arrow
      @click-left="goback"
      fixed
    /> -->
    <van-nav-bar left-arrow size=".5rem" @click-left="goback">
    <van-icon size=".4rem" name="share" slot="right" @click-right="goback"/>
    </van-nav-bar>
      <van-image
        fit="contain"
        lazy-load
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        />

    <van-cell-group>
        <van-cell title="商品名称" value="内容" />
        <van-cell title="单价格" value="内容" label="描述信息" />
        <van-cell title="地址" value="内容" label="描述信息" />
    </van-cell-group>



    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
        <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
    
  </div>
</template>


<script>

export default {
    data() {
    return {
      show: true,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    }
    },
   


  
  methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
    goback(){this.$router.go(-1)}
  }
}

</script>