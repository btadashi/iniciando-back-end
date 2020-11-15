import { Request, Response } from 'express';
import { container } from 'tsyringe';

/** Importamos o 'service' 'SendForgotPasswordEmailService' */
import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    /** Passamos o nosso 'service' dentro de 'container.resolve' na nossa variável 'sendForgotPasswordEmail' */
    const sendForgotPasswordEmail = container.resolve(
      SendForgotPasswordEmailService,
    );

    /** Executamos o nosso 'sendForgotPasswordEmail' */
    await sendForgotPasswordEmail.execute({
      email,
    });

    /** Retornamos um 'response' com 'status' 204, em que nossa resposta é um sucesso, porém sem conteúdo algum  */
    return response.status(204).json();
  }
}
