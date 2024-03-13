<template>
  <div class="reviews center">
    <h2 class="reviews__title">
      {{ title.toUpperCase() }}
    </h2>
    <div class="reviews__slider slider">
      <div class="slider__controls"></div>
      <div class="slider__display">
        <CardReviewMainComponent
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
        <div class="card" v-for="review in reviews" :key="review.id">
          <StarsComponent :grade="review.grade" class="card__stars" />
          <div class="card__info">
            <div class="card__title">
              <p class="card__username">
                {{ review.userName }}
              </p>
              <img
                src="@/assets/img/common/verification.svg"
                alt="verify-icon"
                class="card__verify"
              />
            </div>
            <div class="card__text">"{{ review.text }}"</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardReviewMainComponent from "@/components/CardReviewMainComponent.vue"
import StarsComponent from "@/components/StarsComponent.vue"

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
      ],
    },
  },
  components: {
    StarsComponent,
    CardReviewMainComponent
  },
}
</script>

<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 400px;
  height: 240px;
  padding: 28px 32px;
  align-items: flex-start;
  align-content: flex-start;
  // gap: 24px 342px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid #e8e8e8;
  &__info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  &__title {
    display: flex;
    gap: 4px;
    align-items: center;
    align-content: center;
    color: #121212;
    font-family: "Satoshi";
    font-size: 20px;
    font-weight: 700;
    line-height: 22px; /* 110% */
    text-transform: uppercase;
  }
  &__verify {
    height: 24px;
    width: 24px;
  }
  &__text {
    max-width: 336px;
    max-height: 110px;
    display: -webkit-box;
    -webkit-line-clamp: 5; // количество строк
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--Grey, #222);
    font-family: "Satoshi";
    font-size: 16px;
    font-weight: 400;
  }
}
@media (max-width: 1024px) {
  .card {
    gap: 12px;
    width: 358px;
    height: 182px;
    padding: 24px;
    &__info {
      gap: 9px;
    }
    &__title {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }
    &__verify {
      height: 19px;
      width: 19px;
    }
    &__text {
      max-width: 310px;
      max-height: 76px;
      font-size: 14px;
      font-weight: 400;
      -webkit-line-clamp: 4;
    }
  }
}

@media (max-width: 768px) {
}
</style>
