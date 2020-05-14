import { Dispatch } from 'redux';

import { REQUEST_SPACESHPIS, RECEIVE_SPACESHPIS } from '../constants';
import { SPACESHPIS_API } from '../../../endpoints';
import { AppState } from '../../interfaces';
import {
    RequestSpaceshipsAction,
    ReceiveSpaceshipsAction,
} from '../interfaces';

export const requestSpaceships = (): RequestSpaceshipsAction => {
    return {
        type: REQUEST_SPACESHPIS,
    };
};

export const receiveSpaceships = (spaceships: any): ReceiveSpaceshipsAction => {
    return {
        type: RECEIVE_SPACESHPIS,
        spaceships: spaceships.map((spaceship: any) => ({
            ...spaceship,
            rotationPeriod: spaceship.rotation_period,
            orbitalPeriod: spaceship.orbital_period,
        })),
    };
};

export const fetchSpaceships = () => {
    return async (dispatch: Dispatch) => {
        dispatch(requestSpaceships());

        const fetchResult = await fetch(SPACESHPIS_API);

        let json = await fetchResult.json();
        let spaceships = [...json.results];

        while (json.next) {
            const nextPage = await fetch(json.next);
            json = await nextPage.json();
            spaceships = spaceships.concat(json.results);
        }

        dispatch(receiveSpaceships(spaceships));
    };
};

const shouldFetchSpaceships = (state: AppState) => {
    return !state.apiReducer.spaceships.isFetching;
};

export const fetchSpaceshipsIfNeeded = () => {
    return (dispatch: any, getState: any) => {
        if (shouldFetchSpaceships(getState())) {
            return dispatch(fetchSpaceships());
        }
    };
};
