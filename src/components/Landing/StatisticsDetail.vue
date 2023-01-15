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
.detail-title {
  font-style: normal;
  font-weight: 400;
  font-size: 15.5544px;
  line-height: 120%;
  text-align: center;
  color: #989fbf;
  white-space: nowrap;
}

.detail-title-small {
  font-style: normal;
  font-weight: 400;
  font-size: 7.93634px;
  line-height: 120%;
  text-align: center;
  color: #989fbf;
  white-space: nowrap;
}

.detail {
  background: rgba(255, 255, 255, 0.5);
  border: 0.972151px solid rgba(188, 197, 234, 0.25);
  border-radius: 15.5544px;
}

.detail-value {
  font-style: normal;
  font-weight: 500;
  font-size: 25.2759px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: center;
}

.detail-value-small {
  font-style: normal;
  font-weight: 500;
  font-size: 12.8966px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
