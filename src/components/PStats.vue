<template>
  <div class="p-stats">
    <div class="p-stats__item">
      <span class="p-stats__name">Організацій</span> <span class="p-stats__number">{{numberOfPoints}}</span>
    </div>

    <div class="p-stats__item">
      <span class="p-stats__name">Потреб</span><span class="p-stats__number">{{numberOfNeeds}}</span>
    </div>

    <div class="p-stats__item">
      <span class="p-stats__name">Волонтерів</span><span class="p-stats__number">{{numberOfVolunteers}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'p-stats',

  computed: {
    ...mapGetters({
      numberOfPoints: 'points/number',
      numberOfVolunteers: 'points/numberOfVolunteers',
      numberOfNeeds: 'needs/number',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.p-stats {
  margin-top: 2 * $vp;
  margin-bottom: 2 * $vp;
  font-size: 12px;

  &__item {
    display: flex;
    margin-bottom: 5px;
  }

  &__name {
    display: block;
    width: 80px;
  }

  &__number {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: aquamarine;
    text-align: center;
    font-size: 10px;
    line-height: 20px;
  }
}
</style>
