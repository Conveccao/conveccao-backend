import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sensorsType')
export class SensorType {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type: 'text', nullable:false})
    name: string  /// pluviometro, vento, temperatura
    
    @Column({type: 'text', nullable:false})
    description: string 

    @Column({type: 'text', nullable:false})
    unit1: string  //// 

    @Column({type: 'float', nullable:false})
    factor1: number  /// calculo por cada pulso, ex. pluviometro cada pulso tem 0,25ml

    @Column({type: 'float', nullable:false})
    offset1: number  

    @Column({type: 'text', nullable:false})
    unit2: string  //// 

    @Column({type: 'float', nullable:false})
    factor2: number  /// calculo por cada pulso, ex. pluviometro cada pulso tem 0,25ml

    @Column({type: 'float', nullable:false})
    offset2: number

    @Column({type: 'text', nullable:false})
    reference: string //// unidade de medida primaria tipo mililitros por metro quadrado
    
    @Column({type: 'float', nullable:false})
    min: string //// unidade de medida secundaria tipo Litros por metro quadrado

    @Column({type: 'float', nullable:false})
    max: string
}