<template>
  <div class="hello">
    <van-nav-bar title="主页" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:"主页"
    }
  },
  props: {
    
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
      
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
