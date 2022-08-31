import { Request, Response } from "express";
import { stationRepository } from "../repositories/stationRepository";

export class StationControllers{

    //TODO
    async get(req: Request, res: Response){
        //resgata todas as estações
        try{
            const stations = await stationRepository.find();
            res.json(stations);

        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})

        }
    }

    //TODO
    async getById(req: Request, res: Response){
        //Resgata estação por ID
        try{
            const station = await stationRepository.findOneBy({
                id: parseInt(req.params.id)
            })
            return res.send(station);
        } catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

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