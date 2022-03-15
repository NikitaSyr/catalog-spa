import axios, {AxiosInstance, AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
    baseURL: `https://appevent.ru/dev/task1/`,
};
const instance: AxiosInstance = axios.create(config);


export const catalogAPI = {
    async getNewItems() {
        const response = await instance.get(`catalog`);
        return response.data.items;
    },

}
