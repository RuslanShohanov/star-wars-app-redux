import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
} from 'react-router-dom';

import { ApiPage } from './api-page';
import { Listing } from '../containers/characters/listing';
import { Form } from '../containers/characters/form';

export const AppComponent = () => {
    return (
        <Router>
            <div>
                <nav className="main-menu">
                    <ul className="items">
                        <li className="user-listing">
                            <Link to="/characters">Star Wars Characters</Link>
                        </li>
                        <li className="api-page">
                            <Link to="/api">Star Wars API</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/characters" exact={true}>
                        <Listing />
                    </Route>
                    <Route path="/characters/add" exact={true}>
                        <Form />
                    </Route>
                    <Route path="/characters/edit/:id" exact={true}>
                        <Form />
                    </Route>
                    <Route path="/api" exact={true}>
                        <ApiPage />
                    </Route>
                    <Redirect from="/" to="/characters" />
                </Switch>
            </div>
        </Router>
    );
};
