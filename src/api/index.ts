import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  LibraryAddPayload,
  LibraryCheckPayload,
  LibraryCheckResponse,
  LibraryDto,
  LibraryRemovePayload,
  LibraryRemoveResponse,
} from './dto/library';
import { AuthUserDto, AuthUserPayload } from './dto/auth';
import { PersonalDto } from './dto/personal';
import { AlbumPageDto } from './dto/album';
import { ArtistBioDto, ArtistPageDto } from './dto/artist';
import { PlaylistPageDto } from './dto/playlist';
import { SearchDto } from './dto/search';
import { UserPageDto } from './dto/user';
import { PlayDto, PlayDtoPayload } from './dto/play';

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
    verify: () =>
      this.request<AuthUserDto>({
        path: '/auth/verify',
        method: 'GET',
      }),
  };

  albums = {
    page: (id: string) =>
      this.request<AlbumPageDto>({
        path: `/album/${id}`,
        method: 'GET',
      }),
  };
  artists = {
    page: (id: string) =>
      this.request<ArtistPageDto>({
        path: `/artist/${id}`,
        method: 'GET',
      }),
    bio: (id: string) =>
      this.request<ArtistBioDto>({
        path: `/artist/${id}/bio`,
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
    check: (target: LibraryCheckPayload) =>
      this.request<LibraryCheckResponse>({
        path: `/library/check/${target}`,
        method: 'GET',
      }),
    add: ({ target, type }: LibraryAddPayload) =>
      this.request<LibraryCheckResponse>({
        path: `/library/add`,
        method: 'POST',
        body: { target, type },
      }),
    remove: ({ target, type }: LibraryRemovePayload) =>
      this.request<LibraryRemoveResponse>({
        path: `/library/remove`,
        method: 'POST',
        body: { target, type },
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

  play = {
    get: ({ type, _id }: PlayDtoPayload) =>
      this.request<PlayDto>({
        path: `/play/${type}/${_id}`,
        method: 'GET',
      }),
    liked: () =>
      this.request<PlayDto>({
        path: `/play/liked`,
        method: 'GET',
      }),
  };
}

export const API = new Api_Service();
