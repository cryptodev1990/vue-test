<template>
  <div
    class="col d-flex flex-column align-items-start text-start py-4 px-3 gap-2 brand-background zoom"
    :style="valueImage"
    role="button"
  >
    <img :src="brandImageUrl" alt="BrandImage" title="Brand" />
    <h3 class="brand-title">{{ brandTitle }}</h3>
    <h6 class="brand-explaination">{{ brandExplaination }}</h6>
  </div>
</template>

<script>
export default {
  name: 'PodBrand',
  props: {
    backgroundUrl: String,
    brandImageUrl: String,
    brandTitle: String,
    brandExplaination: String,
  },
  computed: {
    valueImage() {
      return {
        backgroundImage: `url(${this.backgroundUrl})`,
      }
    },
  },
}
</script>

<style>
.brand-background {
  background-repeat: no-repeat;
  height: 380px;
}

.brand-title {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  white-space: nowrap;
}
.brand-explaination {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #c3bed7;
}
</style>
