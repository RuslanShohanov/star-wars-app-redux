import { combineReducers } from 'redux';

import { characters } from './characters/reducers';

export const rootReducer = combineReducers({ characters });
