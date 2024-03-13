<template>
  <div class="slider">
    <div class="slider__controls">
      <a href="#" class="slider__arrow" @click.prevent="flickLeft">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.70406 4.4541L2.95406 11.2041C2.84918 11.3086 2.76597 11.4328 2.70919 11.5696C2.6524 11.7063 2.62317 11.8529 2.62317 12.001C2.62317 12.149 2.6524 12.2957 2.70919 12.4324C2.76597 12.5691 2.84918 12.6933 2.95406 12.7979L9.70406 19.5479C9.91541 19.7592 10.2021 19.8779 10.5009 19.8779C10.7998 19.8779 11.0865 19.7592 11.2978 19.5479C11.5092 19.3365 11.6279 19.0499 11.6279 18.751C11.6279 18.4521 11.5092 18.1654 11.2978 17.9541L6.46875 13.125L20.25 13.125C20.5484 13.125 20.8345 13.0065 21.0455 12.7955C21.2565 12.5846 21.375 12.2984 21.375 12C21.375 11.7017 21.2565 11.4155 21.0455 11.2045C20.8345 10.9936 20.5484 10.875 20.25 10.875L6.46875 10.875L11.2987 6.04598C11.5101 5.83463 11.6288 5.54799 11.6288 5.2491C11.6288 4.95022 11.5101 4.66357 11.2987 4.45223C11.0874 4.24088 10.8008 4.12215 10.5019 4.12215C10.203 4.12215 9.91634 4.24088 9.705 4.45223L9.70406 4.4541Z"
            fill="#121212"
          />
        </svg>
      </a>
      <a href="#" class="slider__arrow" @click.prevent="flickRight">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2959 4.4541L21.0459 11.2041C21.1508 11.3086 21.234 11.4328 21.2908 11.5696C21.3476 11.7063 21.3768 11.8529 21.3768 12.001C21.3768 12.149 21.3476 12.2957 21.2908 12.4324C21.234 12.5691 21.1508 12.6933 21.0459 12.7979L14.2959 19.5479C14.0846 19.7592 13.7979 19.8779 13.4991 19.8779C13.2002 19.8779 12.9135 19.7592 12.7022 19.5479C12.4908 19.3365 12.3721 19.0499 12.3721 18.751C12.3721 18.4521 12.4908 18.1654 12.7022 17.9541L17.5313 13.125L3.75 13.125C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5846 2.625 12.2984 2.625 12C2.625 11.7017 2.74353 11.4155 2.95451 11.2045C3.16548 10.9936 3.45163 10.875 3.75 10.875L17.5313 10.875L12.7013 6.04598C12.4899 5.83463 12.3712 5.54799 12.3712 5.2491C12.3712 4.95022 12.4899 4.66357 12.7013 4.45223C12.9126 4.24088 13.1992 4.12215 13.4981 4.12215C13.797 4.12215 14.0837 4.24088 14.295 4.45223L14.2959 4.4541Z"
            fill="#121212"
          />
        </svg>
      </a>
    </div>
    <div class="slider__wrapper">
      <div
        class="slider__display"
        :style="{
          transform: `translateX(-${currentSlideIndex * slideWidth}px)`,
        }"
      >
        <CardReviewMainComponent
          ref="element"
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardReviewMainComponent from "@/components/CardReviewMainComponent.vue"

