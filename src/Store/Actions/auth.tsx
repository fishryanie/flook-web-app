import actionTypes from "./constants";

//=============================// ACCOUNT //====================================//

const Login = (data:any) => ({type: actionTypes.login, payload: data})
const LoginSuccess = (data: any) => ({type: actionTypes.loginSuccess, payload: data})
const LoginFailure = (data: any) => ({type: actionTypes.loginFailure, payload: data})

const Register = (data:any) => ({type: actionTypes.register, payload: data})
const RegisterSuccess = (data: any) => ({type: actionTypes.registerSuccess, payload: data})
const RegisterFailure = (data: any) => ({type: actionTypes.registerFailure, payload: data})

const ForgotPass = (data:any) => ({type: actionTypes.forgotPass, payload: data})
const ForgotPassSuccess = (data: any) => ({type: actionTypes.forgotPassSuccess, payload: data})
const ForgotPassFailure = (data: any) => ({type: actionTypes.forgotPassFailure, payload: data})

const ChangePass = (data: any) => ({type: actionTypes.changePass, payload: data})
const ChangePassSuccess = (data: any) => ({type: actionTypes.changePassSuccess, payload: data})
const ChangePassFailure = (data: any) => ({type: actionTypes.changePassFailure, payload: data})

//=============================// USER //====================================//

const FindManyUser = (token:string) => ({type: actionTypes.findManyUser, payload: token})
const FindManyUserFailure = (data: any) => ({type: actionTypes.findManyUserFailure, payload: data})
const FindManyUserSuccess = (data: any) => ({type: actionTypes.findManyUserSuccess, payload: data})

const DeleteOneUser = (id: any) => ({type: actionTypes.deleteOneUser, payload: id})
const DeleteOneUserFailure = (data: any) => ({type: actionTypes.deleteOneUserFailure, payload: data})
const DeleteOneUserSuccess = (data: any) => ({type: actionTypes.deleteOneUserSuccess, payload: data})

const RemoveOneUser = (id: any) => ({type: actionTypes.removeOneUser, payload: id})
const RemoveOneUserFailure = (data: any) => ({type: actionTypes.removeOneUserFailure, payload: data})
const RemoveOneUserSuccess = (data: any) => ({type: actionTypes.removeOneUserSuccess, payload: data})

const RemoveManyUser = (data:any) => ({type: actionTypes.removeManyUser, payload: data})
const RemoveManyUserFailure = (data:any) => ({type: actionTypes.removeManyUserFailure, payload: data});
const RemoveManyUserSuccess = (data:any) => ({type: actionTypes.removeManyUserSuccess, payload: data});

//=============================// FEATURE //====================================//

const FindManyFeature = (token:string) => ({type: actionTypes.findManyFeature, payload: token})
const FindManyFeatureFailure = (data: any) => ({type: actionTypes.findManyFeatureFailure, payload: data})
const FindManyFeatureSuccess = (data: any) => ({type: actionTypes.findManyFeatureSuccess, payload: data})

const FindManyFeatureGroup = (token: string) => ({type: actionTypes.findManyFeatureGroup, payload: token})
const FindManyFeatureGroupFailure = (data: any) => ({type: actionTypes.findManyFeatureGroupFailure, payload: data})
const FindManyFeatureGroupSuccess = (data: any) => ({type: actionTypes.findManyFeatureGroupSuccess, payload: data})

//=============================// ROLE //====================================//

const FindManyRole = (token:string) => ({type: actionTypes.findManyRole, payload: token})
const FindManyRoleFailure = (data: any) => ({type: actionTypes.findManyRoleFailure, payload: data})
const FindManyRoleSuccess = (data: any) => ({type: actionTypes.findManyRoleSuccess, payload: data})

const DeleteOneRole = (id: any) => ({type: actionTypes.deleteOneRole, payload: id})
const DeleteOneRoleFailure = (data: any) => ({type: actionTypes.deleteOneRoleFailure, payload: data})
const DeleteOneRoleSuccess = (data: any) => ({type: actionTypes.deleteOneRoleSuccess, payload: data})

const RemoveOneRole = (id: any) => ({type: actionTypes.removeOneRole, payload: id})
const RemoveOneRoleFailure = (data: any) => ({type: actionTypes.removeOneRoleFailure, payload: data})
const RemoveOneRoleSuccess = (data: any) => ({type: actionTypes.removeOneRoleSuccess, payload: data})

const RemoveManyRole = (data:any) => ({type: actionTypes.removeManyRole, payload: data})
const RemoveManyRoleFailure = (data:any) => ({type: actionTypes.removeManyRoleFailure, payload: data});
const RemoveManyRoleSuccess = (data:any) => ({type: actionTypes.removeManyRoleSuccess, payload: data});

export default {
  Login, LoginSuccess, LoginFailure, 
  Register, RegisterSuccess, RegisterFailure,
  ForgotPass, ForgotPassSuccess, ForgotPassFailure,
  ChangePass, ChangePassSuccess, ChangePassFailure,

  FindManyUser, FindManyUserSuccess, FindManyUserFailure,
  DeleteOneUser, DeleteOneUserSuccess, DeleteOneUserFailure,
  RemoveOneUser, RemoveOneUserSuccess, RemoveOneUserFailure,
  RemoveManyUser, RemoveManyUserSuccess, RemoveManyUserFailure,

  FindManyRole, FindManyRoleFailure, FindManyRoleSuccess,
  DeleteOneRole, DeleteOneRoleSuccess, DeleteOneRoleFailure,
  RemoveOneRole, RemoveOneRoleSuccess, RemoveOneRoleFailure,
  RemoveManyRole, RemoveManyRoleSuccess, RemoveManyRoleFailure,

  FindManyFeature, FindManyFeatureFailure, FindManyFeatureSuccess,
  FindManyFeatureGroup, FindManyFeatureGroupFailure, FindManyFeatureGroupSuccess,

}
