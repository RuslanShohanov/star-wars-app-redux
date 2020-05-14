import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom';

import { Planets } from '../../containers/api/planets';
import { People } from '../../containers/api/people';
import { Spaceships } from '../../containers/api/spaceships';

export const ApiPage = () => {
    const match = useRouteMatch();

    return (
        <Router>
            <div>
                <nav className="api-menu">
                    <ul className="items">
                        <li className="api-planets">
                            <Link to={`${match.url}/planets`}>Planets</Link>
                        </li>
                        <li className="api-spaceships">
                            <Link to={`${match.url}/spaceships`}>
                                Spaceships
                            </Link>
                        </li>
                        <li className="api-people">
                            <Link to={`${match.url}/people`}>People</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path={`${match.url}/people`} exact={true}>
                        <People />
                    </Route>
                    <Route path={`${match.url}/spaceships`} exact={true}>
                        <Spaceships />
                    </Route>
                    <Route path={`${match.url}/planets`} exact={true}>
                        <Planets />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
