import { uuid } from 'uuidv4'

export class User {
  // Aqui eu defino quais os campos que vou guardar dentro do meu usuário.
  // Seria os atributos, propriedades dele.
  public readonly id: string // O id está disponível somente para leitura e não modificação.

  public name: string
  public email: string
  public password: string

  // Vou fazer um constructor, que vai receber todas as propriedades
  // do usuário e vai criar um, quando eu fizer "new User..."

  // No constructor, vou receber todas as propriedades da Class User,
  // menos o Id, vou omitir ele.
  // E vou receber o 'id' como sendo opcional
  constructor (props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props) // Ele pega todas as propriedades que estão no objeto 'props' e passa uma por uma para o 'this'.
    // Exemplo: this.name = props.name...

    if (!id) {
      this.id = uuid()
    }
  }
}
