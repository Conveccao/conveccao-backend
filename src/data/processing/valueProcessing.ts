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
        where: {
            id: value.station_id
        },
        relations: {
            parameters: true
        }
    })
    const parameterTypes = await parameterTypeRepository.find()
    let parametersList
    if (station != null) {

        if (station.parameters != undefined) {
            parametersList = await newParameterList(station.parameters)
        }

        parametersList?.forEach(parameter => {
            let parameterType = parameter.parameterType
            let typeValue = verifyParameterType(parameterType, value, station.name)
            if (typeValue != null) {
                createMeasurement(parameter, typeValue, value.unixtime)
            }
        })

    } else {
        console.log(`Estação ${value.station_id} não encontrada.`)
    }
}

function verifyParameterType(parameterType: ParameterType, value: IValue, station_name: string) {
    let type = parameterType.reference
    const alertService = new AlertService()

    if (type === "temp" && value.temp != null) { //33 e 10
        verifyValues(value.temp, 33, 10, "Temperatura", station_name, alertService)
        return value.temp
    }

    if (type === "umid" && value.umid != null) {
        verifyValues(value.temp, 75, 30, "Umidade", station_name, alertService)
        return value.umid
    }
    if (type === "vent" && value.vent != null) return value.vent
    if (type === "pluv" && value.pluv != null) {
        verifyValuesPluv(value.pluv, station_name, alertService)
        return value.pluv
    }
    if (type === "v_vent" && value.vvent != null) {
        verifyValues(value.vvent, 0, 60, "Velocidade do vento", station_name, alertService)
        return value.vvent
    }
    if (type === "d_vent" && value.dvent != null) return value.dvent
    return null
}

function verifyValues(value: number, min_value: number, max_value: number, parameterType_name: string, station_name: string, alert_service: AlertService) {
    const date = new Date()
    const formatedDate = formatDate(date)
    const formatedHours = formatDateHours(date)
    if (value > max_value) {
        const alert = new AlertDto(`${parameterType_name} muito alta`, station_name, formatedDate, formatedHours)
        alert_service.createAlert(alert)
    } else if (value < min_value) {
        const alert = new AlertDto(`${parameterType_name} muito baixa`, station_name, formatedDate, formatedHours)
        alert_service.createAlert(alert)
    }
}

function verifyValuesPluv(value: number, station_name: string, alert_service: AlertService) {
    const date = new Date()
    const formatedDate = formatDate(date)
    const formatedHours = formatDateHours(date)
    if (value > 200) {
        const alert = new AlertDto(`Quantidade de chuvas muito alta, risco de deslizamentos`, station_name, formatedDate, formatedHours)
        alert_service.createAlert(alert)
    } else if (value < 10) {
        const alert = new AlertDto(`Quantidade de chuvas muito baixa`, station_name, formatedDate, formatedHours)
        alert_service.createAlert(alert)
    }
}

async function newParameterList(parameters: Parameter[]) {
    const allParams = await parameterRepository.find({
        relations: {
            parameterType: true
        }
    })

    let newParamList: Parameter[] = []
    allParams.forEach(param => {
        parameters.forEach(parameter => {
            if (param.id == parameter.id) {
                newParamList.push(param)
            }
        })
    })

    return newParamList
}

async function createMeasurement(parameter: Parameter, value: number, date_time: number) {
    let Measurement = gaugedRepository.create({ parameter, value, date_time })
    await gaugedRepository.save(Measurement)
}

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
    return (
        [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
        ].join('-')
    );
}

function formatDateHours(date: Date) {
    return (
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
        ].join(':')
    )
}