<template>
  <div class="d-flex flex-column align-items-center">
    <StartPage />
    <Landing />
    <PodPlatforms />
    <PricingComponent />
  </div>
</template>

<script>
import StartPage from "./components/StartPage.vue";
import Landing from './components/Landing.vue';
import PodPlatforms from "./components/PodPlatforms.vue";
import PricingComponent from "./components/Pricing.vue";

export default {
  name: 'App',
  components: {
    StartPage,
    Landing,
    PodPlatforms,
    PricingComponent,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

</style>
