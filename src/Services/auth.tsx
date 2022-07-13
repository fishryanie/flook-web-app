import { requestAPI } from "../Functions/GlobalFunc";
import { domain } from "../Configs/api";
import apiString from '../Configs/api'


interface login {
  userName: string, 
  password: string
}

interface register extends login {
  email: string,
  phoneNumber: number, 
  passwordComfirm: string
}

interface forgot {
  email: string, 
}

const Login = async (data: login) => {
  const request = {
    method: 'POST',
    api: domain + apiString.login,
    body: {...data}
  };
  const response = await requestAPI(request);
  return response;
};

const Register = async (data: register) => {
  const request = {
    method: 'POST',
    api: domain + apiString.register,
    body: {...data}
  };
  const response = await requestAPI(request);
  return response;
};

const ForgotPass = async (data: forgot) => {
  const request = {
    method: 'PUT',
    api: domain + apiString.forgotPassword,
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const ChangePass = async (data: any, token: string) => {
  console.log("service", data)
  const request = {
    method: 'PUT',
    api: domain + apiString.changePassword,
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const FindManyUser = async (data: any, token: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.findManyUser,
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const FindManyRole = async (data: any, token: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.findManyRole,
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const FindManyFeature = async (data: any, token: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.findManyFeature,
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const FindManyFeatureGroup = async (data: any, token: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.findManyFeatureGroup,
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const RemoveOneRole = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeOneRole + `?id=${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const RemoveOneUser = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeOneUser + `?id=${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const RemoveManyRole = async (data: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyRole,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const RemoveManyUser = async (data: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyUsers,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}




export default {
  Login, Register, ForgotPass, ChangePass,

  FindManyUser, RemoveOneUser, RemoveManyUser,
  
  FindManyRole, RemoveOneRole, RemoveManyRole,

  FindManyFeature, 
  
  FindManyFeatureGroup,
  
}