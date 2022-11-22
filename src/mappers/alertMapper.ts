import { Alert } from "../entities/Alert";
import { AlertDto } from "../models/AlertDto";

export class AlertMapper {
    public mapAlert(alertDto: AlertDto, alert: Alert) {
        alert.occurrence = alertDto._occurrence
        alert.place = alertDto._place
        alert.date = alertDto._date
        alert.hour = alertDto._hour
    }
}