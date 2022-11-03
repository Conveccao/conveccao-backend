import { jsonIgnore } from "json-ignore";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parameter } from "./Parameter";

@Entity('stations')
export class Station {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable:false})
    installation_date: string
    
    @Column({type: 'text', nullable:false})
    name: string

    @Column({type: 'float', nullable:true}) /// nullable false => não pode ter valor vazio/NULL
    lat: number

    @Column({type: 'float', nullable:true})
    lon: number

    @Column({type: 'text', nullable: true})
    link: string

    @Column({type: 'text', nullable:false}) 
    reference: string     ///referencia de onde esta a estação, tipo endereço

    @Column({type: 'boolean', nullable: false})
    active: boolean

    @OneToMany(() => Parameter, (parameter) => parameter.station)
    parameters: Parameter[]

}