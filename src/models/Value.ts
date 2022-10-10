import mongoose, {Document, Schema} from 'mongoose'

export interface IValue{
    station_id: number
    temp: number
    umid: number
    vent: number
    pluv: number
    unixtime: number
}

export interface IValueModel extends IValue, Document {}

const ValueSchema = new Schema(
    {
        station_id: {type: Number},
        temp: {type: Number},
        umid: {type: Number},
        vent : {type: Number},
        pluv: {type: Number},
        unixtime: {type: Number}
    }, 
    {
        versionKey: false
    }
)

export default mongoose.model<IValueModel>('Value', ValueSchema)