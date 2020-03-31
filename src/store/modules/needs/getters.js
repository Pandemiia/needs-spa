/**
 * @module store/points/getters
 *
 * @version 1.0.0
 */


/**
 * Getter: Возвращает массив всех акций
 *
 * @returns {array}
 */
const points = state => state.points;


/**
 * Getter: Возвращает флаг загружаются ли точки в текущий момент
 *
 * @returns {boolean}
 */
const isPointsLoading = state => state.isPointsLoading;

export default {
  isPointsLoading,
  points,
};
