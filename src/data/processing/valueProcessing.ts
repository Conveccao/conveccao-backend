import { Parameter } from '../../entities/Parameter';
import { ParameterType } from '../../entities/ParameterType';
import Value, { IValue } from '../../models/Value'
import { gaugedRepository } from '../../repositories/gaugedRepository';
import { parameterRepository } from '../../repositories/parameterRepository';
import { parameterTypeRepository } from '../../repositories/parameterTypeRepository';
import { stationRepository } from "../../repositories/stationRepository";

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
    if(type === "temp" && value.temp != null) return value.temp
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