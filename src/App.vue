<template>
  <div class="d-flex flex-column align-items-center">
    <StartPage />
    <Landing />
    <PodPlatforms />
    <Pricing />
    <Testimonials />
    <HelpDesk />
    <Footer></Footer>>
  </div>
</template>
<script>
import StartPage from "./components/StartPage.vue";
import Landing from './components/Landing.vue';
import PodPlatforms from "./components/PodPlatforms.vue";
import Pricing from "./components/Pricing.vue";
import Testimonials from "./components/Testimonials.vue";
import HelpDesk from "./components/HelpDesk.vue";
import Footer from "./components/Footer.vue"
// 
export default {
  name: 'App',
  components: {
    StartPage,
    Landing,
    PodPlatforms,
    Pricing,
    Testimonials,
    HelpDesk,
    Footer
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

</style>
