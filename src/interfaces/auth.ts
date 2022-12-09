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

export interface IState {
  shop_token: string;
  google_token: string;
  isRegistered: boolean;
  isLoading: boolean;
  error: string;
}
