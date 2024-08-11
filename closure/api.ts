const apiConfigModule = (initialConfig: { [key: string]: any }) => {
  let config = { ...initialConfig };
  return {
    setBaseUrl: (url: string) => {
      config.baseUrl = url;
      console.log(`API Base Url is updated to ${config.baseUrl}`);
    },
    setToken: (token: string) => {
      config.token = token;
      console.log(`API Token is updated to ${config.token}`);
    },
    getToken: () => {
      return config.token;
    },
    setTimeout: (time: number) => {
      config.timeout = time;
      console.log(`API Timeout is updated to ${config.timeout}ms`);
    },
  };
};

const initialConfig = {
  baseUrl: "www.google.com",
  token: "",
  time: 0,
};
const apiConfig = apiConfigModule(initialConfig);

apiConfig.setBaseUrl("https://api.example.com");
