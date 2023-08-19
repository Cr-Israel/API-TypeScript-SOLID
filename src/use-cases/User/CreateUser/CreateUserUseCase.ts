import { User } from '../../../entities/User'
import { type IMailProvider } from '../../../providers/IMailProvider'
import { type IUserRepository } from '../../../repositories/IUsersRepository'
import { type ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor (
    private readonly usersRepository: IUserRepository,
    private readonly mailProdiver: IMailProvider
  ) {}

  async execute (data: ICreateUserRequestDTO): Promise<void> {
    // Vou verificar se o user já existe
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

    // Verifico se o user já existe
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    // Se não existe, eu crio ele
    const user = new User(data)

    await this.usersRepository.save(user)

    await this.mailProdiver.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name: 'Equipe do meu app',
        email: 'equipe@meuapp.com'
      },
      subject: 'Seja bem-vindo a plataforma!',
      body: '<p>Você já pode fazer login em nossa plataforma.</p>'
    })
  }
}
