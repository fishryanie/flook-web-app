import { all, put, delay, takeLatest } from "redux-saga/effects";
import { toastConfig } from '../../Functions/toast'
import { responseGenerator } from './index'
import actionTypes from '../Actions/constants';
import Cookie from '../../hooks/Cookie';
import Services from '../../Services'
import Action from '../Actions'
import { toast } from "react-toastify";


function* Login(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.Login(action.payload)
    if (response.statusCode === 200) {
      yield Cookie.removeCookie('token');
      // set cookie
      yield Cookie.setCookie('token', response.data.accessToken);
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.LoginSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
      yield window.location.reload();
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.LoginFailure(response))
    }
  } catch (error) {
    console.log('Error LoginSagas', error)
  } finally {
    console.log('LoginSagas')
  }
}

function* Logout(action: any) {
  try {
      yield Cookie.removeCookie('token');
      yield toast.success('Logout Successfully!!!', toastConfig )
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
      yield window.location.reload();
  } catch (error) {
    console.log('Error LoginSagas', error)
  } finally {
    console.log('LogoutSagas')
  }
}

function* Register(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.Register(action.payload)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.RegisterSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.RegisterFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('Register')
  }
}

function* ForgotPass(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.ForgotPass(action.payload.id, action.payload.data)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.ForgotPassSuccess(response))
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.ForgotPassFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ForgotPass')
  }
}

function* ChangePass(action: any) {
  try {
    const readCookie = Cookie.getCookie('token')

    const response: responseGenerator = yield Services.auth.ChangePass(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.ChangePassSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.ChangePassFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* FindManyUser(action: any){
  const readCookie = Cookie.getCookie('token')
  try {
    const response: responseGenerator = yield Services.auth.FindManyUser(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.FindManyUserSuccess(response.data))
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.FindManyUserFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* InsertOneUser(action: any) {
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.InsertOneUser(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.InsertOneUserSuccess(response))
      yield delay(2000)
      yield put(Action.auth.FindManyUser(readCookie))
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.InsertOneUserFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('InsertOneUser')
  }
}

function* UpdateOneUser(action: any) {
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.UpdateOneUser(action.payload.id, action.payload.data, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.UpdateOneUserSuccess(response))
      yield delay(2000)
      yield put(Action.auth.FindManyUser(readCookie))
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.UpdateOneUserFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('UpdateOneUser')
  }
}

function* RemoveOneUser(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveOneUser(action.payload, readCookie);
    if(response.statusCode === 200){
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.RemoveOneUserSuccess(response))
      yield put(Action.auth.FindManyUser(''))
    }else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.RemoveOneUserFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* RemoveManyUser(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveManyUser(action.payload, readCookie);
    if(response.statusCode === 200){
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.RemoveManyUserSuccess(response))
      yield put(Action.auth.FindManyUser(''))
    }else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.RemoveManyUserFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindManyRole(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.FindManyRole(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.FindManyRoleSuccess(response.data))
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.FindManyRoleFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* InsertOneRole(action: any) {
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.InsertOneRole(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.InsertOneRoleSuccess(response))
      yield delay(2000)
      yield put(Action.auth.FindManyRole())
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.InsertOneRoleFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('InsertOneRole')
  }
}

function* UpdateOneRole(action: any) {
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.UpdateOneRole(action.payload.id, action.payload.data, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.UpdateOneRoleSuccess(response))
      yield delay(2000)
      yield put(Action.auth.FindManyRole())
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.UpdateOneRoleFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('UpdateOneRole')
  }
}

function* RemoveOneRole(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveOneRole(action.payload, readCookie);
    if(response.statusCode === 200){
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.RemoveOneRoleSuccess(response))
      yield put(Action.auth.FindManyRole())
    }else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.RemoveOneRoleFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* RemoveManyRole(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveManyRole(action.payload, readCookie);
    if(response.statusCode === 200){
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.RemoveManyRoleSuccess(response))
      yield put(Action.auth.FindManyRole())
    }else {
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.RemoveManyRoleFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindManyFeature(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.FindManyFeature(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.FindManyFeatureSuccess(response.data))
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.FindManyFeatureFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* DecentralizationFeature(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.DecentralizationFeature(action.payload.setFeature, action.payload.data, action.payload.id, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.DecentralizationFeatureSuccess(response.data))
      yield put(Action.auth.FindOneFeatureGroup())
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.DecentralizationFeatureFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* FindOneFeatureGroup(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.FindOneFeatureGroup(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.FindOneFeatureGroupSuccess(response.data))
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.FindOneFeatureGroupFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* FindOneUser(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.FindOneUser(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.FindOneUserSuccess(response.data))
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.FindOneUserFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}


export default function* authSaga() {
  yield all([
    takeLatest(actionTypes.login, Login),
    takeLatest(actionTypes.logout, Logout),
    takeLatest(actionTypes.register, Register),
    takeLatest(actionTypes.forgotPass, ForgotPass),
    takeLatest(actionTypes.changePass, ChangePass),

    takeLatest(actionTypes.findOneUser, FindOneUser),

    takeLatest(actionTypes.findManyUser, FindManyUser),
    takeLatest(actionTypes.insertOneUser, InsertOneUser),
    takeLatest(actionTypes.updateOneUser, UpdateOneUser),
    takeLatest(actionTypes.removeOneUser, RemoveOneUser),
    takeLatest(actionTypes.removeManyUser, RemoveManyUser),

    takeLatest(actionTypes.findManyRole, FindManyRole),
    takeLatest(actionTypes.insertOneRole, InsertOneRole),
    takeLatest(actionTypes.updateOneRole, UpdateOneRole),
    takeLatest(actionTypes.removeOneRole, RemoveOneRole),
    takeLatest(actionTypes.removeManyRole, RemoveManyRole),

    takeLatest(actionTypes.findManyFeature, FindManyFeature),
    takeLatest(actionTypes.decentralizationFeature, DecentralizationFeature),

    takeLatest(actionTypes.findOneFeatureGroup, FindOneFeatureGroup),

  ])
}