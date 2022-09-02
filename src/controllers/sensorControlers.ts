import { Request, Response } from "express";
import { sensorRepository } from "../repositories/sensorRepository";

export class SensorControllers{

    //TODO
    async create(req: Request, res: Response){
        //cria uma estação
        const {sensorType_id, station_id, description, model, minrange, maxrange, accurace, startdate, enddate}=req.body

        if(!sensorType_id || !station_id || !description){
            return res.status(404).json({message:"Tipo de estação, Estação e descrição são obrigatórios"})
        }

        try {
            const newSensor = sensorRepository.create({description, model, minrange, maxrange, accurace, startdate, enddate})

            await sensorRepository.save(newSensor)

            return res.status(201).json(newSensor)

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
}