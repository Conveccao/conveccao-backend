import { Request, Response } from "express";
import { sensorTypeRepository } from "../repositories/sensorTypeRepository";

export class SensorTypeControllers{

    //TODO
    async create(req: Request, res: Response){
        //cria uma estação
        const {name, description, unit1,  factor1, offset1, unit2, factor2, offset2, reference, min, max}=req.body

        if(!name || !description || !unit1 || !factor1 || !offset1 || !unit2 || !factor2 || !offset2 || !reference || !min || !max){
            return res.status(404).json({message:"Todos os dados são obrigatórios"})
        }

        try {
            const newSensorType = sensorTypeRepository.create({name, description, unit1,  factor1, offset1, unit2, factor2, offset2, reference, min, max})

            await sensorTypeRepository.save(newSensorType)

            return res.status(201).json(newSensorType)

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

     async get(req: Request, res: Response){
        //resgata todas as estações
        try{
            const sensorsType = await sensorTypeRepository.find();
            res.json(sensorsType);

        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})

        }
    }
}