import { type User } from '../entities/User'

export interface IUserRepository {
  // Aqui vão todos os métodos que irão existir no meu repositório
  findByEmail: (email: string) => Promise<User>
  save: (user: User) => Promise<void>
}
