<template>
  <div ref="slider" class="price-slider"></div>
</template>

<script>
import noUiSlider from 'nouislider';
// import 'nouislider/dist/nouislider.css';

export default {
  mounted() {
    const slider = this.$refs.slider;

    noUiSlider.create(slider, {
      start: [50, 150],
      connect: true,
      range: {
        'min': 0,
        'max': 200
      },
    });

    slider.noUiSlider.on('update', (values) => {
      console.log(values);
    });
  }
}
</script>

<style scoped>

.price-slider {
  width: 247px;
  height: 20px;
}

.price-slider .noUi-connect {
  background: #121212;
}

.price-slider .noUi-origin {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #121212;
}
</style>