import { combineReducers } from 'redux';

import * as user from './user';

export default combineReducers({
  ...user
});
