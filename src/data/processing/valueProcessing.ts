import { Parameter } from '../../entities/Parameter';
import { ParameterType } from '../../entities/ParameterType';
import { AlertDto } from '../../models/AlertDto';
import Value, { IValue } from '../../models/Value'
import { gaugedRepository } from '../../repositories/gaugedRepository';
import { parameterRepository } from '../../repositories/parameterRepository';
import { parameterTypeRepository } from '../../repositories/parameterTypeRepository';
import { stationRepository } from "../../repositories/stationRepository";
import { AlertService } from '../../services/alertService';

export default async function ValueProcessing(value: IValue) {
    const station = await stationRepository.findOne({
        where:{
            id: value.station_id
        },
        relations:{
            parameters: true
        }
    })
    const parameterTypes = await parameterTypeRepository.find()
    let parametersList
    if(station != null){

        if(station.parameters != undefined){
            parametersList = await newParameterList(station.parameters)
        }

        parametersList?.forEach(parameter => {
            let parameterType = parameter.parameterType
            let typeValue = verifyParameterType(parameterType, value)
            if(typeValue != null){
                createMeasurement(parameter, typeValue, value.unixtime)
            }
        })

    } else {
        console.log(`Estação ${value.station_id} não encontrada.`)
    }
}

function verifyParameterType(parameterType: ParameterType, value: IValue){
    let type = parameterType.reference
    const alertService = new AlertService()
    if(type === "temp" && value.temp != null) {
        if(value.temp > 33){
            let tempAlertDto = new AlertDto("Temperatura muito alta", "Campos do Jordão", "22-11-2022", "11:11")
            alertService.createAlert(tempAlertDto)
        } else if (value.temp < 10){
            let tempAlertDto = new AlertDto("Temperatura muito baixa", "Campos do Jordão", "29-11-2022", "11:11")
            alertService.createAlert(tempAlertDto)
        }
        return value.temp
    } 
    if(type === "umid" && value.umid != null) return value.umid
    if(type === "vent" && value.vent != null) return value.vent
    if(type === "pluv" && value.pluv != null) return value.pluv
    if(type === "v_vent" && value.vvent != null) return value.vvent
    if(type === "d_vent" && value.dvent != null) return value.dvent
    return null
}


async function newParameterList(parameters: Parameter[]){
    const allParams = await parameterRepository.find({
        relations: {
            parameterType: true
        }
    })

    let newParamList: Parameter[] = []
    allParams.forEach(param => {
        parameters.forEach(parameter => {
            if(param.id == parameter.id){
                newParamList.push(param)
            }
        })
    })

    return newParamList   
}

async function createMeasurement(parameter: Parameter, value: number, date_time: number){
    let Measurement = gaugedRepository.create({parameter, value, date_time})
    await gaugedRepository.save(Measurement)
}