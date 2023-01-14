<template>
  <img
    src="../../assets/Dashboard.png"
    alt="Dashboard"
    title="Dashboard"
    class="dashboard"
  />
  <div class="chart d-flex flex-column align-items-center chart-background py-4 px-3">
    <img src="../../assets/chart.svg" alt="Chart" title="chart" />
    <div class="container d-flex gap-5">
      <div class="col d-flex flex-column gap-2">
        <Brand brandUrl="Brand/Amazon.svg" brandName="Amazon" value="8 856" />
        <Brand brandUrl="Brand/RedBubble.svg" brandName="RedBubble" value="7 464" />
        <Brand brandUrl="Brand/TeePublic.svg" brandName="TeePublic" value="5 954" />
      </div>
      <div class="col d-flex flex-column gap-2">
        <Brand brandUrl="Brand/Printful.svg" brandName="Printful" value="4 008" />
        <Brand brandUrl="Brand/Zazzle.svg" brandName="Zazzle" value="2 436" />
        <Brand brandUrl="Brand/Society6.svg" brandName="Society 6" value="0" />
      </div>          
    </div>
  </div>
</template>

<script>
import Brand from "./Brand.vue"
export default {
  name: 'DashBoard',
  components: {
    Brand
  }
}
</script>

<style>
.dashboard {
  position: absolute;
  top: 2780px;
  left: 19%;
  z-index: 1;
}

.chart {
  position: absolute;
  top: 2950px;
  left: 57%;
  z-index: 2;
}

.chart-background {
  background: rgba(255, 255, 255, 0.9);
  border: 0.892838px solid rgba(188, 197, 234, 0.25);
  box-shadow: 66.6px 104.4px 55.8px -12.4997px rgba(47, 57, 99, 0.15);
  backdrop-filter: blur(42.3px);
  border-radius: 14.2854px;
}
</style>
