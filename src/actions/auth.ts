import {Server as appServer} from '@helpers/server';

export const login = (authCode: string) => {
  return appServer('post', 'v1/auth/login', {authCode});
};

export const logout = (accessToken:string) => {
  return appServer('post', 'v1/auth/logout', {access_token: accessToken});
};
