require('babel-polyfill');
// add a github repository to the app
// rate a github repository
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import RepositoryList from './components/repository-list';

document.addEventListener('DOMContentLoaded', () =>
                          ReactDOM.render(
    <Provider store={store}>
    <RepositoryList />
    </Provider>,
    document.getElementById('app')
                         )
);
