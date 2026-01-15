import axios, { type AxiosRequestConfig, type AxiosResponse }  from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://api.example.com';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    //add other headers like authorization token here
  },
});

apiClient.interceptors.request.use((config) =>{
    
    const token = localStorage.getItem("authToken");

    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;
});

const _get = <T>(url : string, config: AxiosRequestConfig) : Promise<AxiosResponse<T>> => {
  return apiClient.get<T>(url, config);
};

const _post = <T, D = unknown>(url : string, data?: D, config?: AxiosRequestConfig) : Promise<AxiosResponse<T>> => {
  return apiClient.post<T>(url, data, config);
};

const _put = <T, D = unknown>(url : string, data?:D, config?: AxiosRequestConfig) : Promise<AxiosResponse<T>> => {
  return apiClient.put<T>(url, data, config);
};


const _delete = <T>(url : string, config?: AxiosRequestConfig) : Promise<AxiosResponse<T>> => {
  return apiClient.delete<T>(url, config);
};


// Export API methods
export { _get, _delete, _put, _post };