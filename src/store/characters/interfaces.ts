import {
    GET_CHARACTERS,
    Side,
    ADD_CHARACTER,
    REMOVE_CHARACTER,
    GET_CHARACTER_BY_ID,
} from './constants';

export interface Character {
    id: string;
    name: string;
    side: Side;
}

export interface CharactersState {
    selectedCharacter?: string;
    list: Character[];
}

export interface GetCharactersAction {
    type: typeof GET_CHARACTERS;
    characters: Character[];
}

export interface GetCharacterByIdAction {
    type: typeof GET_CHARACTER_BY_ID;
    characterId: string;
}

export interface AddCharacterAction {
    type: typeof ADD_CHARACTER;
    character: Character;
}

export interface RemoveCharacterAction {
    type: typeof REMOVE_CHARACTER;
    characterId: string;
}

export type CharactersAction =
    | GetCharactersAction
    | GetCharacterByIdAction
    | AddCharacterAction
    | RemoveCharacterAction;
