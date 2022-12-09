import axios from 'axios';
import { IFormData } from '../../interfaces/auth';

const { REACT_APP_API_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

export const UserAPI = {
  connectShopify: async (name: string) => {
    const response = await instance.get(`/shopify?name=${name}`);

    return response.data;
  },
  connectGmail: async () => {
    const response = await instance.get(`/google`);

    return response.data;
  },
  register: async (data: IFormData) => {
    const response = await instance.post(`/register`, data);

    return response.data;
  },
};
