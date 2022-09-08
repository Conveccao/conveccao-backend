import { AppDataSource } from "../data-source";
import { Sensor } from "../entities/Sensor";

export const sensorRepository = AppDataSource.getRepository(Sensor)