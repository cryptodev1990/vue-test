<template>
  <div class="d-flex flex-column align-items-center">
    <StartPage />
    <Landing />
  </div>
</template>

<script>
import StartPage from "./components/StartPage.vue";
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: {
    StartPage,
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
