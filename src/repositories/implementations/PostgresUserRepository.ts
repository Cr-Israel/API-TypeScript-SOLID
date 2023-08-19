import { type User } from '../../entities/User'
import { type IUserRepository } from '../IUsersRepository'

export class PostgresUserRepository implements IUserRepository {
  private readonly users: User[] = []

  async findByEmail (email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)

    return user
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
}
