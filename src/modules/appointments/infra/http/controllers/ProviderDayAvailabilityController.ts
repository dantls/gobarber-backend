import { Request, Response } from 'express';
import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

import { container } from 'tsyringe';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProvidersDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await listProvidersDayAvailability.execute({
      day,
      month,
      provider_id,
      year,
    });

    return response.json(availability);
  }
}
