import http from '../index'
export interface Response {
  id: number
  title: string
}
export interface ResponseResult {
	result: Response[]
	item: string;
}

export const getFruits = async () => {
	return http.get<ResponseResult>('/api/list')
}
