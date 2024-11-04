import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { LibraryDto } from './dto/library';
import { AuthUserDto, AuthUserPayload } from './dto/auth';
import { PersonalDto } from './dto/personal';
import { AlbumPageDataDto } from './dto/album';
import { ArtistPageDataDto } from './dto/artist';
import { FollowPayload } from './dto/follow';
import { PlaylistPageDto } from './dto/playlist';
import { SearchDto } from './dto/search';
import { UserPageDto } from './dto/user';

interface FullRequestParams {
  path: string;
  body?: unknown;
  method: 'GET' | 'POST' | 'DELETE';
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
  auth = {
    login: (data: AuthUserPayload) =>
      this.request<AuthUserDto>({
        path: '/auth/login',
        method: 'POST',
        body: data,
      }),
  };

  albums = {
    page: (id: string) =>
      this.request<AlbumPageDataDto>({
        path: `/album/${id}`,
        method: 'GET',
      }),
  };
  artists = {
    page: (id: string) =>
      this.request<ArtistPageDataDto>({
        path: `/artist/${id}`,
        method: 'GET',
      }),
  };
  playlists = {
    page: (id: string) =>
      this.request<PlaylistPageDto>({
        path: `/playlist/${id}`,
        method: 'GET',
      }),
  };
  users = {
    page: (id: string) =>
      this.request<UserPageDto>({
        path: `/users/${id}`,
        method: 'GET',
      }),
  };

  library = {
    get: () =>
      this.request<LibraryDto>({
        path: '/library',
        method: 'GET',
      }),
  };
  personal = {
    get: () =>
      this.request<PersonalDto>({
        path: '/personal',
        method: 'GET',
      }),
  };

  search = {
    find: (query: string) =>
      this.request<SearchDto>({
        path: `/search/${query}`,
        method: 'GET',
      }),
  };

  follow = {
    follow: (data: FollowPayload) =>
      this.request({
        path: '/follow',
        method: 'POST',
        body: JSON.stringify(data),
      }),
    unfollow: (data: FollowPayload) =>
      this.request({
        path: '/unfollow',
        method: 'DELETE',
        body: JSON.stringify(data),
      }),
  };
}

export const API = new Api_Service();
