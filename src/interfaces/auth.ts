export interface IFormData {
  name: string;
  email: string;
  password: string;
  shop_token: string;
  google_token: string;
}

export interface IResponseShopify {
  shop_logo_url: string;
  shop_name: string;
  token: string;
  status: string;
}

export interface IResponseGmail {
  status: string;
  token: string;
}

export interface IUserData {
  email: string;
  name: string;
  password: string;
}

export interface IState {
  userData: IUserData | null;
  shop_token: string;
  google_token: string;
  isRegistered: boolean;
  isLogin: boolean;
  isLoading: boolean;
  error: string;
  isModalShown: boolean;
}
