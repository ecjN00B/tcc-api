import { Controller } from '../../../../../presentation/protocols'
import { makeWatsonMessageValidation } from './watson-message-validation-factory'
import { WatsonMessageAdapter } from '../../../../adapters/watson-message-adapter'
import { WatsonMessageController } from '../../../../../presentation/controllers/watson/watson-message/watson-message-controller'

export const makeWatsonController = (): Controller => {
    const watsonMessage = new WatsonMessageAdapter()
    return new WatsonMessageController(makeWatsonMessageValidation(), watsonMessage)
}