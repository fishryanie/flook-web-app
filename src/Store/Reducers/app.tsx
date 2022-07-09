import actionTypes from "../Actions/constants";

const initialState = {
  authDiaLog: false,
  accept: {
    status: false,
    title: 'Just Checking...',
    content: 'Delete your Account?',
    description: 'This action is final and you will be unable to recover any data',
    handleYes: null
  },
  openDrawer: true,
  openSearch: false,
  openNotify: false,
  openCart: false,
  isSubmitting: false,
  infoRowTable: {},
  typeDialog: '{}',
};

export const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.openDialog:{
      return {...state, authDiaLog: true, typeDialog: action.payload?.typeDialog }
    }
    case actionTypes.closeDialog:{
      return {...state, authDiaLog: false }
    }
    case actionTypes.openAccetp: {
      return {...state, accept: {status: true, ...action.payload}}
    }
    case actionTypes.closeAccetp: {
      state.accept.status = false
      return {...state }
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
    case 'infoRowTable': {
      console.log('infoRowTable reducer', action.payload);
      return {...state, infoRowTable: action.payload}
    }
    default: return {...state}
  }
}