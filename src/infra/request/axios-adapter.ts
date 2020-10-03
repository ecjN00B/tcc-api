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
        const axiosResponse = axios({
            method: method,
            url: path,
            data: body
        })
        const response: HttpResponse = {
            statusCode: (await axiosResponse).status,
            body: (await axiosResponse).data
        }
        return response
    }
}