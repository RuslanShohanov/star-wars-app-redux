import { CharactersState } from './characters/interfaces';
import { ApiState } from '../components/api/interfaces';

export interface AppState {
    charactersReducer: CharactersState;
    apiReducer: ApiState;
}
