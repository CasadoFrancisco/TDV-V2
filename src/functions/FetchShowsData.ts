import axios from 'axios';
import { STRAPIURL, API_TOKEN_STRAPI } from '../constants/constants';

/**
 * Función asíncrona para obtener datos de funciones desde la API de Strapi.
 * @returns {Promise<any>} Promesa que resuelve con los datos obtenidos.
 */
export async function fetchShowsData(): Promise<any> {
  try {
    const url = `${STRAPIURL}api/funciones?populate=*`;
    const headers = {
      'Authorization': `Bearer ${API_TOKEN_STRAPI}`, // Asegúrate de que el token sea correcto
      'Content-Type': 'application/json',
    };

    const response = await axios.get(url, { headers });

    if (process.env.NODE_ENV === 'development') {
      console.log('Data:', response.data);
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching data:', error.message);
    } else {
      console.error('Error inesperado:', error);
    }
    throw error;
  }
}
