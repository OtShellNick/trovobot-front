import {Server as appServer} from '@helpers/server';

export const getSelf = () => {
  return appServer('get', 'user/v1/user/me');
};
