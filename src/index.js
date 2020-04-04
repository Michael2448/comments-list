import React from 'react';         
import ReactDOM from 'react-dom';  

import CommentsListApp from './containers/app';
import {createStore} from 'redux';
import reducerFunc from './reducers';

const arr = localStorage.getItem('tea') ? (JSON.parse(localStorage.getItem('tea'))) : [];
const arrFilter = arr.filter(item => item !== null);

const initialState = arrFilter;
const store = createStore(reducerFunc, initialState);

ReactDOM.render (
    <CommentsListApp store = {store} />,                     
    document.querySelector('.js-container')   
);



