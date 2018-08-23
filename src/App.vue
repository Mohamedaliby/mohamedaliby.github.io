<template>
  <div id="app">
    <navbar></navbar>
<h1>Mohamed</h1>
<router-view></router-view>
<icon name="github"></icon>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
