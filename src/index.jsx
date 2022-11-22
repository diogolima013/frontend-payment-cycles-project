import React from "react";
import ReactDom from 'react-dom'
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";

import App from './main/app'
import reducers from './main/reducers'

const store = applyMiddleware(promise)(createStore)(reducers)
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))