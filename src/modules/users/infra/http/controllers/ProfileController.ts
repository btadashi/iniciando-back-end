import { Request, Response } from 'express';
import { container } from 'tsyringe';
/** Importamos 'clasToclass' de dentro de 'class-transformer' */
import { classToClass } from 'class-transformer';

import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import ShowProfileService from '@modules/users/services/ShowProfileService';

export default class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showProfileService = container.resolve(ShowProfileService);

    const user = await showProfileService.execute({ user_id });

    /** Removemos a instrução do delete do password, pois vamos usar o 'classToclass' para passar a fazer a remoção
     * usando o Exclude do 'class-transformer'
     */

    /** Retornamos a resposta de user, passando o 'classToclass' para ativar os métodos de dentro de 'class-transformer' */
    return response.json(classToClass(user));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, old_password, password } = request.body;

    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    /** Removemos a instrução do delete do password, pois vamos usar o 'classToclass' para passar a fazer a remoção
     * usando o Exclude do 'class-transformer'
     */

    /** Retornamos a resposta de user, passando o 'classToclass' para ativar os métodos de dentro de 'class-transformer' */
    return response.json(classToClass(user));
  }
}
