import { Router } from 'express';
/** Imortamos  'celebrate', 'Segments', 'Joi' de dentro de 'celebrate' */
import { celebrate, Segments, Joi } from 'celebrate';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

/** Dentro da rota 'forgot' precisamos validar que o campo email é uma string, do tipo 'email'
 * e ela é um campo obrigatório.
 */
passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);

/** Dentro da rota 'reset' teremos 3 validações de campos */
/** 'token' precisa ser uma string, com formato 'uuid' e um campo obrigatório */
/** 'password' precisa ser uma string e um campo obrigatório */
/** 'password_confirmation' precisa ser uma string, um campo obrigatório e seu valor precisa ser igual ao de 'password' */
passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordController.create,
);

export default passwordRouter;
