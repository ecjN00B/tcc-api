import { HttpResponse, HttpRequest, Controller } from './watson-message-protocols'
import { badRequest, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols'
import { WatsonMessage } from '../../../../domain/usecases/watson/watson-message/watson-message'

export class WatsonMessageController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly watsonMessage: WatsonMessage
    ) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {userId, message} = httpRequest.body
            const response = await this.watsonMessage.sendMessage(
                userId, //get
                message
            )
            return response
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}