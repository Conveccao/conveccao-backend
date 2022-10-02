import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Station} from "../entities/Station"
import { ParameterType } from "./ParameterType";

@Entity('parameters')
export class Parameter {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne((type) => Station, {onDelete: 'CASCADE'})
    @JoinColumn({
        name:"id",
        referencedColumnName: "id",
        foreignKeyConstraintName:"fk_station_id"
    })
    station: Station

    @ManyToOne((type) => ParameterType, {onDelete: "CASCADE"})
    @JoinColumn({
        name: "id",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_parameterType_id"
    })
    parameterType: ParameterType

}