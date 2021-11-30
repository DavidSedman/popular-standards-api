import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger';

const swaggerHandlers = swaggerUi.serve;
const swaggerContent = swaggerUi.setup(swaggerDocument);

export { swaggerHandlers, swaggerContent };
