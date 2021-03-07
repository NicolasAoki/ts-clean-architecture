interface IAddress {
  email: string;
  name: string;
}
export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}
/*
  Providers: assim como repositorios devem persistir dados,
  com a diferença de que nao persistam no banco. 
  Geralmente interagindo com API's externas
*/
export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}