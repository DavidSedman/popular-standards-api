import path from 'path';

const API_PORT = parseInt(process.env.API_PORT, 10);
const NODE_ENV: string = process.env.NODE_ENV;
const PROJECT_ROOT: string = path.resolve(__dirname, '..', '..');

export { API_PORT, NODE_ENV, PROJECT_ROOT };
