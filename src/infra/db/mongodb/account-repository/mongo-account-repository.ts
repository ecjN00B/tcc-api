import { AddAccountRepository } from '../../../../data/protocols/db/account/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account/add-account'
import { AccountModel } from '../../../../domain/models/account-model'
import { MongoHelper } from '../helpers/mongo-helper'
import { LoadAccountByMailRepository } from '../../../../data/protocols/db/account/load-account-by-mail-repository'


export class MongoAccountRepository implements AddAccountRepository, LoadAccountByMailRepository {

  async add (accountData: AddAccountModel): Promise<AccountModel>{
    const accountCollection = await MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = MongoHelper.map(result.ops[0])
    return new Promise(resolve => resolve(account))
  }

  async loadByMail (mail: string): Promise<AccountModel> {
    const accountCollection = await MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({mail})
    return new Promise(resolve => resolve(account && MongoHelper.map(account)))
  }

}