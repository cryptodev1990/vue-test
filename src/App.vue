<template>
  <div class="d-flex flex-column">
    <img src="./assets/t-shirt.png" class="w-100" />
    <Navbar />
    <Text />
    <Ellipse />
    <Landing />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Text from './components/Text.vue'
import Ellipse from './components/Ellipse.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Text,
    Ellipse,
    Landing,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

#app {
  /* font-family: 'Poppins'; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

</style>
