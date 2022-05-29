import actionTypes from '../Actions/constants';


const stateDefault = {
  login: {},
  register: {},
  forgot: {},
  change: {},
  arrayUser: []
}


export const AuthReducer = (state = stateDefault, action:any) => {
  switch (action.type) {
    case actionTypes.loginSuccess: {
      return {...state, login: action.payload }
    }      
    case actionTypes.registerSuccess: {
      return {...state, register: action.payload}
    }      
    case actionTypes.forgotPassSuccess: {
      return {...state, forgot: action.payload }
    }      
    case actionTypes.changePassSuccess: {
      return {...state, change: action.payload }
    }         
    case actionTypes.findUserSuccess: {
      return {...state, arrayUser: [...action.payload] }
    }     
    default: return {...state} 
  }
}