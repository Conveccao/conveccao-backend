import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sensorsType')
export class SensorType {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text', nullable:false})
    name: string  /// pluviometro, vento, temperatura
    
    @Column({type: 'text', nullable:false})
    description: string 

    @Column({type: 'float', nullable:false})
    factor: string  /// calculo por cada pulso, ex. pluviometro cada pulso tem 0,25ml

    @Column({type: 'text', nullable:false})
    primary_measure: string //// unidade de medida primaria tipo mililitros por metro quadrado
    
    @Column({type: 'text'})
    secondary_measure: string //// unidade de medida secundaria tipo Litros por metro quadrado
}