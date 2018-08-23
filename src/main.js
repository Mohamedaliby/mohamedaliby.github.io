import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {store} from './store/store' 

Vue.use(VueRouter);

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
