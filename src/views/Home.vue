<template>
  <div class="page-home">
    <div class="page-home__section page-home__section_number_1">
      <p-about />
      <p-stats />
    </div>

    <div class="page-home__section page-home__section_number_2">
      <h2>Актуальні потреби</h2>
      <p-points :points="pointsIds" />
    </div>

    <div class="page-home__section page-home__section_number_3">
      <h2>Фільтри</h2>

      <div class="page-home__section page-home__filter">
        <h3>Місцезнаходження</h3>
        <p-filter :options="regionsOptions" v-model="regions" :color="0"/>
      </div>

      <div class="page-home__section page-home__filter">
        <h3>Тип закладу</h3>
        <p-filter :options="pointsTypeOptions" v-model="pointsType" :color="1"/>
      </div>


      <div class="page-home__section page-home__filter">
        <h3>Тип потреби</h3>
        <p-filter :options="needsTypesOptions" v-model="needsTypes" :color="2"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

// Components
import PAbout from '@/components/PAbout.vue';
import PFilter from '@/components/PFilter.vue';
import PPoints from '@/components/PPoints.vue';
import PStats from '@/components/PStats.vue';


export default {
  name: 'page-home',

  components: {
    PAbout,
    PFilter,
    PPoints,
    PStats,
  },

  data() {
    return {
      regions: [],
      regionsOptions: [
        {
          value: 'Віницька область',
          label: 'Віницька область',
        },
        {
          value: 'Київ',
          label: 'Київ',
        },
      ],

      pointsType: [],

      needsTypes: [],
    };
  },

  computed: {
    needsTypesOptions() {
      return this.needsCategories.map(item => ({value: item, label: item}));
    },

    pointsTypeOptions() {
      return this.pointsCategories.map(item => ({value: item, label: item}));
    },

    ...mapGetters({
      pointsIds: 'points/pointsIds',
      needsCategories: 'needs/needsCategories',
      pointsCategories: 'points/pointsCategories',
    }),
  },
};
</script>

<style lang="scss">
.page-home {
  display: flex;

  &__section {
    padding:  $hp;

    &_number_1 {
      flex: 1;
      text-align: left;
    }

    &_number_3 {
      flex: 1;
      text-align: left;
    }

    &_number_2 {
      flex: 3;
      text-align: left;
    }
  }

  &__filter {
    margin: 0 0 $vp 0;
    padding: 0;
  }
}
</style>
