<template>
  <div class="p-points">

  </div>
</template>

<script>
import PPoint from '@/components/PPoint';

export default {
  name: 'p-points',

  components: {
    PPoint,
  },

  props: {
    points: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.p-points {

}
</style>
