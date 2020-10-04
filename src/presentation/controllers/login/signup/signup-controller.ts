import { HttpResponse, HttpRequest, Controller, AddAccount } from './signup-protocols'
import { Validation } from '../../../protocols'
import { badRequest, conflict, created, serverError } from '../../../helpers/http-helper'

export class SignUpController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addAccount: AddAccount
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try{
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const {firstName, lastName, mail, country, state, city, phone, username, password} = httpRequest.body
      const account = await this.addAccount.add({
        firstName,
        lastName,
        mail,
        country,
        state,
        city,
        phone,
        username,
        password
      })
      if(account) {
        return created(account)
      }
      return conflict(new Error('Account already exists'))
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}