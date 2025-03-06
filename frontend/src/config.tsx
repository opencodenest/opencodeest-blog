interface Config {
  apiUrl: string;
}

const config: Config = {
  apiUrl:
    typeof process !== 'undefined' && process.env.REACT_APP_API_URL
      ? process.env.REACT_APP_API_URL
      : 'https://blog.opencodenest.org/api',
};

export default config;