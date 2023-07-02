import { Authority } from './../entities/common/enums';

export class CreateUserDto {
    constructor(public id: string, public password: string, public authority: Authority) {        
    }
}
