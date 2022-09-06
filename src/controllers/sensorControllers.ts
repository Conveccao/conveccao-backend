import { Request, Response } from "express";
import { sensorRepository } from "../repositories/sensorRepository";

export class SensorControllers{

    //TODO
    async get(req: Request, res: Response){
        //resgata todas as estações
        try{
            const sensors = await sensorRepository.find();
            res.json(sensors);

        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})

        }
    }

    //TODO
    async getById(req: Request, res: Response){
        //Resgata estação por ID
        try{
            const sensor = await sensorRepository.findOneBy({
                id: parseInt(req.params.id)
            })
            return res.send(sensor);
        } catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async create(req: Request, res: Response){
        //cria uma estação
        const {station_id, sensorType_id, description, model, minrange, maxrange, accurace, startdate, enddate} =req.body

        if(!station_id || !sensorType_id || !description){
            return res.status(404).json({message:"Campos Estação, Tipo de Sensor e Descrição são obrigatórios"})
        }

        try {
            const newSensor = sensorRepository.create({station_id, sensorType_id, description, model, minrange, maxrange, accurace, startdate, enddate})

            await sensorRepository.save(newSensor)

            return res.status(201).json(newSensor)

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async delete(req: Request, res: Response){
        //deleta uma estação
        try{
            const sensor = await sensorRepository.delete({
                id: parseInt(req.params.id)
            })
            return res.send(sensor);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async put(req: Request, res: Response){
        try{
            const {id, station_id, sensorType_id, description, model, minrange, maxrange, accurace, startdate, enddate} =req.body

            if(!id || !station_id || !sensorType_id || !description){
            return res.status(404).json({message:"Campos código do Sensor, Estação, Tipo de Sensor e Descrição são obrigatórios"})
        }
            const sensor = await sensorRepository.findOneBy({
                id: parseInt(req.params.id)
            })

            if (id == sensor?.id) {

            }

            
         
            return res.send(sensor);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
        
    }
}