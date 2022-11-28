import { Request, Response } from "express";
import { alertRepository } from "../repositories/alertRepository";

export class AlertControllers {

    async create(req: Request, res: Response) {

        const alert = req.body

        try {
            const newAlert = alertRepository.create(alert)

            await alertRepository.save(newAlert)

            return res.status(201).json(newAlert)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }

    async get(req: Request, res: Response){
        try {
            const alerts = await alertRepository.find()
            return res.status(200).json(alerts)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }
}