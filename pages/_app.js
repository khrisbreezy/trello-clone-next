import {Provider} from "react-redux";
import App, {Container} from 'next/app';
import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import storage from 'redux-persist/lib/storage';

import {persistReducer, persistStore} from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react";
import phaseData from "../store/reducers/phaseStore";

import '../styles/sass/main.scss';
import AuthModal from "../components/AuthModal";



const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['']
}

const reducers = combineReducers({
    phaseData: persistReducer(persistConfig, phaseData)
});

const store = process.env.environment === 'dev' ? createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware))) : createStore(reducers, applyMiddleware(thunkMiddleware));


const persistor = persistStore(store);

export default class extends App {
    render() {
        const {Component, pageProps} = this.props;

        return <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                    <Component {...pageProps} />
                    <AuthModal />
                </PersistGate>
        </Provider>
    }
}
