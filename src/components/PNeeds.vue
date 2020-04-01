<template>
  <div class="p-needs">
    <p-need
      v-for="(need, index) in needs"
      :key="index"
      :need="need"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PNeed from '@/components/PNeed.vue';

export default {
  name: 'p-needs',

  components: {
    PNeed,
  },

  props: {
    point: {
      type: Number,
      required: true,
    },
  },

  computed: {
    needs() {
      return this.getNeeds(this.point);
    },

    ...mapGetters({
      getNeeds: 'needs/getNeeds',
    }),
  },
};
</script>

<style lang="scss">
.p-needs {
  background-color: #f0f0f0;
  padding: $hp / 2;
  border-radius: $hp / 2;
}
</style>
