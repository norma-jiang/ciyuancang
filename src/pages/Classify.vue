<template>
  <div class="classify">
    <Search></Search>
    <Sidebar></Sidebar>
  </div>
</template>


<script>
import Sidebar from "../components/Sidebar.vue"
import Search from "../components/Search.vue"
export default {


  components:{
    Sidebar,Search
  }
}

</script>