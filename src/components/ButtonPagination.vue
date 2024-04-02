<template>
  <a href="#" class="pagination-btn">
    <svg
      v-if="arrow === 'left'"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 9.99996H4.16666M4.16666 9.99996L9.99999 15.8333M4.16666 9.99996L9.99999 4.16663"
        stroke="#121212"
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
    {{ text }}
    <svg
      v-if="arrow === 'right'"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16663 9.99996H15.8333M15.8333 9.99996L9.99996 4.16663M15.8333 9.99996L9.99996 15.8333"
        stroke="#121212"
        stroke-width="1.67"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => "default",
    },
    arrow: {
      type: String,
      default: () => "none",
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination-btn {
  box-sizing: border-box;
  display: flex;
  // width: 110px;
  height: 36px;
  border-radius: 8px;
  padding: 8px 14px;
  justify-content: center;
  gap: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  text-transform: capitalize;
  color: #121212;
  font-family: "satoshimedium";
  font-size: 14px;
  line-height: 20px;
  transition: all 0.3s ease-in-out;
  & svg {
    width: 20px;
    height: 20px;
    align-self: center;
  }
  @media (hover: hover) {
    &:hover {
      border: 1px solid #000;
    }
  }
  @media (hover: none) {
    &_active {
      border: 1px solid #000;
    }
  }
}
@media (max-width: 1239px) {
  .pagination-btn {
    // width: 90px;
    height: 38px;
    font-family: "satoshiregular";
    font-size: 12px;
    line-height: 22px;
    & svg {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
