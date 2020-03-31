/**
 * @module store/points/actions
 *
 * @version 1.0.0
 */

import { apiGetNeeds } from '@/api';
import * as types from '@/store/mutation-types';


/**
 * Action: Отримання переліку потреб
 *
 * @since Version 1.0.0
 */
const getNeeds = async ({ commit }) => {
  try {
    const needs = await apiGetNeeds();
    commit(types.SET_NEEDS, needs);
  } catch (error) {
    console.log(error);
  }
};


export default {
  getNeeds,
};
