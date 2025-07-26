import axios, { AxiosRequestConfig } from 'axios'
import { requestInterceptor } from 'src/libs/axios/requestInterceptor'
import { responseErrorInterceptor } from 'src/libs/axios/responseErrorInterceptor'
import {
  REQUEST_TOKEN,
  ACCESS_TOKEN,
} from 'src/constants/token/token.constants'
import { Token } from 'src/libs/token/session'

const SERVER_URL = process.env.VITE_SERVER_URL

const createCustomAxiosInstance = (baseUrl?: AxiosRequestConfig) => {
  const basecConfig: AxiosRequestConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
  return axios.create({
    ...basecConfig,
    ...baseUrl,
    withCredentials: true,
  })
}

export const CustomAxios = createCustomAxiosInstance({
  baseURL: SERVER_URL,
  headers: {
    [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`,
  },
})

CustomAxios.interceptors.request.use((res) => res, requestInterceptor)
CustomAxios.interceptors.response.use((res) => res, responseErrorInterceptor)
