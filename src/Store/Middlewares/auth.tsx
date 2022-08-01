import { all, put, delay, takeLatest } from "redux-saga/effects";
import { toastConfig } from '../../Functions/toast'
import { responseGenerator } from './index'
import actionTypes from '../Actions/constants';
import Cookie from '../../hooks/Cookie';
import Services from '../../Services'
import Action from '../Actions'
import { toast } from "react-toastify";
import localStorage from "redux-persist/es/storage";



function* Login(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.Login(action.payload)
    console.log('response', response)
    if (response.statusCode === 200) {
      yield Cookie.removeCookie('token');
      // set cookie
      yield Cookie.setCookie('token', response.data.accessToken);
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.LoginSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
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
      yield put(Action.auth.FindManyUser(readCookie))
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
    const response: responseGenerator = yield Services.auth.UpdateOneUser(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.UpdateOneUserSuccess(response))
      yield put(Action.auth.FindManyUser(readCookie))
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
    // const data = action.payload
    // console.log(data)
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveOneUser(action.payload, readCookie);
    console.log('response', response)
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
    const data = action.payload
    console.log(data)
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveManyUser(action.payload, readCookie);
    console.log('response comic', response)
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

function* RemoveOneRole(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveOneRole(action.payload, readCookie);
    console.log('response', response)
    if(response.statusCode === 200){
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.RemoveOneRoleSuccess(response))
      yield put(Action.auth.FindManyRole(''))
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
    const data = action.payload
    console.log(data)
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.RemoveManyRole(action.payload, readCookie);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.RemoveManyRoleSuccess(response))
      yield put(Action.auth.FindManyRole(''))
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

function* FindManyFeatureGroup(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.FindManyFeatureGroup(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.FindManyFeatureGroupSuccess(response.data))
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.FindManyFeatureGroupFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* FindUserLoggin(action: any){
  try {
    const readCookie = Cookie.getCookie('token')
    const response: responseGenerator = yield Services.auth.FindUserLoggin(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield toast.success(response.message, toastConfig )
      yield put(Action.auth.FindUserLogginSuccess(response.data))
    }else{
      yield toast.error(response.message, toastConfig )
      yield put(Action.auth.FindUserLogginFailure(response.message))
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
    takeLatest(actionTypes.register, Register),
    takeLatest(actionTypes.forgotPass, ForgotPass),
    takeLatest(actionTypes.changePass, ChangePass),

    takeLatest(actionTypes.findUserLoggin, FindUserLoggin),

    takeLatest(actionTypes.findManyUser, FindManyUser),
    takeLatest(actionTypes.insertOneUser, InsertOneUser),
    takeLatest(actionTypes.updateOneUser, UpdateOneUser),
    takeLatest(actionTypes.removeOneUser, RemoveOneUser),
    takeLatest(actionTypes.removeManyUser, RemoveManyUser),

    takeLatest(actionTypes.findManyRole, FindManyRole),
    takeLatest(actionTypes.removeOneRole, RemoveOneRole),
    takeLatest(actionTypes.removeManyRole, RemoveManyRole),

    takeLatest(actionTypes.findManyFeature, FindManyFeature),
    takeLatest(actionTypes.findManyFeatureGroup, FindManyFeatureGroup),

  ])
}