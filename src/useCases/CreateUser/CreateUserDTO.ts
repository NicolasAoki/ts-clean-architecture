/*
  DTO: DataTransferObject
  quando o objeto esta passando de uma camada para outra
  Por exemplo:
  A camada externa que vem da web pode nao precisa seguir
  o formato padrao das entities internas, neste objeto
  é justamente para transforma-lo dentro das regras de 
  negócio internas
*/
export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}