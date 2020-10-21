import { Controller } from '../../../../../presentation/protocols'
import { makeWatsonAudioMessageValidation } from './watson-audio-message-validation-factory'
import { WatsonMessageAdapter } from '../../../../adapters/watson-message-adapter'
import { GoogleSttAdapter } from '../../../../../infra/stt/google-stt-adapter'
import { WatsonAudioMessageController } from '../../../../../presentation/controllers/watson/watson-audio-message/watson-audio-message-controller'

export const makeWatsonWithSttController = (): Controller => {
    const watsonMessage = new WatsonMessageAdapter()
    const googleStt = new GoogleSttAdapter()
    return new WatsonAudioMessageController(makeWatsonAudioMessageValidation(), watsonMessage, googleStt)
}