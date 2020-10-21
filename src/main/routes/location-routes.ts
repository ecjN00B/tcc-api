import { Router } from 'express'
import { makeLocationController } from '../factories/controllers/location/maps/location-factory'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/location', adaptRoute(makeLocationController()))
}