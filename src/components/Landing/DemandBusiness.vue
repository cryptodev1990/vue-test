<template>
  <div class="d-flex flex-column gap-1 text-start demand-business p-4">
    <div class="d-flex gap-2">
      <h2 class="revolutionize">Revolutionize</h2>
      <h2 class="demand-business-gradient">your Print</h2>
    </div>
    <h1 class="demand-business-today">on Demand business today</h1>
  </div>
</template>

<script>
export default {
  name: 'DemandBusiness',
}
</script>

<style>

.demand-business {
  background-image: url("../../assets/DemandBusiness.png");
  background-repeat: no-repeat;
  margin-top: 350px;
  height: 500px;
  margin-left: 6%;
}

.revolutionize {
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #ffffff;
  backdrop-filter: blur(10px);
}

.demand-business-gradient {
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

.demand-business-today {
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 120%;
  color: #ffffff;
}

</style>
