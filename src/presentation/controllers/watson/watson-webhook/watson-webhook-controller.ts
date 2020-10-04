import { HttpResponse, HttpRequest, Controller, Request } from './watson-webhook-protocols'
import { badRequest, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols'

export class WatsonWebhookController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly request: Request
    ) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
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