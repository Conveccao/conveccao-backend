import { AppDataSource } from "../data-source";
import { Parameter } from "../entities/Parameter";

export const parameterRepository = AppDataSource.getRepository(Parameter)