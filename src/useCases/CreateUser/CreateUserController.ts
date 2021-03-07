import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

/*
  Neste ponto de entrada do mundo externo os dados sao retirados
  e enviados para o useCase necessário.
  Lembrando que o CreateUserDTO é esperado na request do useCase
*/
export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      await this.createUserUseCase.execute({
        name,
        email,
        password,
      })
  
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      }) 
    }
  }
}
