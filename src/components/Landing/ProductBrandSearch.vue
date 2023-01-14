<template>
  <div class="d-flex gap-5 align-items-center py-5 product-brand-search">
    <div class="d-flex flex-column gap-3 text-start">
      <div class="d-flex gap-2">
        <h1 class="product-brand-gradient">Product & Brand</h1>
        <h1 class="search">Search</h1>
      </div>
      <p>
        Product search alows you to quickly search Amazon and pull
        <br />
        relevant real-time product data and information for any keyword
        <br />
        you enter. You can also search brands and quickly find their top
        <br />
        selling products.
      </p>
    </div>
    <img
      src="../../assets/Merchtitans.png"
      alt="Merch Titans"
      title="Merch Title"
      class="product-dashboard-image"
    />
  </div>
</template>

<script>
export default {
  name: 'ProductBrandSearch',
}
</script>

<style>

.product-brand-gradient {
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  letter-spacing: 0.02em;
  background: linear-gradient(91.65deg, #f4b913 3.02%, #8df53a 69.31%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  backdrop-filter: blur(10px);
}

.product-dashboard-image {
  width: 600px;
}

.product-brand-search {
  position: absolute;
  left: 24%;
  top: 4220px;
  z-index: 1;
}

.search {
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #ffffff;
  backdrop-filter: blur(10px);
}

p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #c3bed7;
}
</style>
