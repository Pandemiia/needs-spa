<template>
  <div class="p-point">
    <h4>{{point.name}}</h4>
    <p-categories :categories="point.category" />

    <p-address :address="point.address"/>

    <p-needs :point="point.id" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PAddress from '@/components/PAddress';
import PCategories from '@/components/PCategories';
import PNeeds from '@/components/PNeeds';

export default {
  name: 'p-point',

  components: {
    PAddress,
    PCategories,
    PNeeds,
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  computed: {
    point() {
      return this.getPoint(this.id);
    },

    ...mapGetters({
      getPoint: 'points/getPoint',
    }),
  },
};
</script>

<style lang="scss">
.p-point {
  display: block;
  margin-bottom: 2 * $vp;
}
</style>
