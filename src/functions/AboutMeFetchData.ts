import axios from 'axios';
import { STRAPIURL, API_TOKEN_STRAPI } from '../constants/constants';


export async function fetchAboutMe() {
  try {
    const response = await axios.get(`${STRAPIURL}api/acerca-de-mis?populate=*`, { 
      headers: {
        'Authorization': API_TOKEN_STRAPI,
        'Content-Type': 'application/json',
      },
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('Data:', response.data);
    }
    return response.data; // Asegúrate de devolver los datos
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Lanza el error para manejarlo en el useEffect
  }
}
