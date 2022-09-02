import { Request, Response } from "express";
import { sensorTypeRepository } from "../repositories/sensorTypeRepository";

export class SensorTypeControllers{

    //TODO
    async create(req: Request, res: Response){
        //cria uma estação
        const {name, description, factor, primary_measure, secondary_measure}=req.body

        if(!name || !description || !factor || !primary_measure ){
            return res.status(404).json({message:"Nome, descrição, factor e unidade primaria de medida é obrigatório"})
        }

        try {
            const newSensorType = sensorTypeRepository.create({name, description, factor, primary_measure, secondary_measure})

            await sensorTypeRepository.save(newSensorType)

            return res.status(201).json(newSensorType)

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
}