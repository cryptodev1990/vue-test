<template>
  <section>
    <div class="container reveal fade-right">
      <img
        src="../../assets/Dashboard.png"
        alt="Dashboard"
        title="Dashboard"
        class="dashboard"
      />
      <div
        class="chart d-flex flex-column align-items-center chart-background py-4 px-3 gap-3"
      >
        <img src="../../assets/chart.svg" alt="Chart" title="chart" />
        <div class="container d-flex gap-5">
          <div class="col d-flex flex-column gap-1">
            <Brand
              brandUrl="Brand/Amazon-small.svg"
              brandName="Amazon"
              value="8 856"
            />
            <Brand
              brandUrl="Brand/RedBubble-small.svg"
              brandName="RedBubble"
              value="7 464"
            />
            <Brand
              brandUrl="Brand/TeePublic-small.svg"
              brandName="TeePublic"
              value="5 954"
            />
          </div>
          <div class="col d-flex flex-column gap-1">
            <Brand
              brandUrl="Brand/Printful-small.svg"
              brandName="Printful"
              value="4 008"
            />
            <Brand
              brandUrl="Brand/Zazzle-small.svg"
              brandName="Zazzle"
              value="2 436"
            />
            <Brand
              brandUrl="Brand/Society6-small.svg"
              brandName="Society 6"
              value="0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Brand from './Brand.vue'
export default {
  name: 'DashBoard',
  components: {
    Brand,
  },
}
</script>

<style>
@import url('./Landing.scss');
</style>
