/**
 * @module store/points
 *
 * @version 1.0.0
 */


import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './initialState';

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
