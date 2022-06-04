interface IConfig {
    production: IRoute,
    development: IRoute
}

interface IRoute {
    REST: string;
    SOCKET: string;
}

export const CONFIG: IConfig = {
  production: {
    REST: 'https://mmochat.online/',
    SOCKET: 'wss://mmochat.online/',
  },
  development: {
    REST: 'http://localhost:4112/',
    SOCKET: 'ws://localhost:4112/',
  },
};
