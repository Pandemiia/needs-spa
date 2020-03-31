/**
 * @module store/mutation-types
 *
 * @version 1.0.0
 */

/**
 * Функция хелпер, которая позволяет генерировать названия мутаций для асинхронных экшинов
 *
 * @param {string} type - Строка, на основании которой будут сгенерированны названия мутаций
 */
const createAsyncMutation = type => ({
  SUCCESS: `${type}_SUCCESS`,
  FAILURE: `${type}_FAILURE`,
  PENDING: `${type}_PENDING`,
  // loadingKey: `${type}_PENDING`,
  // stateKey: `${type}_DATA`,
});

// Points
export const SET_POINTS = 'SET_POINTS';
export const GET_POINTS_ASYNC = createAsyncMutation('GET_POINTS');

// Needs
export const SET_NEEDS = 'SET_NEEDS';
export const GET_NEEDS_ASYNC = createAsyncMutation('GET_NEEDS');
