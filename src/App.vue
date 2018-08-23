<template>
  <div id="app">
    <navbar></navbar>
<!-- <component :is="componentName"></component> -->
<router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";


export default {
  name: "app",
  components:{
    navbar
  },
  data() {
    return {
    };
  }
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
