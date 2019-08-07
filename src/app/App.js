import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Layout from './components/Layout';
import Home from './components/pages/Home/Home';

function App() {
return (
    <React.Fragment>
        {/* <CssBaseline /> */}
        <Layout>
            <Home />
        </Layout>
    </React.Fragment>
);
}

export default App;
