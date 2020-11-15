import { Router } from 'express';
/** Imortamos 'Joi' de dentro de 'celebrate' */
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsController from '../controllers/ProviderAppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      /** Passamos o campo 'provider_id', recebendo 'Joi', falando que é uma string, podendo validar que ele precisa estar no
       * formato 'uuid' e que é um campo obrigatório (required) */
      /** Passamos o campo 'date' e dizemos que precisae estar no formato 'date' */
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);

appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
