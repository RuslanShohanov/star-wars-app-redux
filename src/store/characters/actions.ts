import {
    Character,
    SaveCharacterAction,
    RemoveCharacterAction,
    GetCharacterByIdAction,
    ResetSelectedAction,
} from './interfaces';
import {
    SAVE_CHARACTER,
    REMOVE_CHARACTER,
    GET_CHARACTER_BY_ID,
    RESET_SELECTED,
} from './constants';

export const saveCharacter = (character: Character): SaveCharacterAction => {
    return {
        type: SAVE_CHARACTER,
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

export const resetSelected = (): ResetSelectedAction => {
    return {
        type: RESET_SELECTED,
    };
};
