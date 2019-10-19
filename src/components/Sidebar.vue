<template>
  <div class="sidebar">
     <van-row type="flex" align="center">
       <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="装扮仓" />
          <van-sidebar-item title="古风仓" />
          <van-sidebar-item title="汉风仓" />
          <van-sidebar-item title="首饰仓" />
          <van-sidebar-item title="零食仓" />
          <van-sidebar-item title="服饰仓" />
          <van-sidebar-item title="周边仓" />
          <van-sidebar-item title="手办仓" />
         
        </van-sidebar>
      </van-col>
      <van-col span="18">wqewq</van-col>
    </van-row>
    
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeKey:0,
      active:0,
    }
  },
  props: {
    
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* a {
  color: #42b983;
} */
</style>
