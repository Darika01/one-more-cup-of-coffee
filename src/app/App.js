import * as React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Layout from 'app/components/Layout';
import Home from 'app/components/pages/Home/Home';
import SingleCategory from 'app/components/pages/SingleCategory/SingleCategory';
import NotFound from 'app/components/pages/NotFound/NotFound';

import { useStyles } from './styles';
import Article from 'app/components/pages/Article/Article';

function App() {
    useStyles();
    return (
        <>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            exact
                            path="/kategorie/:category"
                            component={SingleCategory}
                        />
                        <Route
                            path="/kategorie/:category/:id"
                            component={Article}
                        />
                        {/* <Route path="/404/:not-found" component={NotFound} /> */}
                        <Route path="/404" component={NotFound} />
                        <Redirect to="/404" />
                    </Switch>
                </Layout>
            </Router>
        </>
    );
}

export default App;
