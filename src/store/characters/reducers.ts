import { combineReducers } from 'redux';

import { CharactersAction, CharactersState } from './interfaces';
import {
    GET_CHARACTERS,
    SAVE_CHARACTER,
    REMOVE_CHARACTER,
    GET_CHARACTER_BY_ID,
    RESET_SELECTED,
} from './constants';
import { initialCharactersState } from './initial-characters-state';

export const selectedCharacter = (
    state: string | null = null,
    action: CharactersAction
) => {
    switch (action.type) {
        case GET_CHARACTER_BY_ID: {
            return action.characterId;
        }
        case RESET_SELECTED: {
            return null;
        }
        default: {
            return state;
        }
    }
};

export const characters = (
    state = initialCharactersState,
    action: CharactersAction
): CharactersState => {
    switch (action.type) {
        case GET_CHARACTERS: {
            return { ...state, characters: action.characters };
        }
        case SAVE_CHARACTER: {
            const characterInState = state.characters.find(
                (c) => c.id === action.character.id
            );

            if (characterInState) {
                state.characters.forEach((c) => {
                    if (c.id === action.character.id) {
                        c.name = action.character.name;
                        c.side = action.character.side;
                    }
                });

                return {
                    ...state,
                    characters: [...state.characters],
                };
            }

            return {
                ...state,
                characters: [...state.characters, action.character],
            };
        }
        case REMOVE_CHARACTER: {
            const characterToRemove = state.characters.find(
                (c) => c.id === action.characterId
            );
            return characterToRemove
                ? {
                      ...state,
                      characters: state.characters.filter(
                          (c) => c.id !== action.characterId
                      ),
                  }
                : state;
        }
        default: {
            return state;
        }
    }
};

export const charactersReducer = combineReducers({
    selectedCharacter,
    characters,
});
