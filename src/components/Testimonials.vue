<template>
  <div
    class="d-flex flex-column testimonials-background justify-content-between"
  >
    <div class="rectangle-gradient-top"></div>
    <div class="d-flex justify-content-start gap-1">
      <h1 class="testimonials-text">Testimonials</h1>
    </div>
    <div class="rectangle-gradient-bottom"></div>
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
</style>
