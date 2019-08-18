import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Layout from './components/Layout';
import Home from './components/pages/Home/Home';
import SingleCategory from './components/pages/SingleCategory/SingleCategory';

function App() {
    
    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
            <Router>
                <Layout>
                        <Route exact path="/" component={Home} />
                        <Route path="/kategorie/:category" component={SingleCategory} />
                </Layout>
            </Router>
        </React.Fragment>
    );
}

export default App;
