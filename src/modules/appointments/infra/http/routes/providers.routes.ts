import { Router } from 'express';
/** Imortamos  'celebrate', 'Segments', 'Joi' de dentro de 'celebrate' */
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    /** Passamos dentro de 'celebrate' Segments, usando 'params', para validar nossas 'routes params' e dizermos que o
     * 'provider_id' precisa ser uma string, no formato uuid e obrigatório. */
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvailabilityController.index,
);

providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    /** Passamos dentro de 'celebrate' Segments, usando 'params', para validar nossas 'routes params' e dizermos que o
     * 'provider_id' precisa ser uma string, no formato uuid e obrigatório. */
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvailabilityController.index,
);

export default providersRouter;
