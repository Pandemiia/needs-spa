<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
  async created() {
    const pointsPromis = this.getPoints();
    const needsPromis = this.getNeeds();

    await Promise.all([pointsPromis, needsPromis]);
  },

  methods: {
    ...mapActions({
      getPoints: 'points/getPoints',
      getNeeds: 'needs/getNeeds',
    }),
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&display=swap&subset=cyrillic');

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
