<template>
  <div
    class="d-flex flex-column p-4 justify-content-center bg-white gap-2 zoom"
  >
    <div class="d-flex gap-1 align-items-center justify-content-center">
      <h2 class="dollar">$</h2>
      <h1 class="price-number">{{ price }}</h1>
      <h4 class="price-float">99</h4>
    </div>
    <h4 :class="serviceClass">{{ service }}</h4>
    <h3 class="title-text pb-4 text-center">{{ title }}</h3>
    <div class="d-flex flex-column">
      <div v-for="(item, index) in content" :key="index">
        <div class="d-flex gap-2 align-items-center mt-2">
          <img src="../../assets/checkicon.png" alt="Check" title="check" />
          <h4 class="content-text text-start">{{ item.text }}</h4>
        </div>
      </div>
    </div>
    <button
      class="d-flex py-3 rounded-4 learn-button justify-content-center mt-4"
    >
      LEARN MORE
    </button>
  </div>
</template>

<script>
export default {
  name: 'PriceLabel',
  props: {
    service: String,
    price: String,
    title: String,
    content: Array,
  },
  data() {
    return {
      serviceClass:
        this.service == '' ? 'mb-5' : 'mb-3 service-text text-center',
    }
  },
}
</script>

<style>
.dollar {
  font-weight: 250;
  font-size: 34.2023px;
  line-height: 48px;
  color: #111827;
}

.title-text {
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #111827;
  border-bottom: 1.07349px solid rgba(126, 117, 165, 0.25);
}

.content-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7e75a5;
}

.price-number {
  font-weight: 700;
  font-size: 53.2035px;
  line-height: 48px;
  color: #111827;
}

.price-float {
  font-weight: 700;
  font-size: 20.9014px;
  line-height: 48px;
  color: #111827;
}

.service-method {
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #111827;
}

.learn-button {
  background: #f4b913;
  font-weight: 700;
  font-size: 20px;
  line-height: 120%;
  letter-spacing: 0.05em;
  color: #111827;
}

.service-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: #7e75a5;
}

.zoom {
  transition: transform 0.2s;
  filter: brightness(95%);
}

.zoom:hover {
  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2);
  border-radius: 20px;
  filter: brightness(100%);
  z-index: 2;
}
</style>
