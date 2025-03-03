import axios from 'axios';
import { STRAPIURL,API_TOKEN_STRAPI } from '../constants/constants';

export async function fetchDonacionMethodData() {
 

  try {
    const response = await axios.get(`${STRAPIURL}api/metodo-de-donacions?populate=*`, {
      headers: {
        'Authorization': API_TOKEN_STRAPI,
        'Content-Type': 'application/json',
      },
    });
    if (process.env.NODE_ENV === 'development') {
      console.log('Data:', response.data);
    }
    return response.data; // Devolver la data directamente
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
