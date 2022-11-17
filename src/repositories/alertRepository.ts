import { AppDataSource } from "../data-source";
import { Alert } from "../entities/Alerts";

export const alertRepository = AppDataSource.getRepository(Alert)