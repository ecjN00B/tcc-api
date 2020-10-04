import { HttpResponse } from "../../../../presentation/protocols";

export interface WatsonMessage {
    sendMessage (userId: string, message: string): Promise<HttpResponse>
}