import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Station} from "../entities/Station"
import { Gauged } from "./Gauged";
import { ParameterType } from "./ParameterType";

@Entity('parameters')
export class Parameter {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:'boolean'})
    active: boolean

    @ManyToOne(() => Station, (station) => station.parameters, {
        onDelete: "CASCADE"
    })
    station: Station

    @ManyToOne(() => ParameterType, (parameterType) => parameterType.parameters, {
        onDelete: "CASCADE"
    })
    parameterType: ParameterType

    @OneToMany(() => Gauged, (measurement) => measurement.parameter)
    measurements: Gauged[]
}