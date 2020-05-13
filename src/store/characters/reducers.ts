import { CharactersAction } from './interfaces';
import {
    GET_CHARACTERS,
    ADD_CHARACTER,
    REMOVE_CHARACTER,
    GET_CHARACTER_BY_ID,
} from './constants';
import { initialCharactersState } from './initial-characters-state';

export const characters = (
    state = initialCharactersState,
    action: CharactersAction
) => {
    switch (action.type) {
        case GET_CHARACTERS: {
            return { ...state, characters: action.characters };
        }
        case ADD_CHARACTER: {
            return {
                ...state,
                list: [...state.list, action.character],
            };
        }
        case REMOVE_CHARACTER: {
            const characterToRemove = state.list.find(
                (c) => c.id === action.characterId
            );
            return characterToRemove
                ? {
                      ...state,
                      list: state.list.filter(
                          (c) => c.id !== action.characterId
                      ),
                  }
                : state;
        }
        case GET_CHARACTER_BY_ID: {
            return {
                ...state,
                selectedCharacter: action.characterId,
            };
        }
        default: {
            return state;
        }
    }
};
