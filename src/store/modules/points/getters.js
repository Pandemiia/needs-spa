/**
 * @module store/points/getters
 *
 * @version 1.0.0
 */

import * as R from 'ramda';


/**
 * Getter: Возвращает массив всех точек
 *
 * @returns {array}
 */
const points = state => state.points;


/**
 * Getter: Возвращает массив всех id точек
 *
 * @returns {array}
 */
const pointsIds = state => state.points.map(item => item.id);

/**
 * Getter: Возвращает точку по id
 *
 * @returns {array}
 */
const getPoint = state => id => state.points.find(item => item.id === id);

/**
 * Getter: Возвращает список регионов
 *
 * @returns {array}
 */
const regions = state => state.points.find(item => item.id === id);


/**
 * Getter: Возвращает список регионов
 *
 * @returns {array}
 */
const number = state => state.points.length;


/**
 * Getter: Возвращает количество волонтеров
 *
 * @returns {array}
 */
const numberOfVolunteers = state => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.contacts.length;
  return state.points.reduce(reducer, 0);
};


/**
 * Getter: Возвращает массив всех акций
 *
 * @returns {array}
 */
const pointsCategories = state => {
  return R.pipe(
    R.map(item => item.category),
    R.flatten,
    R.uniq,
  )(state.points);
};

/**
 * Getter: Возвращает флаг загружаются ли точки в текущий момент
 *
 * @returns {boolean}
 */
const isPointsLoading = state => state.isPointsLoading;

export default {
  getPoint,
  isPointsLoading,
  points,
  pointsIds,
  number,
  numberOfVolunteers,
  pointsCategories,
};
