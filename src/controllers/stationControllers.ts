import { Request, Response } from "express";
import { ParameterType } from "../entities/ParameterType";
import { parameterRepository } from "../repositories/parameterRepository";
import { stationRepository } from "../repositories/stationRepository";
import StationService from "../services/stationService";

export class StationControllers {

    private stationService: StationService = new StationService();

    async get(req: Request, res: Response) {
        //resgata todas as estações
        try {
            const stations = await stationRepository.find({
                relations: {
                    parameters: true
                }
            });

            res.json(stations);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })

        }
    }

    async getActiveStations(req: Request, res: Response) {
        try {
            const activeStations = await stationRepository.findBy({
                active: true
            });

            res.json(activeStations)

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Internal Server Error"})
        }
    }

    async getById(req: Request, res: Response) {
        //Resgata estação por ID
        try {
            const id = parseInt(req.params.id)
            const station = await this.stationService.findStationById(id);
            return res.send(station);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async getReferenceByStation(req: Request, res: Response) {
        try {
            const parameterTypes: ParameterType[] = [];
            const stations = await stationRepository.find({
                relations: {
                    parameters: true
                }
            });
            const parameters = await parameterRepository.find({
                relations: {
                    station: true,
                    parameterType: true
                }
            });

            stations.forEach(station => {
                if (station.id === parseInt(req.params.id)) {
                    const stationParameters = station.parameters
                    stationParameters.forEach(stationParameter => {
                        parameters.forEach(parameter => {
                            if (stationParameter.id === parameter.id) {
                                console.log(parameter.station.id)
                                parameterTypes.push(parameter.parameterType)
                            }
                        })
                    })
                }
            })
            return res.json(parameterTypes)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async create(req: Request, res: Response) {
        //cria uma estação
        const { installation_date, name, lat, lon, reference, link } = req.body

        if (!installation_date || !name || !lat || !lon || !reference) {
            return res.status(404).json({ message: "Todos os dados são obrigatórios" })
        }

        try {
            let active: boolean = true;
            const newStation = stationRepository.create({ installation_date, name, lat, lon, reference, link, active })

            await stationRepository.save(newStation)

            return res.status(201).json(newStation)

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async delete(req: Request, res: Response) {
        //deleta uma estação
        try {
            const id = parseInt(req.params.id)
            const station = await this.stationService.findStationById(id);
            return res.send(station);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async update(req: Request, res: Response) {
        //atualiza uma estação
        let result = null;
        try {
            const id = parseInt(req.params.id)
            const station = await stationRepository.findOneBy({
                id: id
            });

            if (station != null) {
                stationRepository.merge(station, req.body)
                result = await stationRepository.save(station)
            }
            return res.status(200).json(result);

        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async activate(req: Request, res: Response) {
        let result = null;
        try {
            const id = parseInt(req.params.id)
            const station = await stationRepository.findOneBy({
                id: id
            });

            if (station) {
                station.active = true
                result = await stationRepository.save(station)
            }

            return res.send(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async deactivate(req: Request, res: Response) {
        let result = null;
        try {
            const station = await stationRepository.findOneBy({
                id: parseInt(req.params.id)
            })

            if (station) {
                station.active = false
                result = await stationRepository.save(station)
            }

            return res.send(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }
}