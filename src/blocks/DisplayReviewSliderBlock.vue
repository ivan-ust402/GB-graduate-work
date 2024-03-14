<template>
  <div class="reviews center">
    <h2 class="reviews__title">
      {{ title.toUpperCase() }} 
    </h2>
    <SliderReviewComponent 
      class="reviews__slider"
      :reviews="reviews"
    />
  </div>
</template>

<script>
import SliderReviewComponent from "@/components/SliderReviewComponent.vue"

export default {
  props: {
    title: {
      type: String,
      default: () => "Loremka",
    },
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
    SliderReviewComponent
  },
}
</script>

<style lang="scss" scoped>
.reviews {
  display: flex;
  flex-direction: column;
  gap: 37px;
  padding-top: 62px;
  padding-bottom: 64px;
  &__title {
    color: #121212;
    // font-family: "Integral CF";
    font-size: 48px;
    font-style: normal;
    // font-weight: 400;
    line-height: normal;
  }
}
@media (max-width: 1239px) {
  .reviews {
    gap: 30px;
    padding-top: 40px;
    padding-bottom: 40px;
    &__title {
      font-size: 32px;
      line-height: 100%;
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
