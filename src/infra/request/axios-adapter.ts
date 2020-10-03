import axios from 'axios'
import { HttpResponse } from '../../presentation/protocols';

export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

export class AxiosAdapter {
    async send (path: string, method: Method, body?: string): Promise<HttpResponse> {
        return await axios({
            method: method,
            url: path,
            data: body
        }).then(async (axiosResponse) => {
            const response: HttpResponse = {
                statusCode: axiosResponse.status,
                body: axiosResponse.data
            }
            return response
        }).catch((error) => {
            if(error.response) {
                const response: HttpResponse = {
                    statusCode: error.response.status,
                    body: error.response.data
                }
                return response
            }
            return null
        })
    }
}