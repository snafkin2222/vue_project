<template>
  <div id="app">
    <myheader></myheader>
    <router-view />
  </div>
</template>

<script>
import myheader from "./components/myheader";
export default {
  components: {
    myheader,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(52, 58, 64);
}
</style>