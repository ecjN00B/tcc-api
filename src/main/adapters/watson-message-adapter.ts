import env from '../config/env'
import AssistantV1 from 'ibm-watson/assistant/v1'
import { IamAuthenticator } from 'ibm-watson/auth'

export class WatsonMessageAdapter {
    async sendMessage(userId, watsonMessage) {
        const assistant = new AssistantV1({
            authenticator: new IamAuthenticator({apikey: env.watsonAssistantApiKey}),
            serviceUrl: env.watsonAssistantUrl,
            version: env.watsonAssistantVersion
        })
        return await assistant.message({
            input: {
                text: watsonMessage
            },
            workspaceId: env.watsonAssistantWorkspaceId
        }).then((response) => {
            const output = response.result.output.generic
            return {
                statusCode: 200,
                body: {
                    response: output,
                    isLocation: false,
                    lat: 0,
                    lng: 0
                }
            }
        })
        .catch(error => ({
            statusCode: 500,
            body: error
        }))
    }
}