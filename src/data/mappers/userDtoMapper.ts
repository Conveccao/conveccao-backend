import { User } from "../../entities/User";
import UserReadDto from "../dtos/userDtos/userReadDto";

export default class UserDtoMapper{

    public userToUserReadDto(user: User){
        let userReadDto = new UserReadDto()
        userReadDto.id = user.id
        userReadDto.name = user.name
        userReadDto.email = user.email
        userReadDto.role = user.role
        return userReadDto
    }
}