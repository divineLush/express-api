import { hash } from "bcryptjs"

export class User {
  private password!: string

  constructor(private readonly email: string, private readonly name: string) {}

  public async setPassword(password: string, salt: number | string) {
    this.password = await hash(password, Number(salt))
  }
}
