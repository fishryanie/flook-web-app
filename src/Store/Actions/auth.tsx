import actionTypes from "./constants";

//=============================// ACCOUNT //====================================//

const Logout = () => ({type: actionTypes.logout})
const LogoutSuccess = (data: any) => ({type: actionTypes.logoutSuccess, payload: data})
const LogoutFailure = (data: any) => ({type: actionTypes.logoutFailure, payload: data})

const Login = (data:any) => ({type: actionTypes.login, payload: data})
const LoginSuccess = (data: any) => ({type: actionTypes.loginSuccess, payload: data})
const LoginFailure = (data: any) => ({type: actionTypes.loginFailure, payload: data})

const Register = (data:any) => ({type: actionTypes.register, payload: data})
const RegisterSuccess = (data: any) => ({type: actionTypes.registerSuccess, payload: data})
const RegisterFailure = (data: any) => ({type: actionTypes.registerFailure, payload: data})

const ForgotPass = (id: any, data:any) => ({type: actionTypes.forgotPass, payload: {id, data}})
const ForgotPassSuccess = (data: any) => ({type: actionTypes.forgotPassSuccess, payload: data})
const ForgotPassFailure = (data: any) => ({type: actionTypes.forgotPassFailure, payload: data})

const ChangePass = (data: any) => ({type: actionTypes.changePass, payload: data})
const ChangePassSuccess = (data: any) => ({type: actionTypes.changePassSuccess, payload: data})
const ChangePassFailure = (data: any) => ({type: actionTypes.changePassFailure, payload: data})

//=============================// USER //====================================//

const NewMember = (time: any) => ({type: actionTypes.newMember, payload: time})
const NewMemberFailure = (data: any) => ({type: actionTypes.newMemberFailure, payload: data})
const NewMemberSuccess = (data: any) => ({type: actionTypes.newMemberSuccess, payload: data})

const FindOneUser = () => ({type: actionTypes.findOneUser})
const FindOneUserFailure = (data: any) => ({type: actionTypes.findOneUserFailure, payload: data})
const FindOneUserSuccess = (data: any) => ({type: actionTypes.findOneUserSuccess, payload: data})

const FindManyUser = (token:string) => ({type: actionTypes.findManyUser, payload: token})
const FindManyUserFailure = (data: any) => ({type: actionTypes.findManyUserFailure, payload: data})
const FindManyUserSuccess = (data: any) => ({type: actionTypes.findManyUserSuccess, payload: data})

const InsertOneUser = (data: any) => ({ type: actionTypes.insertOneUser, payload: data});
const InsertOneUserFailure = (data:any) => ({type: actionTypes.insertOneUserFailure, payload: data});
const InsertOneUserSuccess = (data:any) => ({type: actionTypes.insertOneUserSuccess, payload: data});

const UpdateOneUser = (id: any, data: any) => ({ type: actionTypes.updateOneUser, payload: { id, data }});
const UpdateOneUserFailure = (data:any) => ({type: actionTypes.updateOneUserFailure, payload: data});
const UpdateOneUserSuccess = (data:any) => ({type: actionTypes.updateOneUserSuccess, payload: data});

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

const FindManyFeature = () => ({type: actionTypes.findManyFeature})
const FindManyFeatureFailure = (data: any) => ({type: actionTypes.findManyFeatureFailure, payload: data})
const FindManyFeatureSuccess = (data: any) => ({type: actionTypes.findManyFeatureSuccess, payload: data})

const DecentralizationFeature = (setFeature: any, data: any, id: any) => ({type: actionTypes.decentralizationFeature, payload: { setFeature, data, id}})
const DecentralizationFeatureFailure = (data: any) => ({type: actionTypes.decentralizationFeatureFailure, payload: data})
const DecentralizationFeatureSuccess = (data: any) => ({type: actionTypes.decentralizationFeatureSuccess, payload: data})

const FindOneFeatureGroup = () => ({type: actionTypes.findOneFeatureGroup})
const FindOneFeatureGroupFailure = (data: any) => ({type: actionTypes.findOneFeatureGroupFailure, payload: data})
const FindOneFeatureGroupSuccess = (data: any) => ({type: actionTypes.findOneFeatureGroupSuccess, payload: data})

//=============================// ROLE //====================================//

const FindManyRole = () => ({type: actionTypes.findManyRole})
const FindManyRoleFailure = (data: any) => ({type: actionTypes.findManyRoleFailure, payload: data})
const FindManyRoleSuccess = (data: any) => ({type: actionTypes.findManyRoleSuccess, payload: data})

const InsertOneRole = (data: any) => ({ type: actionTypes.insertOneRole, payload: data});
const InsertOneRoleFailure = (data:any) => ({type: actionTypes.insertOneRoleFailure, payload: data});
const InsertOneRoleSuccess = (data:any) => ({type: actionTypes.insertOneRoleSuccess, payload: data});

const UpdateOneRole = (id: any, data: any) => ({ type: actionTypes.updateOneRole, payload: { id, data }});
const UpdateOneRoleFailure = (data:any) => ({type: actionTypes.updateOneRoleFailure, payload: data});
const UpdateOneRoleSuccess = (data:any) => ({type: actionTypes.updateOneRoleSuccess, payload: data});


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
  Logout, LogoutSuccess, LogoutFailure,
  Register, RegisterSuccess, RegisterFailure,
  ForgotPass, ForgotPassSuccess, ForgotPassFailure,
  ChangePass, ChangePassSuccess, ChangePassFailure,

  FindOneUser, FindOneUserFailure, FindOneUserSuccess,

  FindManyUser, FindManyUserSuccess, FindManyUserFailure,
  DeleteOneUser, DeleteOneUserSuccess, DeleteOneUserFailure,
  InsertOneUser, InsertOneUserSuccess, InsertOneUserFailure,
  UpdateOneUser, UpdateOneUserSuccess, UpdateOneUserFailure,
  RemoveOneUser, RemoveOneUserSuccess, RemoveOneUserFailure,
  RemoveManyUser, RemoveManyUserSuccess, RemoveManyUserFailure,

  NewMember, NewMemberFailure, NewMemberSuccess,

  FindManyRole, FindManyRoleFailure, FindManyRoleSuccess,
  DeleteOneRole, DeleteOneRoleSuccess, DeleteOneRoleFailure,
  InsertOneRole, InsertOneRoleSuccess, InsertOneRoleFailure,
  UpdateOneRole, UpdateOneRoleSuccess, UpdateOneRoleFailure,
  RemoveOneRole, RemoveOneRoleSuccess, RemoveOneRoleFailure,
  RemoveManyRole, RemoveManyRoleSuccess, RemoveManyRoleFailure,

  FindManyFeature, FindManyFeatureFailure, FindManyFeatureSuccess,
  DecentralizationFeature, DecentralizationFeatureSuccess, DecentralizationFeatureFailure,

  FindOneFeatureGroup, FindOneFeatureGroupFailure, FindOneFeatureGroupSuccess,

}
