import { controller, scopePerRequest } from 'awilix-express';
import Express from 'express';
import Container from './Container';
import { UserController } from './web/user/UserController';

const app = Express();
const container = new Container();
app.use(scopePerRequest(container.get()));
app.use(controller(UserController));

app.listen(3000, function () {
  console.log('App is listening port 3000!');
});