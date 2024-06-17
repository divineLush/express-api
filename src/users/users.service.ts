import { injectable } from 'inversify'
import { UserLoginDto } from "./dto/user.login.dto";
import { UserRegisterDto } from "./dto/user.register.dto";
import { IUserService } from "./users.service.interface";
import { User } from './user.entity';

@injectable()
export class UserService implements IUserService {
  async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
    const user = new User(email, name)
    await user.setPassword(password)

    return user
  }

  validateUser(dto: UserLoginDto): Promise<boolean> {
    return new Promise((res, rej) => {
      return true;
    });
  }
}
