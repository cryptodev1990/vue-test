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
@import url("../app.scss");
</style>
