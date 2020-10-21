import { MapsAdapter } from '../../../../../infra/location/maps-adapter'
import { LocationController } from '../../../../../presentation/controllers/location/maps/location-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLocationValidation } from './location-validation-factory'

export const makeLocationController = (): Controller => {
    const maps = new MapsAdapter()
    return new LocationController(makeLocationValidation(), maps)
}