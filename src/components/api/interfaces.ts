import {
    Planet,
    PlanetsState,
    SpaceshipsState,
    PeopleState,
    Spaceship,
    Man,
} from '../../store/api/interfaces';

interface IsLoading {
    isLoading: boolean;
}

export interface PlanetsProps extends IsLoading {
    planets: Planet[];
}

export interface SpaceshipsProps extends IsLoading {
    spaceships: Spaceship[];
}

export interface PeopleProps extends IsLoading {
    people: Man[];
}

export interface ApiState {
    planets: PlanetsState;
    spaceships: SpaceshipsState;
    people: PeopleState;
}
