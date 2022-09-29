import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parameters')
export class Parameter {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'float', nullable:false})
    station_id: number

    @Column({type: 'float', nullable:false})
    parameterType_id: number

    /*@ManyToOne(() => Station, station => station.parameters)
    @JoinColumn({name: "station_id"})
    station: Station /// qual estacao pertence

    @ManyToOne(() =>parameterType, parameterType => parameterType.parameters)
    @JoinColumn({name: "parameterType_id"})
    parameterType: ParameterType*/

}
/// por favor não apagar
/// exemplo de relação muitos para muitos caso precise 

/* @ManyToMany(() => Room, room => room.subjects)
	@JoinTable({
		name: 'room_subject',
		joinColumn: {
			name: 'room_id',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'subject_id',
			referencedColumnName: 'id',
		},
	})
	rooms: Room[]
*/