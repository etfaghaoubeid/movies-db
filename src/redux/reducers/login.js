import {LOGIN} from '../actions/actionsTypes'
const initstate ={
    isLogin:''
}
export  function login(state = initstate,action ){
    switch(action.type){
        case LOGIN :
            return {
                ...state,
              isLogin:action.payload,
            };
        default: 
            return state;
    }
    
}