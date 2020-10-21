import env from '../../main/config/env'
import { AxiosAdapter } from '../request/axios-adapter'

export class GoogleSttAdapter {
    async recognize (audio: string): Promise<string> {
        const path = `https://speech.googleapis.com/v1/speech:recognize?key=${env.sttApiKey}`;
        const request = new AxiosAdapter()
        const body = {
            config: {
                languageCode: "pt-BR",
                enableAutomaticPunctuation: true
            },
            audio: {
                content: audio
            }
        }
        const transcriptionObj = await request.send(
            path,
            "POST",
            body
        )
        if(transcriptionObj.body.results) {
            return transcriptionObj.body.results[0].alternatives[0].transcript
        }
        return "";
    }
}