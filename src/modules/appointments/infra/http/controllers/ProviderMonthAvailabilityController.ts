import { Request, Response } from 'express';
import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

import { container } from 'tsyringe';

export default class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { month, year } = request.body;
    const { provider_id } = request.params;

    const listProvidersMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProvidersMonthAvailability.execute({
      month,
      provider_id,
      year,
    });

    return response.json(availability);
  }
}
