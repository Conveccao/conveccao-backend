import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('measurements')
export class Gauged {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'float', nullable:false})
    station_id: number ///

    @Column({type: 'float', nullable:false})
    value: number /// valor medido
    
    @Column({type: 'float', nullable:false})
    date_time: number  //// unixtime???

    /*@ManyToOne(() => Sensor, sensor => sensor.measurements)
    @JoinColumn({name: "id_sensor"})
    sensor: Sensor; //// sensor a qual essa medição pertense*/
    
}