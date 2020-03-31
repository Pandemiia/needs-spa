<template>
  <div class="page-home">
    <div class="page-home__section page-home__section_number_1">
      <p-about />
    </div>

    <div class="page-home__section page-home__section_number_2">
      <h2>Актуальні потреби</h2>

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
// Components
import PAbout from '@/components/PAbout.vue';
import PFilter from '@/components/PFilter.vue';


export default {
  name: 'page-home',

  components: {
    PAbout,
    PFilter,
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
      pointsTypeOptions: [
        {
          value: 'Опорна лікарня',
          label: 'Опорна лікарня',
        },
        {
          value: 'Госпіталь',
          label: 'Госпіталь',
        },
      ],

      needsTypes: [],
      needsTypesOptions: [
        {
          value: 'засоби захисту',
          label: 'засоби захисту',
        },
        {
          value: 'медикаменти',
          label: 'медикаменти',
        },
        {
          value: 'харчі',
          label: 'харчі',
        },
      ],
    };
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
