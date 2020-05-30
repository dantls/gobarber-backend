import { Router } from 'express';
import ProvidersController from '@modules/appointments/infra/http/controllers/Providers.Controller';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const providersRouter = Router();
const providersControler = new ProvidersController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersControler.index);

export default providersRouter;
