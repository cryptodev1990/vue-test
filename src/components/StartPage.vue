<template>
  <div class="startpage d-flex flex-column">
    <Navbar />
    <Text />
    <Ellipse />
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
.startpage {
  background-image: url('../assets/t-shirt.png');
  background-repeat: no-repeat;
  margin-bottom: 200px;
  width: 100%;
}
</style>
