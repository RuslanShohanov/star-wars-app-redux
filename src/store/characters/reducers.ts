import { combineReducers } from 'redux';

import { CharactersAction, Character } from './interfaces';
import {
    SAVE_CHARACTER,
    REMOVE_CHARACTER,
    GET_CHARACTER_BY_ID,
    RESET_SELECTED,
} from './constants';
import { initialCharacters } from './initial-characters-state';

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
    state = initialCharacters,
    action: CharactersAction
): Character[] => {
    switch (action.type) {
        case SAVE_CHARACTER: {
            const characterInState = state.find(
                (character) => character.id === action.character.id
            );

            if (characterInState) {
                state.forEach((character) => {
                    if (character.id === action.character.id) {
                        character.name = action.character.name;
                        character.side = action.character.side;
                    }
                });

                return state;
            }

            return [...state, action.character];
        }
        case REMOVE_CHARACTER: {
            const characterToRemove = state.find(
                (character) => character.id === action.characterId
            );
            return characterToRemove
                ? state.filter(
                      (character) => character.id !== action.characterId
                  )
                : state;
        }
        default: {
            return state;
        }
    }
};

export const charactersReducer = combineReducers({
    characters,
    selectedCharacter,
});
