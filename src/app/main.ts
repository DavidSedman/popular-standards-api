import { api } from './api';
import { API_PORT } from './config/constants';

api.listen(API_PORT, () => {
  console.log(`server started at http://localhost:${API_PORT}`);
});
