import { requestAPI } from "../Functions/GlobalFunc";
import { API_AUTH, API_ROLE, API_FEATURE, API_FEATURE_GROUP } from "../Configs/api";


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
    api: API_AUTH + '/login',
    body: {...data, type: 'LOGIN_APP' }
  };
  const response = await requestAPI(request);
  return response;
};

const Register = async (data: register) => {
  const request = {
    method: 'POST',
    api: API_AUTH + '/register',
    body: {...data, type: 'CREATE_APP' }
  };
  const response = await requestAPI(request);
  return response;
};

const ForgotPass = async (data: forgot) => {
  const request = {
    method: 'PUT',
    api: API_AUTH + '/forgotPassword',
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const ChangePass = async (data: any, token: string) => {
  console.log("service", data)
  const request = {
    method: 'PUT',
    api: API_AUTH + '/changePassword',
    body: data,
    token: token,
  };
  const response = await requestAPI(request);
  return response;
}

const FindUser = async (data: any) => {
  const request = {
    method: 'GET',
    api: API_AUTH + '/find-many-user',
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const FindManyRole = async (data: any) => {
  const request = {
    method: 'GET',
    api: API_ROLE + '/find-many-role',
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const FindManyFeature = async (data: any) => {
  const request = {
    method: 'GET',
    api: API_FEATURE + '/findMany',
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const FindManyFeatureGroup = async (data: any) => {
  const request = {
    method: 'GET',
    api: API_FEATURE_GROUP + '/findMany',
    body: data
  };
  const response = await requestAPI(request);
  return response;
}

const deletedRole = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_ROLE}/remove-one-role?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedUser = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_AUTH}/remove-one-user?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyRole = async (data: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_ROLE}/remove-many-role`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyUser = async (data: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_AUTH}/remove-many-user`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}




export default {
  Login, Register, ForgotPass, ChangePass, 
  FindUser, FindManyRole,
  FindManyFeature, FindManyFeatureGroup,
  deletedRole, deletedUser, deletedManyUser, deletedManyRole,
}