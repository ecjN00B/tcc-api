import { HttpResponse, HttpRequest, Controller, Request } from './watson-webhook-protocols'
import { MissingParamError, InvalidParamError } from '../../errors'
import { badRequest, serverError, ok, unprocessable } from '../../helpers/http-helper'

export class WatsonWebhookController implements Controller {
    constructor(private readonly request: Request) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const requiredFields = ['method', 'path']
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                   return badRequest(new MissingParamError(field))
                }
            }
            const {path, method, body} = httpRequest.body
            const request = await this.request.send(
                path,
                method,
                body
            )
            return request
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}