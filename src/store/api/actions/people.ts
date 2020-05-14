import { Dispatch } from 'redux';

import { REQUEST_PEOPLE, RECEIVE_PEOPLE } from '../constants';
import { PEOPLE_API } from '../../../endpoints';
import { AppState } from '../../interfaces';
import { RequestPeopleAction, ReceivePeopleAction } from '../interfaces';

export const requestPeople = (): RequestPeopleAction => {
    return {
        type: REQUEST_PEOPLE,
    };
};

export const receivePeople = (people: any): ReceivePeopleAction => {
    return {
        type: RECEIVE_PEOPLE,
        people: people.map((man: any) => ({
            ...man,
            rotationPeriod: man.rotation_period,
            orbitalPeriod: man.orbital_period,
        })),
    };
};

export const fetchPeople = () => {
    return async (dispatch: Dispatch) => {
        dispatch(requestPeople());

        const fetchResult = await fetch(PEOPLE_API);

        let json = await fetchResult.json();
        let people = [...json.results];

        while (json.next) {
            const nextPage = await fetch(json.next);
            json = await nextPage.json();
            people = people.concat(json.results);
        }

        dispatch(receivePeople(people));
    };
};

const shouldFetchPeople = (state: AppState) => {
    return !state.apiReducer.people.isFetching;
};

export const fetchPeopleIfNeeded = () => {
    return (dispatch: any, getState: any) => {
        if (shouldFetchPeople(getState())) {
            return dispatch(fetchPeople());
        }
    };
};
