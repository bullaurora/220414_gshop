//入口js
import Vue  from "vue";
import { Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from "./App.vue"
import router from "./router"
import store from "./store"

import './mock/mockServer' //加载mockServer
import loading from './common/imgs/loading.gif'
import './filters'
//全局注册组件标签
Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
    loading
  })

Vue.config.productionTip = false;

new Vue({
    el:'#app', 
    render:h=>h(App),
    router,
    store
})