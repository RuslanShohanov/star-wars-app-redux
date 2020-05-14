import { AppState } from './interfaces';
import { initialCharactersState } from './characters/initial-characters-state';
import { initialApiState } from './api/initial-api-state';

export const initialState: AppState = {
    charactersReducer: initialCharactersState,
    apiReducer: {
        planets: initialApiState,
        spaceships: initialApiState,
        people: initialApiState,
    },
};
