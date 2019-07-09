import {createStore}from 'redux';
import rootReducer from './reducers/'
const initState = {
    isLogin:null
}
export  const store = createStore(rootReducer)