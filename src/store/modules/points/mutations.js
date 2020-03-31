/**
 * @module store/points/mutations
 *
 * @version 1.0.0
 */


import * as types from '@/store/mutation-types';

/* eslint-disable no-param-reassign */
export default {
  /**
   * Mutation: Задание списка точек на карте
   *
   * @since Version 1.0.0
   */
  [types.SET_POINTS](state, points) {
    state.points = points;
  },
};
/* eslint-enable no-param-reassign */
