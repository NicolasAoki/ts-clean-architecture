import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { MongoUserRepository } from '../../repositories/implementations/MongoUserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

/*
  Connection between all nodes,
  route /users/ calls  -> createUserController from index
  index                -> has all implementations to the use case (providers, repositories, controllers)
  createUserUseCase    -> is called with desired providers and repositories
  createUserController -> handles the route request, returing the final api status
*/
const mailtrapMailProvider = new MailtrapMailProvider()
const mongoUserRepository = new MongoUserRepository()

/*
  Instancia-se o createUserUseCase com as implementacoes desejadas
  de cada provider e repository.
  Assim retirando a dependencia da regra de negócio da implementacao
*/
const createUserUseCase = new CreateUserUseCase(
  mailtrapMailProvider,
  mongoUserRepository,
)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }