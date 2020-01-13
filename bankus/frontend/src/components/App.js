import React, { Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Body from './layout/Body';
import Carousel from './layout/Carousel';

import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <Fragment>
                    <Header/>
                    <Body/>
                    <div className="container">
                        <Dashboard/>
                    </div>
                    <Carousel/>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));