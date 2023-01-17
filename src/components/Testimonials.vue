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
@keyframes anim-demo-1 {
  0%   {margin-top: 0px;}
  50%  {margin-top:  -500px}
  100% {margin-top: 0px}
}

@keyframes anim-demo-2 {
  0%   {margin-top: 0px;}
  50%  {margin-top:  -1000px}
  100% {margin-top: 0px}
}

@keyframes anim-demo-3 {
  0%   {margin-top: 0px;}
  50%  {margin-top:  -200px}
  100% {margin-top: 0px}
}

.card-animation-1 {
  animation-name: anim-demo-1;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.card-animation-1:hover {
  animation-play-state: paused;
}

.card-animation-2 {
  animation-name: anim-demo-2;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.card-animation-2:hover {
  animation-play-state: paused;
}

.card-animation-3 {
  animation-name: anim-demo-3;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

.card-animation-3:hover {
  animation-play-state: paused;
}

.testimonials-background {
  background-image: url('../assets/TestimonialsBackground.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 1313px;
  overflow: hidden;
}

.testimonials-text {
  font-weight: 800;
  font-size: 187.859px;
  line-height: 120%;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  background: linear-gradient(91.48deg, #f4b913 3.01%, #8df53a 96.12%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
}

.rectangle-gradient-top {
  position: absolute;
  background: linear-gradient(180deg, rgba(4, 0, 24, 0) 0%, #040018 100%);
  transform: rotate(180deg);
  width: 100%;
  height: 214px;
  z-index: 3;
}

.rectangle-gradient-bottom {
  position: absolute;
  margin-top: 1101px;
  background: linear-gradient(180deg, rgba(4, 0, 24, 0) 0%, #040018 100%);
  width: 100%;
  height: 214px;
  z-index: 3;
}

.testimonials-main-content {
  padding-left: 20%;
  padding-right: 20%;
  z-index: 1;
}
</style>
