import {
    Planet,
    PlanetsState,
    SpaceshipsState,
    PeopleState,
    Spaceship,
    Man,
} from '../../store/api/interfaces';

export interface PlanetsProps {
    planets: Planet[];
}

export interface SpaceshipsProps {
    spaceships: Spaceship[];
}

export interface PeopleProps {
    people: Man[];
}

export interface ApiState {
    planets: PlanetsState;
    spaceships: SpaceshipsState;
    people: PeopleState;
}
