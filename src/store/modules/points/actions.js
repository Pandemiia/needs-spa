/**
 * @module store/points/actions
 *
 * @version 1.0.0
 */

import { apiGetPoints } from '@/api';
import * as types from '@/store/mutation-types';


/**
 * Action: Отримання точок
 *
 * @since Version 1.0.0
 */
const getPoints = async ({ commit }) => {
  try {
    const points = await apiGetPoints();
    commit(types.SET_POINTS, points);
  } catch (error) {
    console.log(error);
  }
};


export default {
  getPoints,
};
