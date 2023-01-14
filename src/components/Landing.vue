<template>
  <div class="d-flex flex-column landing">
    <PrintonDemand />
    <MerchTitans />
    <AutomationWorks />
    <DashBoard />
    <DemandBusiness />
    <ProductBrandSearch />
  </div>
</template>

<script>
import PrintonDemand from './Landing/PrintonDemand.vue'
import MerchTitans from './Landing/MerchTitans.vue'
import AutomationWorks from './Landing/AutomationWorks.vue'
import DashBoard from './Landing/Dashboard.vue'
import DemandBusiness from './Landing/DemandBusiness.vue'
import ProductBrandSearch from './Landing/ProductBrandSearch.vue'
export default {
  name: 'LandingComponent',
  components: {
    PrintonDemand,
    MerchTitans,
    AutomationWorks,
    DashBoard,
    DemandBusiness,
    ProductBrandSearch,
  },
}
</script>

<style>
.landing {
  background-image: url('../assets/landingBackground.png');
  background-repeat: no-repeat;
  margin-top: 50px;
  width: 65%;
}
</style>
