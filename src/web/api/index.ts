import axios, { AxiosResponse } from 'axios'

// 扩展AxiosRequestConfig 中的字段
declare module 'axios' {
  interface AxiosRequestConfig {
    schemaKey?: string
  }
}

export interface HttpError extends Error {
  response?: AxiosResponse
}

export interface Headers {
  [name: string]: string | number
}

let headers: Headers | undefined

async function handlerError(message?: string, response?: AxiosResponse) {
	
  const error: HttpError = new Error(message)
  error.response = response
  return Promise.reject(error)
}

const responseDefaultFormat = (response: AxiosResponse) => {
	const { data } = response
	
	console.log('data',response)

	const {status} = response
	const {errorMessage,msg,errorCode} = data

  if (status) {
    return data
  }
  return handlerError(errorMessage || msg || errorCode || '网络错误', response)
}

const http = axios.create({})

http.interceptors.request.use(config => {
  config.headers = {
    'content-type': 'application/json',
    ...config.headers,
    ...headers
  }
  return config
})

http.interceptors.response.use(response => {
  return responseDefaultFormat(response)
})

export default http
