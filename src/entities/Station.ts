import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('stations')
export class Station {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'float', nullable:false}) /// nullable false => não pode ter valor vazio/NULL
    lat: number

    @Column({type: 'float', nullable:false})
    lon: number

    @Column({type: 'text', nullable:false}) 
    reference: string     ///referencia de onde esta a estação, tipo endereço,
}