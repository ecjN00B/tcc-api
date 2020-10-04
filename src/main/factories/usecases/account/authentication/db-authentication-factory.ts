import env from '../../../../../main/config/env'
import { MongoAccountRepository } from '../../../../../infra/db/mongodb/account-repository/mongo-account-repository'
import { Authentication } from '../../../../../domain/usecases/account/authentication/authentication'
import { BcryptAdapter } from '../../../../../infra/criptography/bcrypt/bcrypt-adapter'
import { DbAuthentication } from '../../../../../data/usecases/account/authentication/db-authentication'
import { JwtAdapter } from '../../../../../infra/criptography/jwt-adapter/jwt-adapter'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const mongoAccountRepository = new MongoAccountRepository()
  return new DbAuthentication(mongoAccountRepository, bcryptAdapter, jwtAdapter, mongoAccountRepository)
}