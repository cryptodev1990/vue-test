<template>
  <div class="col d-flex align-items-center gap-3 brand-border pb-1 mx-4">
    <img :src="brandUrl" alt="Brand" title="Brand" class="brand-img" />
    <div>
      <h5 class="brand-name">{{ brandName }}</h5>
      <div class="d-flex gap-1">
        <img src="Brand/brandValueImage.svg" alt="Value" title="Value" />
        <h6 class="brand-value">{{ value }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandComponent',
  props: {
    brandUrl: String,
    brandName: String,
    value: String,
  },
}
</script>

<style>
@import url("./Landing.scss");
</style>
