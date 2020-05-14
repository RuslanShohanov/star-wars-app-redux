import { AppState } from './interfaces';
import { initialCharactersState } from './characters/initial-characters-state';

export const initialState: AppState = {
    charactersReducer: initialCharactersState,
};
