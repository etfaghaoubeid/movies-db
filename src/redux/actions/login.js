import {LOGIN} from './actionsTypes'
export default function login (){
  return function(dispatch){
    dispatch({
        payload:'loginnn',
        type: LOGIN
    })
  }

}