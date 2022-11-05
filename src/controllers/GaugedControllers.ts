import { Request, Response } from "express";
import { gaugedRepository } from "../repositories/gaugedRepository";
import  fs  from "fs";
import * as fastcsv from "fast-csv";
import { stationRepository } from "../repositories/stationRepository";
import { Gauged } from "../entities/Gauged";
import { Parameter } from "../entities/Parameter";
import { parameterRepository } from "../repositories/parameterRepository";
import { Station } from "../entities/Station";

export class GaugedControllers{

    // async createCsv(req: Request, res: Response) {

    //     try {
    //         const jsonData = await stationRepository.find();

    //         const ws = fs.createWriteStream("conveccao_gauged_postgresql.csv");

    //         fastcsv.write(jsonData, {headers: true}).on("finish", function(){
    //             console.log("CSV Criado com sucesso!");
    //         }).pipe(ws);

    //         return res.status(200);

    //     } catch (error) {
    //         return res.status(500);
    //     }
    //}

    async getAllMeasures(req: Request, res: Response){
        try {
            const measures: Gauged[] = await gaugedRepository.find();
            res.json(measures);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"});
        }
    }

    async getAllMeasuresPerStation(req: Request, res: Response){
        try {
            const stationMeasures: Gauged[] = [];
            const parameters: Parameter[] = await parameterRepository.find({
                relations: {
                    station: true
                }
            });
            const measures: Gauged[] = await gaugedRepository.find({
                relations: {
                     parameter: true
                }
            });
            measures.forEach((measure: Gauged) => {
                parameters.forEach((parameter: Parameter) => {
                    if(measure.parameter.id == parameter.id){
                        if(parameter.station.id == parseInt(req.params.id)){
                            stationMeasures.push(measure);
                        }
                    }
                })
            });
            return res.status(200).json(stationMeasures);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"});
        }
    }

    async getAllMeasuresPerStationAndParemeter(req: Request, res: Response){
        try {
            const stationMeasures: Gauged[] = [];
            const parameters: Parameter[] = await parameterRepository.find({
                relations: {
                    station: true,
                    parameterType: true
                }
            });
            const measures: Gauged[] = await gaugedRepository.find({
                relations: {
                     parameter: true
                }
            });
            measures.forEach((measure: Gauged) => {
                parameters.forEach((parameter: Parameter) => {
                    if(measure.parameter.id == parameter.id){
                        if(parameter.station.id == parseInt(req.params.id) && parameter.parameterType.reference == req.params.ref){
                            stationMeasures.push(measure);
                        }
                    }
                })
            });
            return res.status(200).json(stationMeasures);
        } catch (error) {
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"});
        }
    }

    getParametersId = async(id: number) => {
        const parameter = await parameterRepository.findOneBy({
            id: id
        });
        if (parameter) return parameter
        return null
    }
}