import {NextFunction, Request, Response} from 'express'
import mongoose from 'mongoose'
import ValueProcessing from '../data/processing/valueProcessing'
import Value, { IValue } from '../models/Value'

const createValue = (req: Request, res: Response, next: NextFunction) => {
    
    const { station_id, temp, umid, vent, pluv, unixtime} = req.body

    const value = new Value({
        _id: new mongoose.Types.ObjectId(),
        station_id,
        temp,
        umid,
        vent,
        pluv,
        unixtime
    })

    return value
        .save()
        .then((value) => res.status(201).json({ value }))
        .catch((error) => res.status(500).json({error}))
}

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Value.find()
        .then((values) => {
            values.forEach(value => {
                ValueProcessing(value)
            });
            res.status(200).json({ values })
        })
        .catch((error) => res.status(500).json({ error }))
}

const deleteValue = (id: string) => {
    return Value.findByIdAndDelete(id)
}

export default {createValue, readAll}