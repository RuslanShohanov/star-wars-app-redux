import { v4 } from 'uuid';

import { Character } from './interfaces';
import { Side } from './constants';

export const initialCharactersState: Character[] = [
    {
        id: v4(),
        firstName: 'Luke',
        lastName: 'Skywalker',
        side: Side.Light,
    },
    { id: v4(), firstName: 'Dart', lastName: 'Vader', side: Side.Dark },
    { id: v4(), firstName: 'R2D2', side: Side.Light },
];
