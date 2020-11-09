import Rooms from 'components/rooms/Rooms';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function RoomsRoute(props) {
    const {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}`}>
                <Rooms/>
            </Route>
        </Switch>
    );
}

export default RoomsRoute;