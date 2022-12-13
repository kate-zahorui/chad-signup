import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { UserAPI } from '../../services/api/api';
import {
  IFormData,
  IResponseShopify,
  IResponseGmail,
} from '../../interfaces/auth';

export const connectShopify = createAsyncThunk(
  'auth/connectShopify',
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await UserAPI.connectShopify(name);

      toast.success(`${response.shop_name} has been connected.`);
      return response as IResponseShopify;
    } catch (error) {
      toast.error(
        `Chad couldn’t connect to your Shopify account. Please try again.`
      );
      return rejectWithValue(error);
    }
  }
);

export const connectGmail = createAsyncThunk(
  'auth/connectGmail',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.connectGmail();
      toast.success(` Customer support email connected.`);
      return response as IResponseGmail;
    } catch (error) {
      toast.error(
        `Chad couldn’t connect to your Gmail account. Please try again.`
      );
      return rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async (data: IFormData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.register(data);
      toast.success(`Shopify account connected.`);
      return response;
    } catch (error) {
      toast.error(`Sorry, registration failed. Please try again.`);
      return rejectWithValue(error);
    }
  }
);
