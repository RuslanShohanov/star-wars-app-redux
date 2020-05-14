import { v4 } from 'uuid';

import { Character, CharactersState } from './interfaces';
import { Side } from './constants';

export const initialCharacters: Character[] = [
    {
        id: v4(),
        name: 'Luke Skywalker',
        side: Side.Light,
    },
    { id: v4(), name: 'Dart Vader', side: Side.Dark },
    { id: v4(), name: 'R2D2', side: Side.Light },
];

export const initialCharactersState: CharactersState = {
    characters: initialCharacters,
};
