import { DbAddAccount } from '../../../../../data/usecases/account/add-account/db-add-account'
import { BcryptAdapter } from '../../../../../infra/criptography/bcrypt/bcrypt-adapter'
import { Controller } from '../../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { MongoAccountRepository } from '../../../../../infra/db/mongodb/account-repository/mongo-account-repository'
import { SignUpController } from '../../../../../presentation/controllers/login/signup/signup-controller'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const mongoAccountRepository = new MongoAccountRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, mongoAccountRepository, mongoAccountRepository)
  return new SignUpController(makeSignUpValidation(), dbAddAccount)
}