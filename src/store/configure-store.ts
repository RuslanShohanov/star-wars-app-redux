import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducers';
import { initialState } from './initial-state';

export const configureStore = () => {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware),
            //@ts-ignore
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                //@ts-ignore
                window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
};
