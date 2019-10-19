<template>
  <div class="slider" >
    <van-swipe :autoplay="3000" >
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <!-- <img :src="image.url" style="height:200px;width:auto" /> -->
            <van-image
            
            height="3rem"
            fit="fill"
            :src="image.url"
            style="display:block"
            />
   
        <!-- <van-swipe-item v-for="item in images" :key="item.id">
            <img :src="item.url" /> -->
        </van-swipe-item>
        <!-- <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item> -->
    </van-swipe>
    
  </div>
</template>
<script>

export default {
    
    data(){
        return{
            images: [
                {url:require('../assets/images/1.jpg'),id:1},
                {url:require('../assets/images/2.jpg'),id:2},
                {url:require('../assets/images/3.jpg'),id:3},
                {url:require('../assets/images/4.jpg'),id:4},
                {url:require('../assets/images/5.jpg'),id:5},
                {url:require('../assets/images/6.jpg'),id:6}
            ]
        }
    },
    methods:{
        
    }
}

</script>
<style>
.slider{
    /* margin-top:54px; */
    background:#9ff
}
</style>
