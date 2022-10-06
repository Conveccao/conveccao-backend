import { Request, Response } from "express";
import { stationRepository } from "../repositories/stationRepository";

export class StationControllers{

    async get(req: Request, res: Response){
        //resgata todas as estações
        try{
            const stations = await stationRepository.find({
                relations:{
                    parameters: true
                }
            });
            res.json(stations);

        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})

        }
    }

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
        const {installation_date, name, lat, lon, reference} =req.body

        if(!installation_date || !name || !lat || !lon || !reference){
            return res.status(404).json({message:"Todos os dados são obrigatórios"})
        }

        try {
            const newStation = stationRepository.create({installation_date, name, lat, lon, reference})

            await stationRepository.save(newStation)

            return res.status(201).json(newStation)

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async delete(req: Request, res: Response){
        //deleta uma estação
        try{
            const station = await stationRepository.delete({
                id: parseInt(req.params.id)
            })
            return res.send(station);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async update(req: Request, res: Response){
        //atualiza uma estação
        let result = null;
        try{
            const station = await stationRepository.findOneBy({
                id: parseInt(req.params.id)
            })

            if (station != null){
                stationRepository.merge(station, req.body)
                result = await stationRepository.save(station)
            }
            return res.send(result);
            
        } catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }
}