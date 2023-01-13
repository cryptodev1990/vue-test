<template>
  <img
    src="../../assets/Merchtitans.png"
    alt="MerchTitans"
    title="MerchTitans"
    class="merch-titans"
  />
  <div class="p-3 statistics d-flex flex-column gap-2 align-items-start">
    <h3 class="statistics-text">Statistics</h3>
    <div class="container d-flex flex-column gap-3">
      <div class="row gap-3">
        <StatisticsDetail title="Results" value="36" color="#04CB00" />
        <StatisticsDetail
          title="Total Results"
          value="10000+"
          color="#B43AFF"
        />
        <StatisticsDetail
          title="Average BSR"
          value="1,724,675"
          color="#FF3AD4"
        />
        <StatisticsDetail title="Top E.M.S" value="73" color="#FF3A52" />
      </div>
      <div class="row gap-3">
        <div class="col d-flex flex-column align-items-center cell p-3">
          <h5 class="statistics-category">Category</h5>
          <h5 class="statistics-t-shirt">Merch by Amazon T-shirt</h5>
        </div>
        <StatisticsDetail
          title="Minimum Price"
          value="$13.07"
          color="#04CBD8"
        />
        <StatisticsDetail
          title="Maximum Price"
          value="$28.29"
          color="#FF3A52"
        />
        <StatisticsDetail
          title="Average Price"
          value="$19.02"
          color="#3A6CFF"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StatisticsDetail from './StatisticsDetail.vue'

export default {
  name: 'MerchTitans',
  components: {
    StatisticsDetail,
  },
}
</script>

<style>
.statistics-text {
  font-style: normal;
  font-weight: 500;
  font-size: 25.2759px;
  line-height: 38px;
  color: #111215;
}

.cell {
  padding: 15.5544px;
  gap: 5.83px;
  background: rgba(255, 255, 255, 0.5);
  border: 0.972151px solid rgba(188, 197, 234, 0.25);
  border-radius: 15.5544px;
}

.merch-titans {
  position: absolute;
  top: 1750px;
  left: 24%;
  z-index: 1;
}

.statistics-category {
  font-style: normal;
  font-weight: 400;
  font-size: 15.5544px;
  line-height: 120%;
  text-align: center;
  color: #989fbf;
}

.statistics-t-shirt {
  font-style: normal;
  font-weight: 500;
  font-size: 13.6101px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #111215;
}

.statistics {
  position: absolute;
  top: 2020px;
  left: 23%;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  border: 0.972151px solid rgba(188, 197, 234, 0.25);
  box-shadow: 137.193px 113.674px 60.7568px -13.6101px rgba(47, 57, 99, 0.2);
  backdrop-filter: blur(46.0576px);
  border-radius: 15.5544px;
}
</style>
