import express from 'express';
import { isNotProduction } from './config/environment';
import { swaggerHandlers, swaggerContent } from './modules/swagger';
import errors from './middleware/errors';
import parseJson from './middleware/parseJson';
import parseUrlEncoded from './middleware/parseUrlEncoded';
import notFound from './middleware/notFound';

const api = express();

api.get('/', (_req, res) => {
  res.send("I'm Healthy!");
});

api.use(parseJson);
api.use(parseUrlEncoded);

if (isNotProduction) {
  api.use('/docs', swaggerHandlers, swaggerContent);
}

api.use(notFound);
api.use(errors);

export { api };
