import { combineReducers } from 'redux';

import {
    PlanetsAction,
    PlanetsState,
    SpaceshipsState,
    SpaceshipsAction,
    PeopleState,
    PeopleAction,
} from './interfaces';
import {
    REQUEST_PLANETS,
    RECEIVE_PLANETS,
    REQUEST_SPACESHPIS,
    RECEIVE_SPACESHPIS,
    RECEIVE_PEOPLE,
    REQUEST_PEOPLE,
} from './constants';
import { initialApiState } from './initial-api-state';

const planets = (
    state: PlanetsState = initialApiState,
    action: PlanetsAction
) => {
    switch (action.type) {
        case REQUEST_PLANETS: {
            return { ...state, isFetching: true };
        }
        case RECEIVE_PLANETS: {
            return { isFetching: true, list: [...action.planets] };
        }
        default: {
            return state;
        }
    }
};

const spaceships = (
    state: SpaceshipsState = initialApiState,
    action: SpaceshipsAction
) => {
    switch (action.type) {
        case REQUEST_SPACESHPIS: {
            return { ...state, isFetching: true };
        }
        case RECEIVE_SPACESHPIS: {
            return { isFetching: true, list: [...action.spaceships] };
        }
        default: {
            return state;
        }
    }
};

const people = (state: PeopleState = initialApiState, action: PeopleAction) => {
    switch (action.type) {
        case REQUEST_PEOPLE: {
            return { ...state, isFetching: true };
        }
        case RECEIVE_PEOPLE: {
            return { isFetching: true, list: [...action.people] };
        }
        default: {
            return state;
        }
    }
};

export const apiReducer = combineReducers({ people, planets, spaceships });
