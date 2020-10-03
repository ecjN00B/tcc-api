import dotenv from 'dotenv'
dotenv.config()

export default {
  port: process.env.PORT || 3000,
  watsonAssistantApiKey: process.env.ASSISTANT_API_KEY,
  watsonAssistantUrl: process.env.ASSISTANT_URL,
  watsonAssistantVersion: process.env.ASSISTANT_VERSION,
  watsonAssistantWorkspaceId: process.env.ASSISTANT_WORKSPACE
}