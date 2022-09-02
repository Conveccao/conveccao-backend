import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sensor } from "./Sensor";

@Entity('stations')
export class Station {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'float', nullable:false}) /// nullable false => não pode ter valor vazio/NULL
    lat: number

    @Column({type: 'float', nullable:false})
    lon: number

    @Column({length:150, nullable:false}) 
    reference: string     ///referencia de onde esta a estação, tipo endereço,

    @OneToMany(() => Sensor, sensor => sensor.station)
    sensors: Sensor[]

}