import { uuid } from "uuidv4";

/* A entidade nao necessariamente esta relacionada a tabela do banco */
export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  /*
    Omit esta recebendo todas a propriedade menos o ID desta
    forma ao realizar um getUser com tipagem User ele já tera o ID,
    caso o ID nao seja passado, a verificacao do construtor checa e
    instancia um novo ID para o objeto criado
  */
  constructor(props: Omit<User, 'id'>, id?: string){
    Object.assign(this, props);

    if(!id) {
      this.id = uuid();
    }
  }
}