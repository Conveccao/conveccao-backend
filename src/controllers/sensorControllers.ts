import { Request, Response } from "express";
import { Sensor } from "../entities/Sensor";
import { SensorType } from "../entities/SensorType";
import { Station } from "../entities/Station";
import { sensorRepository } from "../repositories/sensorRepository";
import { sensorTypeRepository } from "../repositories/sensorTypeRepository";
import { stationRepository } from "../repositories/stationRepository";

export class SensorControllers{

    //TODO
    async create(req: Request, res: Response){
        //cria uma estação
        const {sensorType_id, station_id, description, model, minrange, maxrange, accurace, startdate, enddate}=req.body

        if(!sensorType_id || !station_id || !description){
            return res.status(404).json({message:"Tipo de estação, Estação e descrição são obrigatórios"})
        }

        try {

           let station = await stationRepository.findOneBy({
                id: parseInt(station_id)
            })
            // ta pegando a estação
            console.log(station);

            let sensorType = await sensorTypeRepository.findOneBy({
                id: parseInt(sensorType_id)
            })

            console.log(sensorType);

            let sensor = new Sensor();
            sensor.description =  description
            sensor.model =  model
            sensor.minrange = minrange
            sensor.maxrange = maxrange
            sensor.accurace = accurace
            sensor.startdate = startdate
            sensor.enddate = enddate

            console.log(sensor);

            if (station != null && sensorType != null) {
                station.sensors = [sensor]
                sensor.station = station
                sensor.sensorType = sensorType
                sensorType.sensors = [sensor]
                const newStation = stationRepository.create(station)
                await stationRepository.save(newStation)
                return res.status(201).json(newStation)
            }

            

           // tudo certinho

            /*const newStation = stationRepository.create(station)
            await stationRepository.save(newStation)
            return res.status(201).json(newStation)*/
            


           // await stationRepository.save(station)

            ///console.log(station?.id);
        

           /* const newSensor = sensorRepository.create(sensor)

            await sensorRepository.save(newSensor)

            return res.status(201).json(newSensor)*/
            return res.status(200).json({})

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
}