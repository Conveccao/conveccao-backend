import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sensors')
export class Sensor {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'float', nullable:false})
    station_id: number

    @Column({type: 'float', nullable:false})
    sensorType_id: number

    /*@ManyToOne(() => Station, station => station.sensors)
    @JoinColumn({name: "station_id"})
    station: Station /// qual estacao pertence

    @ManyToOne(() =>SensorType, sensorType => sensorType.sensors)
    @JoinColumn({name: "sensorType_id"})
    sensorType: SensorType*/

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