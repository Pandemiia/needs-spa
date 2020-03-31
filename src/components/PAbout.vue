<template>
  <div class="p-about">
    <h1 class="p-about__title">pandemiia.in.ua</h1>
    <p class="p-about__description">Перелік актуальних потреб українських лікарень задіяних у подоланні епідемії коронавірусу.</p>
  </div>
</template>

<script>
export default {
  name: 'p-about',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.p-about {
  &__description {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }
}
</style>
