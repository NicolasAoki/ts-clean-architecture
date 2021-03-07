import { User } from "../entities/User";

/*
  Os repositorios sao classes especificas para fazer a comunicacao
  das funcionalidades da aplicaçao e a infra ou seja, como os dados
  serao armazenados
*/
export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}