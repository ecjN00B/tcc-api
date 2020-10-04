import { AccountModel } from "../../../../domain/models/account-model";

export interface LoadAccountByMailRepository {
  loadByMail (mail: string): Promise<AccountModel>
}