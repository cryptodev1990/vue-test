<template>
  <div class="d-flex pricing-background justify-content-center">
    <div class="d-flex flex-column gap-5 pricing-width">
      <div class="d-flex justify-content-between">
        <h2 class="pricing-h1">Pricing</h2>
        <div class="d-flex period-select gap-2 align-items-center">
          <h5 :class="classMonthly" @click="handleMonthlyClick">Monthly</h5>
          <h5 :class="classAnnual" @click="handleAnnualClick">Annual</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let click = true;
export default {
  name: 'PricingComponent',
  data() {
    return {
      click: click,
      classMonthly : click ? "clicked-text" : "unclicked-text",
      classAnnual : click ? "unclicked-text" : "clicked-text",
    }
  },
  methods: {
    handleMonthlyClick () {
      console.log(click)
      click = true
    },
    handleAnnualClick () {
      console.log(click)
      click = false
    }
  },
}
</script>

<style>
.pricing-background {
  background-image: url('../assets/PricingBackground.png');
  background-repeat: no-repeat;
  height: 1348px;
  padding-top: 140px;
  width: 100%;
}

.pricing-width {
  width: 60%;
}

.clicked-text {
  padding: 10px 15px;
  background: #ffb507;
  box-shadow: 0px 7px 46px rgba(255, 181, 7, 0.2);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #111827;
}

.unclicked-text {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  color: #111827;
}

.period-select {
  background: rgba(255, 181, 7, 0.05);
  border: 1px solid rgba(255, 181, 7, 0.2);
  border-radius: 50%;
  padding: 8px;
}

.pricing-h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 140%;
  color: #111827;
}
</style>
