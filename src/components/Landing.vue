<template>
  <div class="d-flex flex-column landing">
    <PrintonDemand />
    <MerchTitans />
    <AutomationWorks />
    <DashBoard />
    <DemandBusiness />
    <ProductBrandSearch />
    <KeywordResearch />
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
export default {
  name: 'LandingComponent',
  components: {
    PrintonDemand,
    MerchTitans,
    AutomationWorks,
    DashBoard,
    DemandBusiness,
    ProductBrandSearch,
    KeywordResearch
  },
}
</script>

<style>
.landing {
  background-image: url('../assets/landingBackground.png');
  height: 3800px;
  background-repeat: no-repeat;
  margin-top: 50px;
  width: 1292px;
  padding-left: 100px;
  padding-top: 105px;
  padding-right: 80px;
}
</style>
