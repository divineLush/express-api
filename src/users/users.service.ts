import { injectable, inject } from 'inversify'
import { UserLoginDto } from "./dto/user.login.dto";
import { UserRegisterDto } from "./dto/user.register.dto";
import { IUserService } from "./users.service.interface";
import { User } from './user.entity';
import { TYPES } from '../types';
import { ConfigService } from '../config/config.service';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.ConfigService) private configService: ConfigService
  ) {}

  async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
    const user = new User(email, name)
    const salt = this.configService.get<number>('SALT')
    await user.setPassword(password, salt)

    return user
  }

  validateUser(dto: UserLoginDto): Promise<boolean> {
    return new Promise((res, rej) => {
      return true;
    });
  }
}
