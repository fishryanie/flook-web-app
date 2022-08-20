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

const ForgotPass = async (id: any, data: forgot) => {
  const request = {
    method: 'PUT',
    api: domain + apiString.forgotPassword,
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const ChangePass = async (data: any, token: string) => {
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

const DecentralizationFeature = async (setFeature: any, data: any, id: any, token: any) => {
  const request = {
    method: 'PUT',
    api: domain + apiString.decentralization + `?setFeature=${setFeature}`,
    body: {data: data, userId: id},
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const FindOneFeatureGroup = async (data: any, token: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.findOneFeatureGroup,
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const InsertOneUser = async (data: any, token: any) => {
  const request = {
    method: 'POST',
    api: domain + apiString.insertOneUser,
    body: data,
    token: token
  };
  const response = await requestAPI(request);
  return response;
}

const UpdateOneUser = async (id: any, data: any, token: any) => {
  const request = {
    method: 'PUT',
    api: domain + apiString.updateOneUser + `?id=${id}`,
    body: data,
    token: token
  };
  const response = await requestAPI(request);
  return response;
}

const InsertOneRole = async (data: any, token: any) => {
  const request = {
    method: 'POST',
    api: domain + apiString.insertOneRole,
    body: data,
    token: token
  };
  const response = await requestAPI(request);
  return response;
}

const UpdateOneRole = async (id: any, data: any, token: any) => {
  const request = {
    method: 'PUT',
    api: domain + apiString.updateOneRole + `?id=${id}`,
    body: data,
    token: token
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

const FindOneUser = async (data: any, token: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.findOneUser,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const NewMember = async (time: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.newmember + `?time=${time}`,
  }
  const response = await requestAPI(request)
  return response
}



export default {
  Login, Register, ForgotPass, ChangePass,

  FindOneUser, NewMember,

  FindManyUser, RemoveOneUser, RemoveManyUser, InsertOneUser, UpdateOneUser,
  
  FindManyRole, RemoveOneRole, RemoveManyRole, InsertOneRole, UpdateOneRole,

  FindManyFeature, DecentralizationFeature,
  
  FindOneFeatureGroup,
  
}