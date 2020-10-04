import { SignUpController } from '../../../../../presentation/controllers/login/signup'
import { DbAddAccount } from '../../../../../data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '../../../../../infra/criptography/bcrypt/bcrypt-adapter'
import { MongoAccountRepository } from '../../../../../infra/db/mongodb/account-repository/mongo-account-repository'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): SignUpController => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const mongoAccountRepository = new MongoAccountRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, mongoAccountRepository, mongoAccountRepository)
  return new SignUpController(makeSignUpValidation(), dbAddAccount)
}