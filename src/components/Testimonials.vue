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
        <div class="col-3 testimonials-main-content-column">
          <Card :key="item" v-for="item in data1" img="../../assets/Rectangle69.png" :title="item.title" :content="item.content" :author="item.author"></Card>
        </div>
        <div class="col-3 testimonials-main-content-column">
          <Card :key="item" v-for="item in data2" :img="item.img" :title="item.title" :content="item.content" :author="item.author"></Card>
        </div>
        <div class="col-3 testimonials-main-content-column">
          <Card :key="item" v-for="item in data3" :img="item.img" :title="item.title" :content="item.content" :author="item.author"></Card>
        </div>
      </div>
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
export default {
  name: 'TestimonialsComponent',
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
  margin: 0px;
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
  padding-left: 20%;
  padding-right: 20%;
  z-index: 1;

}
</style>
