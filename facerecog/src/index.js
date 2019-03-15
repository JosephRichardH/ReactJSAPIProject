import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from './store';
import AppRouter from './routes/AppRouter';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'unistore/react';


const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>, 
        document.getElementById('root'));
}

render(AppRouter);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
