import { Router } from 'express'
import { makeWatsonWebhookController } from '../factories/watson-webhook-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/watson/webhook', adaptRoute(makeWatsonWebhookController()))
}