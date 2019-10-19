<template>
  <div class="newarrivals">
    <div class="newarrivals-title">
      <h3>新品推荐</h3>
      <p>换一批</p>
    </div>
    <van-grid :border="false" :column-num="3">
      <!-- <van-grid-item>
        <van-image src="http://f.p.cycangcdn.com/1565167837109.jpg" />
        <h5>【风树息-画影】冰激凌 雪纺外套</h5>
        <p style="color:red">$99</p>
      </van-grid-item> -->
      <van-grid-item v-for="(value,index) in goods" :key="index" to="/detail">
        <van-image :src="value.url"  />
        <h5 style="font:300 12px/14px  ''">{{value.name}}</h5>
        <p style="color:red">${{value.price}}</p>
      </van-grid-item>
     
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'newarrivals',
  data(){
    return{
     goods:[]
    }
  },
  mounted(){
    this.$axios({
      url: "/data/goods.json"
    }).then(res => {
        this.goods=res.data;
        // console.log(res.data);
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .gird{
  height:10rem; 
} */
.newarrivals-title{
  display:flex;
  justify-content: space-between;
  padding:0 10px;
}


</style>
