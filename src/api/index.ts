import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { AuthUserDto, AuthUserPayload, LibraryItemsDto } from './types';

interface FullRequestParams {
  path: string;
  body?: unknown;
  method: 'GET' | 'POST';
}

class HttpClient {
  public instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
      withCredentials: true,
    });
  }

  public request = async <T = any>({ body, path, method }: FullRequestParams): Promise<AxiosResponse<T>> => {
    return this.instance.request({
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      data: body,
      url: path,
    });
  };
}

class Api_Service extends HttpClient {
  library = {
    get: () =>
      this.request<LibraryItemsDto>({
        path: '/library',
        method: 'GET',
      }),
  };
  personal = {
    get: () =>
      this.request<{ featured: any }>({
        path: '/personal',
        method: 'GET',
      }),
  };
  auth = {
    login: (data: AuthUserPayload) =>
      this.request<AuthUserDto>({
        path: '/auth/login',
        method: 'POST',
        body: data,
      }),
  };
}

export const API = new Api_Service();
