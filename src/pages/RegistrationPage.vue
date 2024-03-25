<template>
  <section class="signup center">
    <h1>Registration</h1>
  </section>
</template>

<script>
import { useHead } from "@unhead/vue"

export default {
  setup() {
    useHead({
      title: "Registration",
      meta: [
        {
          name: "Registration page",
          content: "There is a shop registration page",
        },
      ],
    })
  },
}
</script>

<style lang="scss" scoped></style>
