import {
    REQUEST_PLANETS,
    RECEIVE_PLANETS,
    REQUEST_SPACESHPIS,
    RECEIVE_SPACESHPIS,
    REQUEST_PEOPLE,
    RECEIVE_PEOPLE,
} from './constants';

export interface Planet {
    name: string;
    climate: string;
    diameter: number;
    gravity: string;
    orbital_period: number;
    population: number;
    rotation_period: number;
    terrain: string;
}

export interface RequestPlanetsAction {
    type: typeof REQUEST_PLANETS;
}

export interface ReceivePlanetsAction {
    type: typeof RECEIVE_PLANETS;
    planets: Planet[];
}

export interface PlanetsState {
    isFetching: boolean;
    list: Planet[];
}

export interface SpaceshipsState {
    isFetching: boolean;
    list: Spaceship[];
}

export interface PeopleState {
    isFetching: boolean;
    list: Man[];
}

export interface Spaceship {
    name: string;
    model: string;
    length: number;
    max_atmosphering_speed: number;
    hyperdrive_rating: string;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    MGLT: string;
}

export interface RequestSpaceshipsAction {
    type: typeof REQUEST_SPACESHPIS;
}

export interface ReceiveSpaceshipsAction {
    type: typeof RECEIVE_SPACESHPIS;
    spaceships: Spaceship[];
}

export interface SpaceshipsState {
    isFetching: boolean;
    list: Spaceship[];
}

export interface Man {
    name: string;
    birth_year: string;
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: number;
    skin_color: string;
}

export interface RequestPeopleAction {
    type: typeof REQUEST_PEOPLE;
}

export interface ReceivePeopleAction {
    type: typeof RECEIVE_PEOPLE;
    people: Man[];
}

export interface PeopleState {
    isFetching: boolean;
    list: Man[];
}

export type PeopleAction = RequestPeopleAction | ReceivePeopleAction;
export type PlanetsAction = RequestPlanetsAction | ReceivePlanetsAction;
export type SpaceshipsAction =
    | RequestSpaceshipsAction
    | ReceiveSpaceshipsAction;
