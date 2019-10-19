<template>
  <div class="search" >
    <van-row type="flex" justify="space-between" align="center">
        <van-col span="21" >
            <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
                background="#f99"
                >
                <div slot="action" @click="onSearch">搜索</div>
            </van-search>
        </van-col>
        <van-col span="3"><van-icon name="scan" size="30px" @click="onScan" /></van-col>
    </van-row>
  </div>
</template>
<script>
export default {
    data(){
        return{
            value:null
        }
    },
    methods:{
        onSearch(){
            alert('not have time to do sousuo');
        },
        onScan(){
            alert('not have time to do erweima');
        }
    }
}

</script>
<style>
.search{
    background-color:#f99;
    height:.8rem;
}
</style>
