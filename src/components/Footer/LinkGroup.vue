<template>
    <div>
        <div class="title">{{ title }}</div>
        <div class="content row">
            <div :key="item" v-for="item in content" :class="'col-' + (12/cols).toString()">
                <div>{{ item[0] }}</div>
                <div>{{ item[1] }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'LinkGroup',
  components: {
  },
  props:{
    title:{type:String},
    content:{
        type: Array
    }, 
    cols:{
        type:Number
    }
  }
}
</script>
<style>
.title{
    color:#6D7280;
}
</style>