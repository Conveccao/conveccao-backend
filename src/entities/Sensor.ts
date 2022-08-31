import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gauged } from "./Gauged";
import { SensorType } from "./SensorType";
import { Station } from "./Station";

@Entity('sensors')
export class Sensor {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => SensorType, sensorType => sensorType.sensors)
    @JoinColumn({name: 'id_sensorType'})
    sensorType: SensorType /// tipo de sendor

    @ManyToOne(() => Station, station => station.sensors)
    @JoinColumn({name: "id_station"})
    station: Station /// qual estacao pertence

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

    @OneToMany(() => Gauged, gauged => gauged.sensor)
    measurements: Gauged[]

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