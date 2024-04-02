import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constants';

export const fetchProductsApi = async () => {
  try {
    const response = await axios.get(PRODUCTS_URL);

    if (response.status !== 200) {
      throw new Error(`Ошибка получения продуктов от АПИ. Статус: ${response.status}`);
    }

    return response.data;
  } catch (error: any) {
    console.error('Ошибка при получении данных с сервера:', error);
  }
};
