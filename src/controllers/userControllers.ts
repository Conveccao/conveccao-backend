import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import UserDtoMapper from "../data/mappers/userDtoMapper";
import UserReadDto from "../data/dtos/userDtos/userReadDto";
import { ERole } from "../entities/ERole";

export class UserControllers {
    async create(req: Request, res: Response) {
        const { name, email, photo } = req.body

        const userExists = await userRepository.findOneBy({ email })

        if (userExists) {
            throw new BadRequestError('Email já existe')
        }

        const newUser = userRepository.create({
            name,
            email,
            photo
        })

        newUser.role = ERole.USER

        await userRepository.save(newUser)

        return res.status(201).json(newUser)

    }

    async getByEmail(req: Request, res: Response){
        const { email } = req.body
        const userExists = await userRepository.findBy({email})
        return res.status(200).json(userExists)
    }

    async get(req: Request, res: Response){
        try {
            const userDtoMapper = new UserDtoMapper()
            const users = await userRepository.find()
            res.json(users)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async put(req: Request, res: Response){
        try {
            let { role } = req.body
            const user = await userRepository.findOneBy({
                id: parseInt(req.params.id)
            })
            if (user != null) {
                if(role == "admin"){
                    user.role = ERole.ADMIN
                } else if (role == "moderator") {
                    user.role = ERole.MODERATOR
                } else if (role == "user") {
                    user.role = ERole.USER
                }
                await userRepository.save(user)
            }
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const user = await userRepository.delete({
                id: parseInt(req.params.id)
            })
            return res.send(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" })
        }
    }

    async login(req: Request, res: Response) {
        const { email } = req.body

        const user = await userRepository.findOneBy({ email })

        if (!user) {
            throw new BadRequestError('Email ou senha invalido')
        }

        const token = jwt.sign({user: user}, process.env.JWT_PASS ?? '', { expiresIn: '2h' }) 
        const userVerification = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

        console.log(userVerification.user.id)

        return res.json({
            token: token
        })
    }

    async getProfile(req: Request, res: Response) {
        return res.json(req.user)
    }

}