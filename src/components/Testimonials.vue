<template>
  <div
    class="d-flex flex-column testimonials-background justify-content-between"
  >
    <div class="rectangle-gradient-top"></div>
    <div class="d-flex justify-content-start gap-1">
      <h1 class="testimonials-text">Testimonials</h1>
    </div>
    <Carousel :wrap-around="true" :breakpoints="breakpoints" :autoplay="2000">
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.content }}</p>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

const breakpoints = {
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'center',
  }
}

const slides = [
  { id: '1', title: 'Vue 3 Introduction', content: 'VueJS is a library' },
  { id: '2', title: 'Vue 3 Components', content: 'Know the components' },
  { id: '3', title: 'Vue 3 Conditional', content: 'Rendering Conditionally' },
  { id: '4', title: 'Vue 3 Reactivity', content: 'VueJS is Reactive' },
  {
    id: '5',
    title: 'Vue 3 Compute',
    content: 'VueJS uses computed properties',
  },
]

export default {
  name: 'TestimonialsComponent',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slides: slides,
      breakpoints: breakpoints
    }
  },
}
</script>

<style>
.testimonials-background {
  background-image: url('../assets/TestimonialsBackground.png');
  background-repeat: no-repeat;
  width: 100%;
  height: 1313px;
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
  transform: rotate(-90deg);
}

.rectangle-gradient-top {
  background: linear-gradient(180deg, rgba(4, 0, 24, 0) 0%, #040018 100%);
  transform: rotate(180deg);
  width: 100%;
  height: 214px;
  z-index: 3;
}

.rectangle-gradient-bottom {
  background: linear-gradient(180deg, rgba(4, 0, 24, 0) 0%, #040018 100%);
  width: 100%;
  height: 214px;
  z-index: 3;
}

.testimonials-main-content {
  padding-left: 215px;
  z-index: 1;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
