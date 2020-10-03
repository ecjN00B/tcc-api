import { WatsonMessageAdapter } from '../adapters/watson-message-adapter'
import { WatsonMessageController } from '../../presentation/controllers/watson/watson-message'
import { Controller } from '../../presentation/protocols'

export const makeWatsonController = (): Controller => {
    const watsonMessage = new WatsonMessageAdapter()
    return new WatsonMessageController(watsonMessage)
}