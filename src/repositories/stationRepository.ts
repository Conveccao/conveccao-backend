import { AppDataSource } from "../data-source";
import { Station } from "../entities/Station";

export const stationRepository = AppDataSource.getRepository(Station)