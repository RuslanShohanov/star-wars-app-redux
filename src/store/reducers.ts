import { combineReducers } from 'redux';

import { charactersReducer } from './characters/reducers';
import { apiReducer } from './api/reducers';

export const rootReducer = combineReducers({ charactersReducer, apiReducer });
