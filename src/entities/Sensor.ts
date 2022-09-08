import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sensors')
export class Sensor {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'float', nullable:false})
    station_id: number

    @Column({type: 'float', nullable:false})
    sensorType_id: number

    @Column({type:'text', nullable:false})
    description: string
    
    @Column({type:'text', nullable:true}) /// nullable true => pode ter valor vazio
    model: string

    @Column({type:'float', nullable:true})
    minrange: number   /// medição minima

    @Column({type:'float', nullable:true})
    maxrange: number   /// medição maxima

    @Column({type:'float', nullable:true})
    accurace: number

    @Column({type:'timestamp', nullable:true})
    startdate: Date

    @Column({type:'timestamp', nullable:true})
    enddate: Date

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