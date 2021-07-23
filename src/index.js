import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './containers/store/store';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer); 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
