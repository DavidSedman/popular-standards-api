import { OpenAPIV3_1 } from 'openapi-types';
import pkg from '../../package.json';

const config: OpenAPIV3_1.Document = {
  openapi: '3.0.0',
  info: {
    title: pkg.name,
    version: pkg.version,
    description: pkg.description,
    license: {
      name: pkg.license
    },
    contact: {
      name: pkg.author.name,
      email: pkg.author.email
    }
  },
  externalDocs: {
    description: 'A little help ;) - Swagger Specification Documents',
    url: 'https://swagger.io/docs/specification/about/'
  },
  servers: [
    {
      url: '/api',
      description: 'Development server'
    }
  ],
  components: {
    schemas: {},
    securitySchemes: {}
  },
  security: [],
  paths: {}
};

export default config;
