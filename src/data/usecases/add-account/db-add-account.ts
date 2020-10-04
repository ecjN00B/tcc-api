import { AddAccount, AddAccountModel, AccountModel, Encrypter, AddAccountRepository, LoadAccountByMailRepository } from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (private readonly encrypter: Encrypter, private readonly addAccountRepository: AddAccountRepository, private readonly loadAccountByMailRepository: LoadAccountByMailRepository) {}

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    try {
      const account = await this.loadAccountByMailRepository.loadByMail(accountData.mail)
      if (!account) {
        const hashedPassword = await this.encrypter.encrypt(accountData.password)
        const newAccount = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
        return Promise.resolve(newAccount)
      }
      return Promise.resolve(null)
    } catch (error) {
      return Promise.reject()
    }
  }
}