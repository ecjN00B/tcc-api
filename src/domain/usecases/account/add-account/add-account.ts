import { AccountModel } from '../../../models/account-model'

export interface AddAccountModel {
  firstName: string
  lastName: string
  mail: string
  country: string
  state: string
  city: string
  phone: string
  username: string
  password: string
}

export interface AddAccount {
  add (account: AddAccountModel): Promise<AccountModel>
}