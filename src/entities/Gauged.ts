import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Parameter } from "./Parameter";

@Entity('measurements')
export class Gauged {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne((type) => Parameter, {onDelete: "CASCADE"})
    @JoinColumn({
        name: "id",
        referencedColumnName: "id",
        foreignKeyConstraintName: "fk_parameter_id"
    })
    parameter: Parameter///

    @Column({type: 'float', nullable:false})
    value: number /// valor medido
    
    @Column({type: 'float', nullable:false})
    date_time: number  //// unixtime???
    
}