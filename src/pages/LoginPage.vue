<template>
  <section class="login center">
    <h1>Login</h1>
  </section>
</template>

<script>
import { useHead } from '@unhead/vue'
export default {
  setup() {
    useHead({
      title: "Login",
      meta: [
        {
          name: "Login page",
          content: "There is a shop login page",
        },
      ],
    })
  },
}
</script>

<style lang="scss" scoped></style>
