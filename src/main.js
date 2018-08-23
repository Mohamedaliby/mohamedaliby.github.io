import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {store} from './store/store' 
import 'vue-awesome/icons/brands/github'

Vue.use(VueRouter);

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon.vue'

// globally (in your main .js file)
Vue.component('icon', Icon)


const routes =[
  {
    path:'/',
  } ,
];

const router = new VueRouter({
  routes
})
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
