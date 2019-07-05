import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux'; //allows our application to interact with our store
import thunk from 'redux-thunk'; //a middleware to for asyncronous code
import {reduxFirestore, getFirestore} from 'redux-firestore';
//import {reactReduxFirebase ,getFirebase} from 'react-redux-firebase';
import fbConfig from './config/fbConfig'


const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore})),//async to firestore and firebase
        reduxFirestore(fbConfig),
        )
    );


ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
    );

serviceWorker.unregister();
