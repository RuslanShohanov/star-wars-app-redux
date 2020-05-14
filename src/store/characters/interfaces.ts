import {
    Side,
    SAVE_CHARACTER,
    REMOVE_CHARACTER,
    GET_CHARACTER_BY_ID,
    RESET_SELECTED,
} from './constants';

export interface Character {
    id: string;
    name: string;
    side: Side;
}

export interface CharactersState {
    selectedCharacter?: string;
    characters: Character[];
}

export interface GetCharacterByIdAction {
    type: typeof GET_CHARACTER_BY_ID;
    characterId: string;
}

export interface SaveCharacterAction {
    type: typeof SAVE_CHARACTER;
    character: Character;
}

export interface RemoveCharacterAction {
    type: typeof REMOVE_CHARACTER;
    characterId: string;
}

export interface ResetSelectedAction {
    type: typeof RESET_SELECTED;
}

export type CharactersAction =
    | GetCharacterByIdAction
    | SaveCharacterAction
    | RemoveCharacterAction
    | ResetSelectedAction;
