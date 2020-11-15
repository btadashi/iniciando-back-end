import { Request, Response } from 'express';
import { container } from 'tsyringe';
/** Importamos 'clasToclass' de dentro de 'class-transformer' */
import { classToClass } from 'class-transformer';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    /** Removemos a instrução do delete do password, pois vamos usar o 'classToclass' para passar a fazer a remoção
     * usando o Exclude do 'class-transformer'
     */

    /** Retornamos a resposta de user, passando o 'classToclass' para ativar os métodos de dentro de 'class-transformer' */
    return response.json(classToClass(user));
  }
}
