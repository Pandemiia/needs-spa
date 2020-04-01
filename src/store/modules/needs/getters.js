/**
 * @module store/points/getters
 *
 * @version 1.0.0
 */

import * as R from 'ramda';


/**
 * Getter: Возвращает массив всех акций
 *
 * @returns {array}
 */
const needs = state => state.needs;

/**
 * Getter: Возвращает массив всех акций
 *
 * @returns {array}
 */
const getNeeds = state => point => state.needs.filter(need => need.point === point);


/**
 * Getter: Возвращает массив всех акций
 *
 * @returns {array}
 */
const needsCategories = state => {
  return R.pipe(
    R.map(item => item.category),
    R.flatten,
    R.uniq,
  )(state.needs);
};

/**
 * Getter: Возвращает количествоо потребностей
 *
 * @returns {array}
 */
const number = state => state.needs.length;


/**
 * Getter: Возвращает флаг загружаются ли точки в текущий момент
 *
 * @returns {boolean}
 */
const isNeedsLoading = state => state.isNeedsLoading;

export default {
  getNeeds,
  isNeedsLoading,
  needs,
  number,
  needsCategories,
};
