import { HttpResponse, HttpRequest, Controller } from './watson-message-protocols'
import { MissingParamError } from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'
import { WatsonMessage } from '../../../domain/usecases/watson-webhook/watson-message'
import { ok } from 'assert'

export class WatsonMessageController implements Controller {
    constructor(private readonly watsonMessage: WatsonMessage) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const requiredFields = ['userId', 'message']
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                   return badRequest(new MissingParamError(field))
                }
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