import { AppDataSource } from "../data-source";
import { ParameterType } from "../entities/ParameterType";

export const parameterTypeRepository = AppDataSource.getRepository(ParameterType)