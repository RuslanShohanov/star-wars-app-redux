import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from 'react-router-dom';

import { ApiPage } from './api/api-page';
import { Listing } from '../containers/characters/listing';
import { Form } from '../containers/characters/form';
import { API, CHARACTERS, CHARACTERS_ADD, CHARACTERS_EDIT } from '../endpoints';

export const AppComponent = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-link">
                            <Link className="nav-link" to={CHARACTERS}>
                                Star Wars Characters
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link className="nav-link" to={API}>
                                Star Wars API
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={CHARACTERS} exact={true}>
                        <Listing />
                    </Route>
                    <Route path={CHARACTERS_ADD} exact={true}>
                        <Form />
                    </Route>
                    <Route path={CHARACTERS_EDIT} exact={true}>
                        <Form />
                    </Route>
                    <Route path={API} exact={true}>
                        <ApiPage />
                    </Route>
                    <Redirect from="/" to={CHARACTERS} />
                </Switch>
            </div>
        </Router>
    );
};
