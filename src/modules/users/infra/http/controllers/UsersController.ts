import { Request, Response } from 'express';
import { container } from 'tsyringe';
/** Importamos 'clasToclass' de dentro de 'class-transformer' */
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    /** Removemos a instrução do delete do password, pois vamos usar o 'classToclass' para passar a fazer a remoção
     * usando o Exclude do 'class-transformer'
     */

    /** Retornamos a resposta de user, passando o 'classToclass' para ativar os métodos de dentro de 'class-transformer' */
    return response.json(classToClass(user));
  }
}
