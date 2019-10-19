<template>
  <div class="user">
    <!-- flex布局 van-tag标记-->
    <van-row class="header" type="flex" align="center">
      <van-col span="24">
        <van-row type="flex">
          <van-col span="4" class="cols">
            <van-icon name="friends-o" size="40px" style="margin-left:10px"/>
          </van-col>
          <van-col span="15" class="cols">
            <h3>昵称</h3>
            <van-tag round color="#fff" text-color="#399">上次登录日期</van-tag>
          </van-col>
          <van-col span="5" class="cols">
            <van-icon name="setting-o" size="20px"/>
            <van-icon name="coupon-o" size="20px" style="float:right"/>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around">
          <van-col span="6" class="cols">
            <span class="category-num">13</span>
            <span class="category-txt">收藏夹</span>
          </van-col>
          <van-col span="6" class="cols">
            <span class="category-num">23</span>
            <span class="category-txt">关注店铺</span>
          </van-col>
          <van-col span="6" class="cols">
            <span class="category-num">1</span>
            <span class="category-txt">足迹</span>
          </van-col>
          <van-col span="6" class="cols">
            <span class="category-num">1</span>
            <span class="category-txt">红包</span>
          </van-col>
        </van-row>
      </van-col>
    </van-row>

    <!-- Panel 面板order flex布局 -->
    <van-panel class="order" title="我的订单" status="查看全部订单">
      <van-row type="flex" justify="space-around">
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">代付款</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">代发货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">待收货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">评价</span>
        </van-col>
      </van-row>
    </van-panel>

    <!-- Panel 面板order 栅格布局 -->
    <van-panel class="order" title="必备工具" status="查看全部工具">
      <van-row>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">代付款</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399" info="2"/>
          <span class="category-txt">代发货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">待收货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">评价</span>
        </van-col><van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">代付款</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">代发货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">待收货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="hot-o" size="25px" color="#399"/>
          <span class="category-txt">评价</span>
        </van-col>
      </van-row>
    </van-panel>

    <!-- cell-group 单元格组 -->
    <van-cell-group title="分组1">
      <van-cell icon="shop-o" title="单元格" value="内容" is-link to="/detail"></van-cell>
      <van-cell icon="shop-o" title="单元格" value="内容" is-link to="/detail"></van-cell>
      <van-cell icon="shop-o" title="单元格" value="内容" is-link to="/detail"></van-cell>
      <van-cell icon="shop-o" title="单元格" value="内容" is-link to="/detail"></van-cell>
    </van-cell-group>
    
    <van-cell-group title="分组2">
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" />
    </van-cell-group>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
.user{padding-bottom:50px;}
.user .header {
  height: 150px;
  background: #f99;
  color: #fff;
}
.van-panel__header-value{
  color:#888;
  font-size:.8em;
}
.van-cell__value {
  font-size:.8em;
}
.user .header .cols {
  padding: 10px;
}
.user .order{margin: 10px 0;}
.user .order .cols{
  
  padding: 10px;
  text-align: center;
}
.category-num {
  display: block;
  margin-bottom: 5px;
  text-align: center;
}
.category-txt {
  display: block;
  margin-bottom: 5px;
  text-align: center;
}
</style>
