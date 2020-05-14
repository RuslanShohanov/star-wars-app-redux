import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom';

export const ApiPage = () => {
    let match = useRouteMatch();

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
                    <Route path="/people" exact={true}>
                        <div>people</div>
                    </Route>
                    <Route path="/spaceships" exact={true}>
                        <div>spaceships</div>
                    </Route>
                    <Route path="/planets" exact={true}>
                        <div>planets</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
