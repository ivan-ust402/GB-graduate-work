<template>
  <VueSlider
    v-model="value"
    :enable-cross="false"
    :dotSize="20"
    :dotStyle="{
      backgroundColor: 'black',
      'box-shadow': '0 0 1px 2px rgba(0,0,0,.36)',
      '-webkit-box-shadow': '0 0 1px 2px rgba(0,0,0,.36)',
      color: '#ccc'
    }"
    :railStyle="{
      backgroundColor: '#f0f0f0',
      height: '6px',
    }"
    :processStyle="{
      backgroundColor: 'black',
      height: '6px',
    }"
    :tooltipStyle="{
      color: '#fff',
      borderColor: '#000',
      backgroundColor: '#000'
    }"
  />
  <div class="value-display">
    <div class="value-display__value">${{ value[0] }}</div>
    <div class="value-display__value">${{ value[1] }}</div>
  </div>
</template>

<script>
import VueSlider from "vue-3-slider-component"

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: [20, 80],
    }
  },
}
</script>
<style lang="scss" scoped>
.value-display {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.vue-slider-dot-tooltip-text {
  color: #fff;
}
</style>
