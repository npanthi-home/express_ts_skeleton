import { controller, scopePerRequest } from 'awilix-express';
import Express from 'express';
import Container from './Container';
import ProfileController from './web/profile/ProfileController';
import { UserController } from './web/user/UserController';

const app = Express();
(async () => {
  const container = await Container.create();
  app.use(scopePerRequest(container.get()));
  app.use(controller(UserController));
  app.use(controller(ProfileController));
})();

app.listen(3000, () => {
  console.log('App is listening port 3000!');
});