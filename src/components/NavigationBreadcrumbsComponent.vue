<template>
  <nav class="breadcrumbs">
    <ul class="bredcrumbs__ul">
      <li class="breadcrumbs__li" v-for="(crumb, index) in crumbs">
        <router-link :to="crumb.to">{{ crumb.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      crumbs: [],
    }
  },
  created() {
    this.crumbs = this.generateBreadcrumbs(this.$route)
  },
  methods: {
    generateBreadcrumbs(route) {
      const breadcrumbs = []
      route.matched.forEach((record) => {
        if (record.meta && record.meta.breadcrumbs) {
          breadcrumbs.push({
            name: record.meta.breadcrumb,
            to: record.path,
          })
        }
      })
      return breadcrumbs
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  &__ul {
    display: flex;
    align-items: center;
    gap: 12px;
    &:last-child::after {
      content: '';
    }
  }
  &__li {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
    display: flex;
    gap: 4px;
    align-items: center;
    &::after {
      content: url("@/assets/img/common/arrow-breadcrumb.svg");
    }
  }
}
</style>
