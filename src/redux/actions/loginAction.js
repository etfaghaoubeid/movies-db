import {LOGIN} from './actionsTypes'
export default function(){
  return function(dispatch){
    dispatch({
        payload:'login',
        type: LOGIN

    })
  }
}