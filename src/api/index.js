/**
 * Получение списка точек
 *
 * @since Version 1.0.6
 */

import axios from 'axios';
import { API_URL } from '@/config';


export const apiGetPoints = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    },
  };

  const { data } = await axios.get(`${API_URL}/points/`, config);
  console.log('points', data);
  return data;
};


export const apiGetNeeds = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
    },
  };

  const { data } = await axios.get(`${API_URL}/needs/`, config);
  console.log('points', data);
  return data;
};
