import axios from 'axios';

const API_ID = 'dac4f793';
const API_KEY = '49f92c64fb76fe18a64ac99fa2a66c69';
const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchRecipe = async (query) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY,
                q: query
            }
        });
        return response.data.hits;
    } catch (error) {
        console.error('Error fetching recipe:', error);
        throw error;
    }
};

export const fetchRecipeDetail = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`, {
            params: {
                type: 'public',
                app_id: API_ID,
                app_key: API_KEY,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching recipe detail:', error);
        throw error;
    }
};



