import {LOGIN} from '../actions/actionsTypes'
const initstate ={}
export  function login(state = initstate,action ){
    switch(action.type){
        case LOGIN :
            return {
              payload :'login',
            };
        default: 
            return state;
    }
    
}