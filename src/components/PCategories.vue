<template>
  <div class="p-categories">
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="p-categories__item"
    >
      {{category}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'p-categories',

  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.p-categories {
  display: flex;
  margin-bottom: $vp;
  font-size: 10px;

  &__item {
    background-color: cornflowerblue;
    border-radius: 10px;
    padding: 2px 10px;
  }
}
</style>
