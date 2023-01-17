<template>
  <div class="d-flex pricing-background justify-content-center">
    <div class="d-flex flex-column gap-5 pricing-width">
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h2 class="pricing-h1">Pricing</h2>
        <div
          class="d-flex period-select align-items-center gap-3 px-3 py-1 rounded-pill"
        >
          <h5 :class="classMonthly" @click="handleMonthlyClick" role="button">Monthly</h5>
          <h5 :class="classAnnual" @click="handleAnnualClick" role="button">Annual</h5>
        </div>
      </div>
      <div class="d-flex gap-4 justify-content-center">
        <PriceLabel
          title="Single Platform Access"
          price="24"
          service=""
          :content="singleContent"
        />
        <PriceLabel
          title="All Access Pass"
          price="69"
          service=""
          :content="allAccessContent"
        />
        <!-- <PriceLabel
          title="Lifetime Pass"
          price="1999"
          service="one time payment"
          :content="lifeTimeContent"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import PriceLabel from './Pricing/PriceLabel.vue'

import {
  singlePlatformAccess,
  allAccessPass,
  lifeTimePass,
} from './Pricing/Service'

export default {
  name: 'PricingComponent',
  components: {
    PriceLabel,
  },
  data() {
    return {
      singleContent: singlePlatformAccess,
      allAccessContent: allAccessPass,
      lifeTimeContent: lifeTimePass,
      classMonthly: 'clicked-text rounded-pill',
      classAnnual: 'unclicked-text',
    }
  },
  methods: {
    async handleMonthlyClick() {
      this.classMonthly = 'clicked-text rounded-pill'
      this.classAnnual = 'unclicked-text'
    },
    async handleAnnualClick() {
      this.classMonthly = 'unclicked-text'
      this.classAnnual = 'clicked-text rounded-pill'
    },
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
  display: flex;
  justify-content: center;
  color: #111827;
  align-items: center;
  padding: 10px 15px;
  background: #ffb507;
  box-shadow: 0px 7px 46px rgba(255, 181, 7, 0.2);
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.unclicked-text {
  justify-content: center;
  align-items: center;
  color: #111827;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
}

.period-select {
  background: rgba(255, 181, 7, 0.05);
  border: 1px solid rgba(255, 181, 7, 0.2);
}

.pricing-h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 140%;
  color: #111827;
}
</style>
