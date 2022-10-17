import { Station } from "../../entities/Station";


export default class TesteUtil {
    static giveMeaValidStation(): Station{
        const station = new Station();
        station.id = 2;
        station.installation_date = "07/10/2022";
        station.name = "Teste Jest";
        station.lat = 223467706;
        station.lon = 223578817;
        station.reference = "Fatec - estacionamento";
        return station;
    }
}