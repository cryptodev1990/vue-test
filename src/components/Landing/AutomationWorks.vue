<template>
  <div class="d-flex flex-column automation gap-4">
    <div class="d-flex gap-2">
      <h1 class="merchtitans-gradient automation-works">How Merch Titans</h1>
      <h1 class="automation-works">Automation Works</h1>
    </div>
    <div class="container d-flex flex-column gap-2">
      <div class="row d-flex gap-5">
        <AutomationCheckText text="Install the application on your computer. It’s available for Windows & Mac." />
        <AutomationCheckText text="Click start and watch the automation magic go to work for you." />
      </div>
      <div class="row d-flex gap-5">
        <AutomationCheckText text="Export a blank spreadsheet from the app and fill in the content details for each design." />
        <AutomationCheckText text="Spend your new-found extra time doing the things you love doing. " />
      </div>
      <div class="row d-flex gap-5">
        <AutomationCheckText text="Adjust the settings inside the app to your liking for each specific Print on Demand platform." />
        <AutomationCheckText text="Repeat steps 1-5 with new designs and content as you please. " />
      </div>
    </div>
  </div>
</template>

<script>

import AutomationCheckText from "./AutomationCheckText.vue"
export default {
  name: 'AutomationWorks',
  components: {
    AutomationCheckText
  }
}
</script>

<style>
@import url("./Landing.scss");
</style>
