import { AuthenticationModel } from '../../../models/authentication'

export type AuthenticationParams = {
  mail: string
  password: string
}

export interface Authentication {
  auth: (authenticationParams: AuthenticationParams) => Promise<AuthenticationModel>
}