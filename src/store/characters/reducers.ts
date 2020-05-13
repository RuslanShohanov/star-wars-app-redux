import { CharactersAction, Character } from './interfaces';
import { GET_CHARACTERS, ADD_CHARACTER } from './constants';
import { initialCharactersState } from './initial-characters-state';

export const characters = (
    state = initialCharactersState,
    action: CharactersAction
): Character[] => {
    switch (action.type) {
        case GET_CHARACTERS: {
            return action.characters;
        }
        case ADD_CHARACTER: {
            return [...state, action.character];
        }
        default: {
            return state;
        }
    }
};
