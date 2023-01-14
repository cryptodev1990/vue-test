<template>
  <div
    class="d-flex align-items-center product-brand-search justify-content-between"
  >
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
    <div>
      <img
        src="../../assets/Merchtitans-small.png"
        alt="Merch Titans"
        title="Merch Title"
      />
      <div class="p-2 statistics-small d-flex flex-column align-items-start">
        <h3 class="statistics-text-small">Statistics</h3>
        <div class="container d-flex flex-column gap-2">
          <div class="row gap-1">
            <StatisticsDetail
              title="Results"
              value="36"
              color="#04CB00"
              :small="true"
            />
            <StatisticsDetail
              title="Total Results"
              value="10000+"
              color="#B43AFF"
              :small="true"
            />
            <StatisticsDetail
              title="Average BSR"
              value="1,724,675"
              color="#FF3AD4"
              :small="true"
            />
            <StatisticsDetail
              title="Top E.M.S"
              value="73"
              color="#FF3A52"
              :small="true"
            />
          </div>
          <div class="row gap-1">
            <div class="col d-flex flex-column align-items-center cell p-3">
              <h5 class="statistics-category-small">Category</h5>
              <h5 class="statistics-t-shirt-small">Merch by Amazon T-shirt</h5>
            </div>
            <StatisticsDetail
              title="Minimum Price"
              value="$13.07"
              color="#04CBD8"
              :small="true"
            />
            <StatisticsDetail
              title="Maximum Price"
              value="$28.29"
              color="#FF3A52"
              :small="true"
            />
            <StatisticsDetail
              title="Average Price"
              value="$19.02"
              color="#3A6CFF"
              :small="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatisticsDetail from './StatisticsDetail.vue'
export default {
  name: 'ProductBrandSearch',
  components: {
    StatisticsDetail,
  },
}
</script>

<style>
.statistics-category-small {
  font-style: normal;
  font-weight: 400;
  font-size: 7.93634px;
  line-height: 120%;
  text-align: center;
  color: #989fbf;
}

.statistics-t-shirt-small {
  font-style: normal;
  font-weight: 500;
  font-size: 6.9443px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #111215;
}

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
}

.statistics-small {
  margin-top: -270px;
  margin-left: 28%;
  width: 85%;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  border: 0.972151px solid rgba(188, 197, 234, 0.25);
  box-shadow: 137.193px 113.674px 60.7568px -13.6101px rgba(47, 57, 99, 0.2);
  backdrop-filter: blur(46.0576px);
  border-radius: 15.5544px;
}

.statistics-text-small {
  font-weight: 500;
  font-size: 12.8966px;
  line-height: 19px;
  color: #111215;
}

.product-brand-search {
  margin-top: 155px;
  margin-left: 6%;
  z-index: 1;
}

.search {
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  letter-spacing: 0.02em;
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
