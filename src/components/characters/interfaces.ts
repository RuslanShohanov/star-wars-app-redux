import { Character } from '../../store/characters/interfaces';
import { Side } from '../../store/characters/constants';

export interface ListingProps {
    characters: Character[];
}

export interface FormProps {
    character?: Character;
}

export interface SideCellProps {
    side: Side;
}
