<template>
  <div class="startpage d-flex flex-column">
    <Navbar />
    <Text />
    <Ellipse />
    <img src="../assets/t-shirt.png" alt="StartPage" class="startbackground" title="Start Page" />
  </div>
</template>

<script>
import Navbar from './StartPage/Navbar.vue'
import Text from './StartPage/Text.vue'
import Ellipse from './StartPage/Ellipse.vue'
export default {
  name: 'StartPage',
  components: {
    Navbar,
    Text,
    Ellipse,
  },
}
</script>

<style>
@import url("../app.scss");
</style>
