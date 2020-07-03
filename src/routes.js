import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import messageReceiver from './pages/messageReceiver';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={messageReceiver} />
            </Switch>
        </BrowserRouter>
    );
}