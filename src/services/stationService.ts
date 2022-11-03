import { stationRepository } from "../repositories/stationRepository";

export default class StationService{

    public async findStationById(id: number){
        const station = await stationRepository.findOneBy({
            id: id
        })
        return station
    }
}