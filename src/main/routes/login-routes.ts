import { Router } from 'express'
import { makeSignUpController } from '../factories/controllers/login/signup/signup-factory'
import { makeLoginController } from '../factories/controllers/login/login/login-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/login', adaptRoute(makeLoginController()))
  router.post('/signup', adaptRoute(makeSignUpController()))
}