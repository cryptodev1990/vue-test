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
    <section>
      <div class="container reveal fade-right">
        <div class="px-5">
          <img
            src="../../assets/Merchtitans-small.png"
            alt="Merch Titans"
            title="Merch Title"
          />
          <div
            class="p-2 statistics-small d-flex flex-column align-items-start"
          >
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
                  <h5 class="statistics-t-shirt-small">
                    Merch by Amazon T-shirt
                  </h5>
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
    </section>
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
@import url('./Landing.scss');
</style>
