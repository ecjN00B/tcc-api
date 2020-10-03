import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeWatsonController } from '../factories/controllers/watson/watson-message/watson-message-factory'
import { makeWatsonWebhookController } from '../factories/controllers/watson/watson-webhook/watson-webhook-factory'

export default (router: Router): void => {
  router.post('/watson/webhook', adaptRoute(makeWatsonWebhookController()))
  router.post('/watson/message', adaptRoute(makeWatsonController()))
}