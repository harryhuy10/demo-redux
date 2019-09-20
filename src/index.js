import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './store';

import App from './App';
import Navigation from './Navigation';

ReactDOM.render(
 <Provider store={configureStore()}>
   <Navigation />

 </Provider>,
 document.getElementById('root')
);
