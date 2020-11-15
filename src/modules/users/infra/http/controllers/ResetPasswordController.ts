import { Request, Response } from 'express';
import { container } from 'tsyringe';

/** Importamos o 'service' 'ResetPasswordService' */
import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    /** Para trocar a senha, precisamos fornecer o 'password' e o 'token' */
    const { password, token } = request.body;

    /** Passamos o nosso 'service' dentro de 'container.resolve' na nossa variável 'resetPasswordService' */
    const resetPassword = container.resolve(ResetPasswordService);

    /** Executamos o nosso 'resetPassword' */
    await resetPassword.execute({
      password,
      token,
    });

    /** Retornamos um 'response' com 'status' 204, em que nossa resposta é um sucesso, porém sem conteúdo algum  */
    return response.status(204).json();
  }
}
