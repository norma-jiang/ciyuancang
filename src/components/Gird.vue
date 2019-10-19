<template>
  <div class="gird">
    <van-grid :border="false">
      <van-grid-item
        v-for="(value,index) of girdarr"
        :key="index"
        :icon="value.url"
        :text="value.text"
        style="padding-bottom:0px"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'gird',
  data(){
    return{
        girdarr:[
        {url:"http://b.cycangcdn.com/1490684231723.png",text:"装扮仓"},
        {url:"http://b.cycangcdn.com/1480325641299.png",text:"古风仓"},
        {url:"http://b.cycangcdn.com/1490690388483.png",text:"汉风仓"},
        {url:"http://b.cycangcdn.com/1480325586541.png",text:"首饰仓"},
        {url:"http://b.cycangcdn.com/1480325612323.png",text:"零食仓"},
        {url:"http://b.cycangcdn.com/1480325816038.png",text:"服饰仓"},
        {url:"http://b.cycangcdn.com/1480325548444.png",text:"周边仓"},
        {url:"http://b.cycangcdn.com/1480325578896.png",text:"手办仓"},
      ]
    }
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .gird{
  height:10rem; 
} */
</style>
