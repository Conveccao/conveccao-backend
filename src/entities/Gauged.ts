import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sensor } from "./Sensor";

@Entity('measurements')
export class Gauged {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => Sensor, sensor => sensor.measurements)
    @JoinColumn({name: "id_sensor"})
    sensor: Sensor; //// sensor a qual essa medição pertense

    @Column({type: 'float', nullable:false})
    value: number /// valor medido
    
    @Column({type: 'float', nullable:false})
    date_time: number  //// unixtime???
    
}