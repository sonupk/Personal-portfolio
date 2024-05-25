import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-api-url.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getData = async () => {
    try {
        const response = await apiClient.get('/data-endpoint');
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
};