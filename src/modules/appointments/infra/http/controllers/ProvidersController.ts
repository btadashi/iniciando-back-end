import { Request, Response } from 'express';
import { container } from 'tsyringe';
/** Importamos o classToClass de dentro de 'class-transformer' */
import { classToClass } from 'class-transformer';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({
      user_id,
    });

    /** Usamos 'classToClass' para fazer a conversão, passndo 'providers' */
    return response.json(classToClass(providers));
  }
}
