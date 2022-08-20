import actionTypes from '../Actions/constants';


const stateDefault = {
  login: {},
  register: {},
  forgot: {},
  change: {},
  arrayRole: [],
  arrayUser: [],
  arrayFeatures: [],
  arrayFeatureGroups: [],
  userLoggin: {},
  arrayNewMember: [],
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
    case actionTypes.findManyRoleSuccess: {
      return {...state, arrayRole: [...action.payload] }
    }        
    case actionTypes.findManyUserSuccess: {
      return {...state, arrayUser: [...action.payload] }
    }  
    case actionTypes.findManyFeatureSuccess: {
      return {...state, arrayFeature: [...action.payload]}
    }
    case actionTypes.findOneFeatureGroupSuccess: {
      return {...state, arrayFeatureGroups: [...action.payload]}
    }
    case actionTypes.findOneUserSuccess: {
      return {...state, userLoggin: action.payload}
    }
    case actionTypes.newMemberSuccess: {
      return {...state, arrayNewMember: action.payload}
    }

    default: return {...state} 
  }
}