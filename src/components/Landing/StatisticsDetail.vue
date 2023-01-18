<template>
  <div class="col d-flex flex-column align-items-center p-3 detail">
    <h5 :class="titleClassName">{{ title }}</h5>
    <h3 :class="valueClassName" :style="valueColor">{{ value }}</h3>
  </div>
</template>

<script>

export default {
  name: 'StatisticsDetail',
  props: {
    title: String,
    value: String,
    color: String,
    small: Boolean
  },
  data(){
    return {
      valueClassName : this.small ? "detail-value-small" : "detail-value",
      titleClassName : this.small ? "detail-title-small" : "detail-title"
    }
  },
  computed: {
    valueColor() {
      return {
        color: this.color,
      }
    }
  }
}
</script>

<style>
@import url("./Landing.scss");
</style>
