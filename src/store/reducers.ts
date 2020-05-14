import { combineReducers } from 'redux';

import { charactersReducer } from './characters/reducers';

export const rootReducer = combineReducers({ charactersReducer });
