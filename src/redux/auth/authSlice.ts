import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { connectShopify, connectGmail, register } from './authOperations';
import {
  IResponseShopify,
  IResponseGmail,
  IUserData,
  IState,
} from '../../interfaces/auth';

const initialState: IState = {
  userData: null,
  shop_token: '',
  google_token: '',
  isRegistered: false,
  isLogin: false,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // ---------- connectShopify ----------
      .addCase(connectShopify.pending, (state, _) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        connectShopify.fulfilled,
        (state, action: PayloadAction<IResponseShopify>) => {
          state.isLoading = false;
          state.shop_token = action.payload.token;
        }
      )
      .addCase(connectShopify.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      // ---------- connectGmail ----------
      .addCase(connectGmail.pending, (state, _) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        connectGmail.fulfilled,
        (state, action: PayloadAction<IResponseGmail>) => {
          state.isLoading = false;
          state.google_token = action.payload.token;
        }
      )
      .addCase(connectGmail.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      // ---------- register ----------
      .addCase(register.pending, (state, _) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(register.fulfilled, state => {
        state.isLoading = false;
        state.isRegistered = true;
        state.isLogin = true;
      })
      .addCase(register.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.payload.message;
      });
  },
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
