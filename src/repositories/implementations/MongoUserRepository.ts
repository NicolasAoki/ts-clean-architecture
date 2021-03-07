import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

/*
  Implementacao de como os dados vao ser salvos, seguindo
  os métodos definidos pelo IUsersRepository.
  é interessante notar que poderia ser qualquer tipo de persistencia.
*/
export class MongoUserRepository implements IUsersRepository {
  private users: User[] = []

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)

    return user;
  }
  
  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}