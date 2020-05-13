import { createStore } from 'redux';

import { rootReducer } from './reducers';
import { initialState } from './initial-state';

export const configureStore = () => {
    return createStore(
        rootReducer,
        initialState,
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            //@ts-ignore
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};
