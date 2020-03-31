import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import needs from './modules/needs';
import points from './modules/points';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    needs,
    points,
  },
});
