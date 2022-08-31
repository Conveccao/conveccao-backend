import { Request, Response } from "express";
import { stationRepository } from "../repositories/stationRepository";

export class StationControllers{
    async create(req: Request, res: Response){
        //cria uma estação
        const {lat, lon, reference} =req.body

        if(!lat || !lon){
            return res.status(404).json({message:"Latitude e/ou Longitude é obrigatório"})
        }

        try {
            const newStation = stationRepository.create({lat, lon, reference })

            await stationRepository.save(newStation)

            return res.status(201).json(newStation)

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
}