import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './containers/store/reducers/counter';
import resultReducer from './containers/store/reducers/result';

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

const store = createStore(rootReducer); 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
