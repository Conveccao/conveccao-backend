import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('alerts')
export class Alert{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    occurrence: string

    @Column({type: 'text'})
    place: string

    @Column({type: 'text'})
    date: string

    @Column({type: 'text'})
    hour: string
}