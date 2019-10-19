<template>
  <div id="app">
    <router-view/>
    <Loading v-if="bLoading"></Loading>
    <Footer v-show="bFoot"></Footer>
  </div>
</template>

<script>
import Footer from "./components/Footer"
import Loading from "./components/Loading"
import { mapGetters } from 'vuex'

export default {
  data(){
    return {
      active:1
    }
  },
  components:{
    Footer,Loading
  },
  computed:mapGetters(['bFoot','bLoading']),

  watch:{
    $route:{
      handler:function(route){
        let path = route.path;
        this.checkPath(path);
      },
      immediate:true
    }
  },

  methods:{
    checkPath(path){
      if(/home|classify/.test(path)){
        this.$store.dispatch('UPDATE_NAV',true);
        this.$store.dispatch('UPDATE_FOOT',true);
        (/home/.test(path)) && this.$store.commit('UPDATE_ACTIVE',0);
        (/classify/.test(path)) && this.$store.commit('UPDATE_ACTIVE',1);
      }
      if(/shoppingcart|login|reg|detail/.test(path)){
        this.$store.dispatch('UPDATE_NAV',false)
        this.$store.dispatch('UPDATE_FOOT',true)
        this.$store.commit('UPDATE_ACTIVE',2)
      }
      if(/user/.test(path)){
        this.$store.dispatch('UPDATE_NAV',false)
        this.$store.dispatch('UPDATE_FOOT',true)
        this.$store.commit('UPDATE_ACTIVE',3)
      }
    }
  },
}


</script>

<style>

</style>
