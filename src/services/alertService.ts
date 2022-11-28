import { Alert } from "../entities/Alert";
import { AlertMapper } from "../mappers/alertMapper";
import { AlertDto } from "../models/AlertDto";
import { alertRepository } from "../repositories/alertRepository";

export class AlertService {

    async createAlert(alertDto: AlertDto){
        
        const alert: Alert = new Alert()
        const mapper: AlertMapper = new AlertMapper()
        mapper.mapAlert(alertDto, alert)

        const newAlert = alertRepository.create(alert)
        await alertRepository.save(newAlert)
    }
}