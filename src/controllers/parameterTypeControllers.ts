import { Request, Response } from "express";
import { parameterTypeRepository } from "../repositories/parameterTypeRepository";

export class ParameterTypeControllers{

    //TODO
    async create(req: Request, res: Response){
        //cria uma estação
        const {name, description, unit1,  factor1, offset1, unit2, factor2, offset2, reference, min, max}=req.body

        if(!name || !description || !unit1 || !factor1 || !offset1 ){
            return res.status(404).json({message:"Todos os dados são obrigatórios"})
        }

        try {
            const newParameterType = parameterTypeRepository.create({name, description, unit1,  factor1, offset1, unit2, factor2, offset2, reference, min, max})

            await parameterTypeRepository.save(newParameterType)

            return res.status(201).json(newParameterType)

        }catch(error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

     async get(req: Request, res: Response){
        //resgata todas as estações
        try{
            const parametersType = await parameterTypeRepository.find();
            res.json(parametersType);

        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})

        }
    }
}