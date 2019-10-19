  <template>
  <div class="home">
    <Search></Search>
    <Slider></Slider>
    <Gird></Gird>
    <Items></Items>
    <NewArrivals></NewArrivals>
  </div>
</template>

<script>

import Search from '../components/Search.vue'
import Slider from '../components/Slider.vue'
import Items from '../components/Items.vue'
import Gird from '../components/Gird.vue'
import NewArrivals from '../components/NewArrivals.vue'

export default {
  name: 'home',
  components: {
    Search,Slider,Items,Gird,NewArrivals
  }
}
</script>