export default {
  props: {
    reviews: {
      type: Array,
      default: () => [
        {
          id: 0,
          userId: 0,
          grade: 4.5,
          userName: "Samantha D.",
          text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "2023-08-16T01:30:00.000-05:00",
        },
        {
          id: 1,
          userId: 1,
          grade: 4,
          userName: "Alex M.",
          text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
          date: "2022-09-21T01:30:00.000-05:00",
        },
        {
          id: 2,
          userId: 2,
          grade: 3.5,
          userName: "Ethan R.",
          text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
          date: "2022-09-21T01:30:00.000-05:00",
        },
        {
          id: 3,
          userId: 3,
          grade: 5,
          userName: "Ethan O.",
          text: "Cool. I'm very happy",
          date: "2022-09-21T01:30:00.000-05:00",
        },
        {
          id: 4,
          userId: 0,
          grade: 4.5,
          userName: "Samantha D.",
          text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
          date: "2023-08-16T01:30:00.000-05:00",
        },
      ],
    },
  },
  components: {
    CardReviewMainComponent,
  },
  data() {
    return {
      currentSlideIndex: 0,
      slideWidth: 0,
      slideCount: 0,
      sliderAutoPlayInterval: 0,
    }
  },
  mounted() {
    const updateWidth = () => {
      if (window.innerWidth > 1024) {
        this.slideWidth = 420
        this.slideCount = 3
        this.currentSlideIndex = 0
      } else if (window.innerWidth <= 1024 && window.innerWidth > 768) {
        this.slideWidth = 360
        this.slideCount = 2
        this.currentSlideIndex = 0
      } else if (window.innerWidth <= 768) {
        this.slideWidth = 376
        this.slideCount = 1
        this.currentSlideIndex = 0
      }
    }

    this.sliderAutoPlayInterval = setInterval(() => {
      this.flickRightWithoutClearInterval()
    }, 5000)

    updateWidth() // Вызываем функцию для первоначального получения ширины

    window.addEventListener("resize", updateWidth) // Слушаем событие изменения размера окна и обновляем ширину
  },
  // beforeUnmount() {
  //   window.removeEventListener('resize', updateWidth); // Удаляем слушатель при размонтировании компонента
  // },
  computed: {
    getReviewsArrayLength() {
      return this.reviews.length
    },
    getCurrentSlideIndex() {
      return this.currentSlideIndex
    },
  },
  methods: {
    flickLeft() {
      clearInterval(this.sliderAutoPlayInterval)
      this.sliderAutoPlayInterval = setInterval(() => {
        this.flickRightWithoutClearInterval()
      }, 5000)
      if (this.getReviewsArrayLength > this.slideCount) {
        if (this.currentSlideIndex <= 0) {
          this.currentSlideIndex = this.getReviewsArrayLength - this.slideCount
        } else {
          this.currentSlideIndex--
        }
      }
    },
    flickLeftWithoutClearInterval() {
      if (this.getReviewsArrayLength > this.slideCount) {
        if (this.currentSlideIndex <= 0) {
          this.currentSlideIndex = this.getReviewsArrayLength - this.slideCount
        } else {
          this.currentSlideIndex--
        }
      }
    },
    flickRight() {
      clearInterval(this.sliderAutoPlayInterval)
      this.sliderAutoPlayInterval = setInterval(() => {
        this.flickRightWithoutClearInterval()
      }, 5000)
      if (this.getReviewsArrayLength > this.slideCount) {
        if (
          this.currentSlideIndex >=
          this.getReviewsArrayLength - this.slideCount
        ) {
          this.currentSlideIndex = 0
        } else {
          this.currentSlideIndex++
        }
      }
    },
    flickRightWithoutClearInterval() {
      if (this.getReviewsArrayLength > this.slideCount) {
        if (
          this.currentSlideIndex >=
          this.getReviewsArrayLength - this.slideCount
        ) {
          this.currentSlideIndex = 0
        } else {
          this.currentSlideIndex++
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;

  &__controls {
    position: absolute;
    top: -64px;
    right: 0;
    display: flex;
    gap: 16px;
  }
  &__wrapper {
    overflow: hidden;
  }
  &__display {
    transition: all 0.3s ease;
    display: flex;
    gap: 20px;
    justify-content: flex-start;
    max-width: 1239px;
    // overflow: hidden;
  }
}

@media (max-width: 1024px) {
  .slider {
    &__display {
      justify-content: flex-start;
    }
  }
}

@media (max-width: 768px) {
  .reviews {
    gap: 28px;
    padding-top: 41px;
    padding-bottom: 20px;
  }
}
</style>
