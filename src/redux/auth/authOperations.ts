import { createAsyncThunk } from '@reduxjs/toolkit';
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
      return response as IResponseShopify;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const connectGmail = createAsyncThunk(
  'auth/connectGmail',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.connectGmail();
      return response as IResponseGmail;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const register = createAsyncThunk(
  'auth/register',
  async (data: IFormData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.register(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
