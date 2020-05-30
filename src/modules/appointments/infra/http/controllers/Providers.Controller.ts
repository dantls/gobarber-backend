import { Request, Response } from 'express';
import ListProvidersService from '@modules/appointments/services/ListProvidersService';

import { container } from 'tsyringe';

export default class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProviders = container.resolve(ListProvidersService);

    const user_id = request.user.id;

    const providers = await listProviders.execute({
      user_id,
    });

    return response.json(providers);
  }
}
