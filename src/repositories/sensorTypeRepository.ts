import { AppDataSource } from "../data-source";
import { SensorType } from "../entities/SensorType";

export const sensorTypeRepository = AppDataSource.getRepository(SensorType)