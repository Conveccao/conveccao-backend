import { Request, Response } from "express";
import { BadRequestError} from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserControllers{
    async create(req: Request, res: Response) {
        const {name, email, password} = req.body

        const userExists = await userRepository.findOneBy({email})

        if (userExists){
            throw new BadRequestError('Email já existe')
        }

        const hashPassword = await bcrypt.hash(password, 8)

        const newUser = userRepository.create({
            name, 
            email, 
            password: hashPassword
        })

        await userRepository.save(newUser)

        const {password: _, ...user} = newUser 

        return res.status(201).json(user)

    }

       async delete(req: Request, res: Response){
        //deleta uma estação
        try{
            const user = await userRepository.delete({
                id: parseInt(req.params.id)
            })
            return res.send(user);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:"Internal Server Error"})
        }
    }

    async login (req: Request, res: Response){
        const {email, password} = req.body

        const user = await userRepository.findOneBy({email})

        if (!user){
            throw new BadRequestError('Email ou senha invalido')
        }

        const verifiedPass = await bcrypt.compare(password, user.password)

        if(!verifiedPass) {
            throw new BadRequestError('Email ou senha invalido')
        }

        const token = jwt.sign({id:user.id}, process.env.JWT_PASS ?? '', {expiresIn: '2h' } ) // token expira em 2 horas 

        const {password: _, ...userLogin} = user
        
        return res.json({
            user: userLogin,
            token: token
        })
    }

    async getProfile (req: Request, res: Response){
        return res.json(req.user)
    }
    
}