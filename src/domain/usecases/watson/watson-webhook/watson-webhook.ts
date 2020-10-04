import { HttpResponse } from "../../../../presentation/protocols";

export interface Request {
    send (path: string, method: string, body?: string): Promise<HttpResponse>
}