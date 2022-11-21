import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity('alerts')
export class Alert {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable:false})
    occurrence: string
    
    @Column({type: 'text', nullable:false})
    place: string

    @Column({type: 'text'})
    date: string
    
    @Column({type: 'text'})
    hour: string
}