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
  display: flex;
  width: 110px;
  border-radius: 8px;
  padding: 8px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  text-transform: capitalize;
}
</style>
