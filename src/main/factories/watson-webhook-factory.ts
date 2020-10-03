import { AxiosAdapter } from '../../infra/request/axios-adapter'
import { WatsonWebhookController } from '../../presentation/controllers/watson/watson-webhook'
import { Controller } from '../../presentation/protocols'

export const makeWatsonWebhookController = (): Controller => {
    const request = new AxiosAdapter()
    return new WatsonWebhookController(request)
}