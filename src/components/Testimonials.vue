<template>
  <div
    class="d-flex flex-column testimonials-background justify-content-between"
  >
    <div class="rectangle-gradient-top"></div>
    <div class="d-flex justify-content-center">
      <div class="row testimonials-main-content">
        <div class="col-3">
          <div class="testimonials-text">Testimonials</div>
        </div>
        <div class="col-3 card-animation-1">
          <Card
            :key="item"
            v-for="item in firstdata"
            :img="item.image"
            :title="item.title"
            :content="item.content"
            :author="item.author"
          ></Card>
        </div>
        <div class="col-3 card-animation-2">
          <Card
            :key="item"
            v-for="item in seconddata"
            :img="item.image"
            :title="item.title"
            :content="item.content"
            :author="item.author"
          ></Card>
        </div>
        <div class="col-3 card-animation-3">
          <Card
            :key="item"
            v-for="item in thirddata"
            :img="item.image"
            :title="item.title"
            :content="item.content"
            :author="item.author"
          ></Card>
        </div>
      </div>
    </div>
    <div class="rectangle-gradient-bottom"></div>
  </div>
</template>

<script>
import Card from './Testimonials/Card.vue'
import { firstframe, secondframe, thirdframe } from './Testimonials/data'
export default {
  name: 'TestimonialsComponent',
  components: {
    Card,
  },
  data() {
    return {
      firstdata: firstframe,
      seconddata: secondframe,
      thirddata: thirdframe,
    }
  },
}
</script>

<style>
@import url("../app.scss");
</style>
