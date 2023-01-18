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
          :price="singlePlatformAccessPrice"
          :float="singlePlatformAccessFloat"
          :service="singlePlatformAccessService"
          :content="singleContent"
        />
        <PriceLabel
          title="All Access Pass"
          :price="allAccessPassPrice"
          :float="allAccessPassFloat"
          :service="allAccessPassService"
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
      singlePlatformAccessPrice: "24",
      singlePlatformAccessFloat: "99",
      allAccessPassPrice: "69",
      allAccessPassFloat: "99",
      singlePlatformAccessService: "",
      allAccessPassService: ""
    }
  },
  methods: {
    async handleMonthlyClick() {
      this.classMonthly = 'clicked-text rounded-pill'
      this.classAnnual = 'unclicked-text'
      this.singlePlatformAccessPrice = "24"
      this.singlePlatformAccessFloat = 99
      this.allAccessPassPrice = "69"
      this.allAccessPassFloat = 99
      this.singlePlatformAccessService = ""
      this.allAccessPassService = ""
    },
    async handleAnnualClick() {
      this.classMonthly = 'unclicked-text'
      this.classAnnual = 'clicked-text rounded-pill'
      this.singlePlatformAccessPrice = "18"
      this.singlePlatformAccessFloat = 74
      this.allAccessPassPrice = "52"
      this.allAccessPassFloat = 49
      this.singlePlatformAccessService = "($224.88 billed annually)"
      this.allAccessPassService = "($629.88 billed annually)"
    },
  },
}
</script>

<style>
@import url("../app.scss");
</style>
