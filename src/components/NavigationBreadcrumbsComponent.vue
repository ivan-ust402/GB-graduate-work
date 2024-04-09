<template>
  <nav class="breadcrumbs">
    <ul class="breadcrumbs__ul">
      <li class="breadcrumbs__li" v-for="(crumb, index) in crumbs" :key="index">
        <router-link v-if="index < crumbs.length - 1" :to="crumb.to">{{ crumb.name }}</router-link>
        <p class="breadcrumbs__last" v-else>{{ crumb.name }}</p>
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
      breadcrumbs.push({
        name: "Home",
        to: "/",
      })
      route.matched.forEach((record, index, array) => {
        if (record.meta && record.meta.breadcrumb) {
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
    flex-direction: row;
    gap: 12px;
  }
  &__li {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
    display: flex;
    gap: 4px;
    align-items: center;
    transition: all 0.3s ease-in;
    &::after {
      content: url("@/assets/img/common/arrow-breadcrumb.svg");
      align-self: center;
    }
    &:last-child::after {
      content: "";
    }
    &:last-child a {
      cursor: default;
    }
    &:last-child {
      @media (hover: hover) {
      &:hover {
        opacity: 1;
      }
    }
    }
    @media (hover: hover) {
      &:hover {
        opacity: 0.6;
      }
    }
  }
  &__last {
    color: #222;
    font-family: "satoshiregular";
    font-size: 16px;
    line-height: normal;
    display: flex;
    gap: 4px;
    align-items: center;
    transition: all 0.3s ease-in;
  }
}

@media (max-width: 1239px) {
  .breadcrumbs {
    &__ul {
      gap: 6px;
    }
    &__li {
      font-size: 14px;
    }
  }
}

@media (max-width: 768px) {
}
</style>
