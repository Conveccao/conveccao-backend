import { Request, Response } from "express";
import { parameterRepository } from "../repositories/parameterRepository";
import { parameterTypeRepository } from "../repositories/parameterTypeRepository";
import { stationRepository } from "../repositories/stationRepository";

export class ParameterControllers{

    //TODO
    async get(req: Request, res: Response){
        //resgata todas as estações
        try{
            const parameters = await parameterRepository.find({
                relations:{
                    station: true,
                    parameterType: true
                }
            });
            res.json(parameters);

        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    //TODO
    async getById(req: Request, res: Response){
        //Resgata estação por ID
        try{
            const parameter = await parameterRepository.findOneBy({
                id: parseInt(req.params.id)
            })
            return res.send(parameter);
        } catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async create(req: Request, res: Response){
        //cria uma estação
        const {station_id, parameterType_id} = req.body

        if(!station_id || !parameterType_id ){
            return res.status(404).json({message:"Campos Estação e Tipo de parâmetro são obrigatórios"})
        }

        try {
            const station = await stationRepository.findOneById(station_id);
            if (station != null ){
                const parameterType = await parameterTypeRepository.findOneById(parameterType_id)
                if(parameterType != null){
                    const newParameter = parameterRepository.create({station, parameterType})
                    await parameterRepository.save(newParameter)

                    return res.status(201).json(newParameter)
                }
                return res.status(400).json({message: "Id de tipo de parâmetro inserido não existe."})
            } 
            return res.status(400).json({message: "Id de estação inserido não existe."})
            
        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async delete(req: Request, res: Response){
        //deleta uma estação
        try{
            const parameter = await parameterRepository.delete({
                id: parseInt(req.params.id)
            })
            return res.send(parameter);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async put(req: Request, res: Response){
        try{
            const {id, station_id, parameterType_id, description, model, minrange, maxrange, accurace, startdate, enddate} = req.body

            if(!id || !station_id || !parameterType_id || !description){
            return res.status(404).json({message:"Campos código do parâmetro, Estação, Tipo de parameter e Descrição são obrigatórios"})
        }
            const parameter = await parameterRepository.findOneBy({
                id: parseInt(req.params.id)
            })

            if (id == parameter?.id) {
                parameterRepository.merge(station_id, parameterType_id, description, model, minrange, maxrange, accurace, startdate, enddate, req.body)

            }

            return res.send(parameter);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
        
    }
}