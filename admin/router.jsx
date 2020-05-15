import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import { Archetypes } from './pages/archetypes.jsx';
import { Archetype } from './pages/archetype.jsx';
import { Sidebar } from './partials/sidebar.jsx';

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var archetypeRoutes = this.props.archetypes.map(a => {
            return <Route path={"/" + a.name.toLowerCase()} render={(props) => <Archetype name={a.name} />} />;
        });

        return (
            <HashRouter>
                <Sidebar />
                <Switch>
                    {archetypeRoutes}
                    <Route path="/archetypes/:archetype" render={(props) => <div>Test</div>} />
                    <Route path="/archetypes" render={(props) => <Archetypes {...props} />} />
                    {/*<Route path="/login/" render={(props) => <Login {...props} />} />*/}
                </Switch>
            </HashRouter>
        )
    }
}
