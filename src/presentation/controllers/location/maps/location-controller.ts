import { HttpResponse, HttpRequest, Controller } from './location-protocols'
import { badRequest, serverError } from '../../../helpers/http-helper'
import { Validation } from '../../../protocols'

export class LocationController implements Controller {
    constructor(
        private readonly validation: Validation,
        private readonly maps: any
    ) {}

    async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validation.validate(httpRequest.body)
            if (error) {
                return badRequest(error)
            }
            const {lat, lng} = httpRequest.body
            const places = await this.maps.getNearPlaces(lat, lng)
            return places
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}