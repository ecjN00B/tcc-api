import { Controller, HttpRequest, HttpResponse, Authentication, Validation } from './login-protocols'
import { badRequest, serverError, unauthorized, ok } from '../../../../presentation/helpers/http-helper'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { mail, password } = httpRequest.body
      const authenticationModel = await this.authentication.auth({
        mail,
        password
      })
      if (!authenticationModel) {
        return unauthorized()
      }
      return ok(authenticationModel)
    } catch (error) {
      return serverError()
    }
  }
}