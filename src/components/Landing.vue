<template>
  <div class="d-flex flex-column landing">
    <PrintonDemand />
    <MerchTitans />
    <AutomationWorks />
    <DashBoard />
    <DemandBusiness />
    <ProductBrandSearch />
    <KeywordResearch />
    <!-- <Test /> -->
  </div>
</template>

<script>
import PrintonDemand from './Landing/PrintonDemand.vue'
import MerchTitans from './Landing/MerchTitans.vue'
import AutomationWorks from './Landing/AutomationWorks.vue'
import DashBoard from './Landing/Dashboard.vue'
import DemandBusiness from './Landing/DemandBusiness.vue'
import ProductBrandSearch from './Landing/ProductBrandSearch.vue'
import KeywordResearch from './Landing/KeywordResearch.vue'
// import Test from './Landing/Test.vue'

export default {
  name: 'LandingComponent',
  components: {
    PrintonDemand,
    MerchTitans,
    AutomationWorks,
    DashBoard,
    DemandBusiness,
    ProductBrandSearch,
    KeywordResearch,
    // Test
  },
}
</script>

<style>
@import url("../app.scss");
</style>
