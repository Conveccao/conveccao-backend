import { jsonIgnore } from "json-ignore";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Parameter } from "./Parameter";

@Entity('parametersType')
export class ParameterType {
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

    @Column({type: 'text', nullable:true})
    unit2: string  //// 

    @Column({type: 'float', nullable:true})
    factor2: number  /// calculo por cada pulso, ex. pluviometro cada pulso tem 0,25ml

    @Column({type: 'float', nullable:true})
    offset2: number

    @Column({type: 'text', nullable:true})
    reference: string //// unidade de medida primaria tipo mililitros por metro quadrado
    
    @Column({type: 'float', nullable:true})
    min: string //// unidade de medida secundaria tipo Litros por metro quadrado

    @Column({type: 'float', nullable:true})
    max: string

    @OneToMany(() => Parameter, (parameter) => parameter.parameterType)
    parameters: Parameter[]
}