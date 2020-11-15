import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class ApppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const { provider_id, date } = request.body;

    /** Removemos a conversão de 'date', pois ela já está sendo feita dentro de 'appointments.routes.ts' */
    // const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    /** Passamos apenas 'date' dentro do 'appointment' */
    const appointment = await createAppointment.execute({
      date,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}
