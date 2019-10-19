<template>
  <div class="items">
    <van-row type="flex" justify="space-between" align="center">
      <van-col span="6" size="1">热门主题</van-col>
      <van-col span="18">
        <van-swipe
          style="height:38px;background-color:#999;border:0;padding:0"
          :show-indicators="false"
          :autoplay="1000"
          vertical
        >
          <van-swipe-item v-for="(item,index) in itemInfo" :key="index">
            <van-notice-bar left-icon="volume-o" :scrollable="false">{{item.name}}</van-notice-bar>
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "items",
  props: {},
  data() {
    return {
      itemInfo: [
        { name: "Cosplay" },
        { name: "Lolita" },
        { name: "JK制服" },
        { name: "水手服" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.items {
  height: 40px;
  /* overflow:hidden; */
}
</style>
