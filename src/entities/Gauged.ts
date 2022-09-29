import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('measurements')
export class Gauged {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'float', nullable:false})
    parameter_id: number ///

    @Column({type: 'float', nullable:false})
    value: number /// valor medido
    
    @Column({type: 'float', nullable:false})
    date_time: number  //// unixtime???

    /*@ManyToOne(() => Parameter, parameter => parameter.measurements)
    @JoinColumn({name: "id_parameter"})
    parameter: Parameter; //// parâmetro ao qual essa medição pertense*/
    
}