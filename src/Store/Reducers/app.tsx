import actionTypes from "../Actions/constants";

const initialState = {
  authDiaLog: false,
  openDrawer: true,
  openSearch: false,
  openNotify: false,
  openCart: false,
  isSubmitting: false,
};

export const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.openDialog:{
      return {...state, authDiaLog: true }
    }
    case actionTypes.closeDialog:{
      return {...state, authDiaLog: false }
    }
    case actionTypes.onOffDrawer: { 
      return {...state, openDrawer: action.openDrawer }
    }
    case actionTypes.onOffSearch: {
      return {...state, openSearch: !state.openSearch }
    }
    case actionTypes.onOffCart: {
      return {...state, openCart: !state.openCart }
    }
    case actionTypes.onOffNotify: {
      return {...state, openNotify: !state.openNotify }
    }
    case actionTypes.submitSearch: {
      return {...state, isSubmitting: action.payload}
    }
    default: return {...state}
  }
}