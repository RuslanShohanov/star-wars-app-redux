import {
    GetCharactersAction,
    Character,
    AddCharacterAction,
} from './interfaces';
import { GET_CHARACTERS, ADD_CHARACTER } from './constants';

export const getCharacters = (characters: Character[]): GetCharactersAction => {
    return {
        type: GET_CHARACTERS,
        characters,
    };
};

export const addCharacter = (character: Character): AddCharacterAction => {
    return {
        type: ADD_CHARACTER,
        character,
    };
};
