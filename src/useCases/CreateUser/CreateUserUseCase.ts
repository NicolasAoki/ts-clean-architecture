import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

/*
  Esta classe CreateUserUseCase segue o padrao de Single Responsability Principle
  Pois há somente uma funcionalidade: Criaçao de usuário.
  Nao interessa como isso vai acontecer, em qual formato deve estar no banco e
  nem qual banco de dados estará sendo persistido.
*/
export class CreateUserUseCase {
  constructor(
    // Desta forma o TS está atribuindo a classe injetada à uma propriedade interna desta classe
    private usersRepository: IUsersRepository,
    private emailProvider: IMailProvider,
  ) {}
  async execute(data: ICreateUserRequestDTO) {
    /*
      Ao invés de instanciar uma nova classe new repository() aqui,
      é melhor passar a classe no construtor, isso obedece o conceito de 
      liskov substitution e dependency inversion principle, pois esta classe
      CreateUSerUseCase nao precisa saber qual tipo de infra estará sendo usada
      E sim somente que execute determinada funçao. Desta forma tabem fica fácil
      a substuicao de cada serviço sem ter que mexer na lógica desta classe.
    */
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);

    await this.usersRepository.save(user)

    await this.emailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe do app',
        email: 'app@app.com.br'
      },
      subject: 'Bem vindo ao App',
      body: '<h1>Login disponivel</h1>'
    })
  }
}
