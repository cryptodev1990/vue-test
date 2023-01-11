<template>
  <Navbar msg="asdfasfd"/>
  <div class="block1">
    <div class="back-img">
    <img src="./assets/t-shirt.png">
    <img src="./assets/Nois.png" class="nois-img" />
  </div>  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.back-img img{
  width: 100%;
}
</style>
