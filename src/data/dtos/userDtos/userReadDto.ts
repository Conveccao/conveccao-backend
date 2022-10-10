import { ERole } from "../../../entities/ERole"

export default class UserReadDto{
    public id: number
    public name: string
    public email: string
    public role: ERole
}