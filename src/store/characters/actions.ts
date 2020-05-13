import {
    GetCharactersAction,
    Character,
    AddCharacterAction,
    RemoveCharacterAction,
    GetCharacterByIdAction,
} from './interfaces';
import {
    GET_CHARACTERS,
    ADD_CHARACTER,
    REMOVE_CHARACTER,
    GET_CHARACTER_BY_ID,
} from './constants';

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

export const removeCharacter = (characterId: string): RemoveCharacterAction => {
    return {
        type: REMOVE_CHARACTER,
        characterId,
    };
};

export const editCharacter = (characterId: string): GetCharacterByIdAction => {
    return {
        type: GET_CHARACTER_BY_ID,
        characterId,
    };
};
