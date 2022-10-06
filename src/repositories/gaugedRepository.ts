import { AppDataSource } from "../data-source";
import { Gauged } from "../entities/Gauged";

export const gaugedRepository = AppDataSource.getRepository(Gauged)