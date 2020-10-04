import { Controller } from '../../../../../presentation/protocols'
import { makeDbAuthentication } from '../../../../../main/factories/usecases/account/authentication/db-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'
import { LoginController } from '../../../../../presentation/controllers/login/login/login-controller'

export const makeLoginController = (): Controller => {
  return new LoginController(makeDbAuthentication(), makeLoginValidation())
}