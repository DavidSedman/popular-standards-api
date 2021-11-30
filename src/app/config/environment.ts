import { NODE_ENV } from './constants';

const isDevelopment = NODE_ENV === 'development';
const isNotProduction = NODE_ENV !== 'production';
const isTest = NODE_ENV === 'test';

export { isDevelopment, isNotProduction, isTest };
