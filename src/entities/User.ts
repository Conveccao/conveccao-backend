import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ERole } from "./ERole";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @Column({type: 'text', unique: true})
    email: string

    @Column({type: 'text'})
    photo: string

    @Column({type: 'text', nullable: false})
    role: ERole
}