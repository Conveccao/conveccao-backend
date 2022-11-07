import {Request, Response} from "express"
import { Gauged } from "../entities/Gauged"
import { Parameter } from "../entities/Parameter"
import { ParameterType } from "../entities/ParameterType"
import { Station } from "../entities/Station"
import { parameterRepository } from "../repositories/parameterRepository"
import { stationRepository } from "../repositories/stationRepository"

export default class CsvController{
    async buildCsv(req: Request, res: Response){
        try {
            const stationId: number = parseInt(req.params.id)
            const csvDataList: object[] = []

            const stations: Station[] = await stationRepository.find({
                relations:{
                    parameters: true
                }
            })

            const parameters: Parameter[] = await parameterRepository.find({
                relations:{
                    parameterType: true,
                    measurements: true
                }
            })

            stations.forEach(station => {
                if(station.id === stationId){
                    const stationInstallDate: string = station.installation_date
                    const stationParameters: Parameter[] = station.parameters
                    stationParameters.forEach(stationParameter => {
                        parameters.forEach(parameter => {
                            if(stationParameter.id === parameter.id){
                                const parameterType: ParameterType = parameter.parameterType
                                const parameterUnit: string = parameterType.unit1
                                const parameterMeasures: Gauged[] = parameter.measurements
                                parameterMeasures.forEach(measure => {
                                    const measureValue: number = measure.value
                                    const measureTime: number = measure.date_time
                                    const csvData: object = {station, stationInstallDate, measureTime, parameter, parameterUnit, measureValue}
                                    csvDataList.push(csvData)
                                })
                            }
                        })
                    })
                }
            })

            return res.status(200).json(csvDataList)
        } catch (error) {
            console.log(error)
            return res.status(400).json(error)
        }
    }
}