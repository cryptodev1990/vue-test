<template>
  <div class="d-flex justify-content-center landing">
    <img src="../assets/landingBackground.png" alt="Landing" title="Landing" />
  </div>
  <PrintonDemand />
  <MerchTitans />
  <AutomationWorks />
  <DashBoard />
</template>

<script>
import PrintonDemand from "./Landing/PrintonDemand.vue";
import MerchTitans from "./Landing/MerchTitans.vue"
import AutomationWorks from "./Landing/AutomationWorks.vue";
import DashBoard from "./Landing/Dashboard.vue";
export default {
  name: 'LandingComponent',
  components: {
    PrintonDemand,
    MerchTitans,
    AutomationWorks,
    DashBoard
  }
}
</script>

<style>

.landing {
  position: relative;
  top: 100px;
  z-index: 1;
}

.landing-width {
  width: 60%;
}

</style>