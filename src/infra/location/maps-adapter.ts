import env from '../../main/config/env'
import { HttpResponse } from '../../presentation/protocols';
import { AxiosAdapter } from '../request/axios-adapter'

export class MapsAdapter {
    async getNearPlaces (lat, lng): Promise<HttpResponse> {
        const path = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1500&type=establishment&key=${env.mapsApiKey}`;
        const request = new AxiosAdapter()
        const places = await request.send(
            path,
            "GET"
        )
        return places;
    }
}