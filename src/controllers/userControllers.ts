import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserDtoMapper from "../data/mappers/userDtoMapper";
import UserReadDto from "../data/dtos/userDtos/userReadDto";

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

        await userRepository.save(newUser)

        return res.status(201).json(newUser)

    }

    async getByEmail(req: Request, res: Response){
        try {
            const email = req.body
            const userExists = await userRepository.findOneBy(email)
            if (userExists) return res.status(200).json(userExists)
            return res.status(404)
        } catch (error) {
            return res.status(500).json({message: "Internal Server Error"})
        }
    }

    async get(req: Request, res: Response){
        try {
            const userDtoMapper = new UserDtoMapper()
            const users = await userRepository.find()
            let usersReadDto : UserReadDto[] = []
            users.forEach(user => {
                let userReadDto = userDtoMapper.userToUserReadDto(user)
                usersReadDto.push(userReadDto)
            })
            res.json(usersReadDto)
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    //TODO
    async put(req: Request, res: Response){
        try {
            
        } catch (error) {
            
        }
    }

    async delete(req: Request, res: Response) {
        //deleta uma estação
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
        const { email, password } = req.body

        const user = await userRepository.findOneBy({ email })

        if (!user) {
            throw new BadRequestError('Email ou senha invalido')
        }

        // const verifiedPass = await bcrypt.compare(password, user.password)

        // if (!verifiedPass) {
        //     throw new BadRequestError('Email ou senha invalido')
        // }

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '2h' }) // token expira em 2 horas 

        // const { password: _, ...userLogin } = user

        return res.json({
            //user: userLogin,
            token: token
        })
    }

    async getProfile(req: Request, res: Response) {
        return res.json(req.user)
    }

}