import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import store from './plugins/store'

// 引入公共样式
import './assets/css/base.css'
import './assets/js/font'

import 'animate.css';

//引入路由
// import router from './plugins/router'
//全局过滤器
// import filters from './filters'
// Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));


// //同步本地数据->状态仓库state
// let user = localStorage.getItem('vue_user');
// // console.log(user)
// // console.log(JSON.parse(user))

// user && store.commit('UPDATE_USER',JSON.parse(user))



import {Swipe, SwipeItem,Icon,Row, Col,Search,Tabbar, TabbarItem,NavBar,Image,NoticeBar,Grid, GridItem,
Panel,Sidebar, SidebarItem,Tab, Tabs,Card,Tag,Stepper,SubmitBar,Cell, CellGroup,SwipeCell,
Button,GoodsAction,GoodsActionIcon,GoodsActionButton,Field,Uploader,Loading,Lazyload} from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem).
use(Icon).use(Row).use(Col).use(Search).use(Tabbar).use(TabbarItem).use(NavBar)
.use(Image).use(NoticeBar).use(Grid).use(GridItem).use(Panel)
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Card);
Vue.use(Tag);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(SwipeCell);
Vue.use(Button);
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(Loading);
Vue.use(Lazyload);

import './plugins/axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
