import { all, put, delay, takeLatest } from "redux-saga/effects";
import { notify } from '../../Functions/GlobalFunc'
import { responseGenerator } from './index'
import actionTypes from '../Actions/constants';
import Cookie from '../../hooks/Cookie';
import Services from '../../Services'
import Action from '../Actions'



function* Login(action: any) {
  try {
    const response: responseGenerator = yield Services.auth.Login(action.payload)
    console.log('response', response)
    if (response.statusCode === 200) {
      yield Cookie.removeCookie('usrin');
      // set cookie
      yield Cookie.setCookie('usrin', response.data.accessToken)
      yield notify(response.message)
      yield put(Action.auth.LoginSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield notify(response.message)
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
      yield notify(response.message)
      yield put(Action.auth.RegisterSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield notify(response.message)
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
    const response: responseGenerator = yield Services.auth.ForgotPass(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.auth.ForgotPassSuccess(response))
    } else {
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
    const readCookie = Cookie.getCookie('usrin')

    const response: responseGenerator = yield Services.auth.ChangePass(action.payload, readCookie)
    if (response.statusCode === 200) {
      yield notify(response.message)
      yield put(Action.auth.ChangePassSuccess(response))
      yield delay(2000)
      yield put({ type: actionTypes.closeDialog })
    } else {
      yield put(Action.auth.ChangePassFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* FindUser(action: any){
  try {
    const response: responseGenerator = yield Services.auth.FindUser(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.auth.FindUserSuccess(response.data))
    }else{
      yield put(Action.auth.FindUserFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* DeletedUser(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const response: responseGenerator = yield Services.auth.deletedUser(action.payload);
    console.log('response', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.auth.DeletedUserSuccess(response))
      yield put(Action.auth.FindUser(''))
    }else {
      yield notify(response.message)
      yield put(Action.auth.DeletedUserFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyUser(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.auth.deletedManyUser(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.auth.DeletedManyUserSuccess(response))
      yield put(Action.auth.FindUser(''))
    }else {
      yield notify(response.message)
      yield put(Action.auth.DeletedManyUserFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindManyRole(action: any){
  try {
    const response: responseGenerator = yield Services.auth.FindManyRole(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.auth.FindManyRoleSuccess(response.data))
    }else{
      yield put(Action.auth.FindManyRoleFailure(response.message))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('ChangePass')
  }
}

function* DeletedRole(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const response: responseGenerator = yield Services.auth.deletedRole(action.payload);
    console.log('response', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.auth.DeletedRoleSuccess(response))
      yield put(Action.auth.FindManyRole(''))
    }else {
      yield notify(response.message)
      yield put(Action.auth.DeletedRoleFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyRole(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.auth.deletedManyRole(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.auth.DeletedManyRoleSuccess(response))
      yield put(Action.auth.FindManyRole(''))
    }else {
      yield notify(response.message)
      yield put(Action.auth.DeletedManyRoleFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindManyFeature(action: any){
  try {
    const response: responseGenerator = yield Services.auth.FindManyFeature(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.auth.FindManyFeatureSuccess(response.data))
    }else{
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
    const response: responseGenerator = yield Services.auth.FindManyFeatureGroup(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.auth.FindManyFeatureGroupSuccess(response.data))
    }else{
      yield put(Action.auth.FindManyFeatureGroupFailure(response.message))
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

    takeLatest(actionTypes.findUser, FindUser),
    takeLatest(actionTypes.deletedUser, DeletedUser),
    takeLatest(actionTypes.deletedManyUser, DeletedManyUser),

    takeLatest(actionTypes.findRole, FindManyRole),
    takeLatest(actionTypes.deletedRole, DeletedRole),
    takeLatest(actionTypes.deletedManyRole, DeletedManyRole),

    takeLatest(actionTypes.findFeature, FindManyFeature),
    takeLatest(actionTypes.findFeatureGroup, FindManyFeatureGroup),

  ])
}