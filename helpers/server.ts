import axios from 'axios';
import * as CookieHelper from '@helpers/cookie';
import {CONFIG} from '@config/config';
const server: string = CONFIG.development.REST;
const Authorization = CookieHelper.get('authorization') || '';
axios.defaults.headers.common['authorization'] = Authorization;

export const Server = (
    method: 'get' | 'post' | 'put' | 'delete',
    url: string,
    data?: object,
) => {
  return axios[method](`${server}${url}`, data).then((resp) => {
    if (resp.status === 200) return resp.data;
  });
};
