import actionTypes from "./constants";

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

const FindUser = (token:string) => ({type: actionTypes.findUser, payload: token})
const FindUserFailure = (data: any) => ({type: actionTypes.findUserFailure, payload: data})
const FindUserSuccess = (data: any) => ({type: actionTypes.findUserSuccess, payload: data})

const FindManyRole = (token:string) => ({type: actionTypes.findRole, payload: token})
const FindManyRoleFailure = (data: any) => ({type: actionTypes.findRoleFailure, payload: data})
const FindManyRoleSuccess = (data: any) => ({type: actionTypes.findRoleSuccess, payload: data})

const FindManyFeature = (token:string) => ({type: actionTypes.findFeature, payload: token})
const FindManyFeatureFailure = (data: any) => ({type: actionTypes.findFeatureFailure, payload: data})
const FindManyFeatureSuccess = (data: any) => ({type: actionTypes.findFeatureSuccess, payload: data})

const FindManyFeatureGroup = (token: string) => ({type: actionTypes.findFeatureGroup, payload: token})
const FindManyFeatureGroupFailure = (data: any) => ({type: actionTypes.findFeatureGroupFailure, payload: data})
const FindManyFeatureGroupSuccess = (data: any) => ({type: actionTypes.findFeatureGroupSuccess, payload: data})

const DeleteRole = (id: any) => ({type: actionTypes.deleteRole, payload: id})
const DeleteRoleFailure = (data: any) => ({type: actionTypes.deleteRoleFailure, payload: data})
const DeleteRoleSuccess = (data: any) => ({type: actionTypes.deleteRoleSuccess, payload: data})

const DeletedRole = (id: any) => ({type: actionTypes.deletedRole, payload: id})
const DeletedRoleFailure = (data: any) => ({type: actionTypes.deletedRoleFailure, payload: data})
const DeletedRoleSuccess = (data: any) => ({type: actionTypes.deletedRoleSuccess, payload: data})

const DeletedManyRole = (data:any) => ({type: actionTypes.deletedManyRole, payload: data})
const DeletedManyRoleFailure = (data:any) => ({type: actionTypes.deletedManyRoleFailure, payload: data});
const DeletedManyRoleSuccess = (data:any) => ({type: actionTypes.deletedManyRoleSuccess, payload: data});

const DeleteUser = (id: any) => ({type: actionTypes.deleteUser, payload: id})
const DeleteUserFailure = (data: any) => ({type: actionTypes.deleteUserFailure, payload: data})
const DeleteUserSuccess = (data: any) => ({type: actionTypes.deleteUserSuccess, payload: data})

const DeletedUser = (id: any) => ({type: actionTypes.deletedUser, payload: id})
const DeletedUserFailure = (data: any) => ({type: actionTypes.deletedUserFailure, payload: data})
const DeletedUserSuccess = (data: any) => ({type: actionTypes.deletedUserSuccess, payload: data})

const DeletedManyUser = (data:any) => ({type: actionTypes.deletedManyUser, payload: data})
const DeletedManyUserFailure = (data:any) => ({type: actionTypes.deletedManyUserFailure, payload: data});
const DeletedManyUserSuccess = (data:any) => ({type: actionTypes.deletedManyUserSuccess, payload: data});


export default {
  Login, LoginSuccess, LoginFailure, 
  Register, RegisterSuccess, RegisterFailure,
  ForgotPass, ForgotPassSuccess, ForgotPassFailure,
  ChangePass, ChangePassSuccess, ChangePassFailure,

  FindUser, FindUserFailure, FindUserSuccess,
  FindManyRole, FindManyRoleFailure, FindManyRoleSuccess,

  FindManyFeature, FindManyFeatureFailure, FindManyFeatureSuccess,
  FindManyFeatureGroup, FindManyFeatureGroupFailure, FindManyFeatureGroupSuccess,

  DeleteRole, DeleteRoleFailure, DeleteRoleSuccess,
  DeletedRole, DeletedRoleFailure, DeletedRoleSuccess,
  DeletedManyRole, DeletedManyRoleFailure, DeletedManyRoleSuccess,

  DeleteUser, DeleteUserFailure, DeleteUserSuccess,
  DeletedUser, DeletedUserFailure, DeletedUserSuccess,
  DeletedManyUser, DeletedManyUserFailure, DeletedManyUserSuccess,
}
