interface Config {
  apiUrl: string;
}

const config: Config = {
  apiUrl:
    typeof process !== 'undefined' && process.env.REACT_APP_API_URL
      ? process.env.REACT_APP_API_URL
      : 'http://localhost:3000/api',
};

export default config;