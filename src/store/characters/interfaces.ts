import { GET_CHARACTERS, Side, ADD_CHARACTER } from './constants';

export interface Character {
    id: string;
    firstName: string;
    lastName?: string;
    side: Side;
}

export interface CharactersState {
    characters: Character[];
}

export interface GetCharactersAction {
    type: typeof GET_CHARACTERS;
    characters: Character[];
}

export interface AddCharacterAction {
    type: typeof ADD_CHARACTER;
    character: Character;
}

export type CharactersAction = GetCharactersAction | AddCharacterAction;
