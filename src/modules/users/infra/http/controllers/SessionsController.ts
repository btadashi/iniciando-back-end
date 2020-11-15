import { Request, Response } from 'express';
import { container } from 'tsyringe';
/** Importamos o 'classToclass' de dentro do 'class-transformer', que permite pegar uma ou mais classes ou entidades e
 * vai aplicar os métodos os métodos de do próprio 'cass-transformer' como, por exemplo, o 'Exclude' e 'Expose' */
import { classToClass } from 'class-transformer';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    /** Não precisaremos mais passar o 'delete' em 'password', pois ele passará a ser removido através do 'Exclude'
     * do 'class-transformer' */
    // delete user.password;

    /** Ao invés de simplemente retornar o usuário, passamos a instrução 'classToclass(user)' */
    return response.json({ user: classToClass(user), token });
  }
}
