<template>
  <div class="col d-flex pr-4 align-items-center gap-4 brand-border pb-2">
    <img src="../../assets/Brand/Amazon.svg" alt="Brand" title="Brand" class="brand-img" />
    <div class="d-flex flex-column gap-1">
      <h5 class="brand-name">{{ brandName }}</h5>
      <div class="d-flex gap-1 align-items-center">
        <img
          src="../../assets/Brand/brandValueImage.svg"
          alt="Value"
          title="Value"
        />
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
.brand-border {
  border-bottom: 0.742455px solid #989fbf;
}

.brand-img {
  width: 40px;
  height: 40px;
}

.brand-name {
  font-weight: 400;
  font-size: 15px;
  line-height: 120%;
  color: #989fbf;
}

.brand-value {
  font-weight: 600;
  font-size: 15px;
  line-height: 21px;
  color: #191d21;
}
</style>
