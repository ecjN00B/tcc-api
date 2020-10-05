import { Authentication, AuthenticationParams, LoadAccountByMailRepository, HashComparer, Encrypter, UpdateAccessTokenRepository, AuthenticationModel } from './db-authentication-protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByMailRepository: LoadAccountByMailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {}

  async auth (authenticationParams: AuthenticationParams): Promise<AuthenticationModel> {
    const account = await this.loadAccountByMailRepository.loadByMail(authenticationParams.mail)
    if (account) {
      const isValid = await this.hashComparer.compare(authenticationParams.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        await this.updateAccessTokenRepository.updateAccessToken(account.id, accessToken)
        return {
          accessToken,
          name: account.username
        }
      }
    }
    return null
  }
}