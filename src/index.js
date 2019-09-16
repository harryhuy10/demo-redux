import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import Navigation from './Navigation';

ReactDOM.render(
 <Provider store={configureStore()}>
   <Navigation />

 </Provider>,
 document.getElementById('root')
);
