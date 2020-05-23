import { authReducer, AuthEffects } from './auth';
import { DataEffects, dataReducer } from './data';

export * from './auth';
export * from './data';

export const appReducer = {
  auth: authReducer,
  data: dataReducer,
};

export const appEffects = [AuthEffects, DataEffects];
