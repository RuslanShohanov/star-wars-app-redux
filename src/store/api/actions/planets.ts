import { Dispatch } from 'redux';

import { RequestPlanetsAction, ReceivePlanetsAction } from '../interfaces';
import { REQUEST_PLANETS, RECEIVE_PLANETS } from '../constants';
import { PLANETS_API } from '../../../endpoints';
import { AppState } from '../../interfaces';

export const requestPlanets = (): RequestPlanetsAction => {
    return {
        type: REQUEST_PLANETS,
    };
};

export const receivePlanets = (planets: any): ReceivePlanetsAction => {
    return {
        type: RECEIVE_PLANETS,
        planets: planets.map((planet: any) => ({
            ...planet,
        })),
    };
};

export const fetchPlanets = () => {
    return async (dispatch: Dispatch) => {
        dispatch(requestPlanets());

        const fetchResult = await fetch(PLANETS_API);

        let json = await fetchResult.json();
        let planets = [...json.results];

        while (json.next) {
            const nextPage = await fetch(json.next);
            json = await nextPage.json();
            planets = planets.concat(json.results);
        }

        dispatch(receivePlanets(planets));
    };
};

const shouldFetchPlanets = (state: AppState) => {
    return !state.apiReducer.planets.isFetching;
};

export const fetchPlanetsIfNeeded = () => {
    return (dispatch: any, getState: any) => {
        if (shouldFetchPlanets(getState())) {
            return dispatch(fetchPlanets());
        }
    };
};
