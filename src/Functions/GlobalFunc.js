import axios from 'axios'
import Action from '../Store/Actions';

export const SubmitForm = (dispatch, scriptedRef, type) => {
  return async (values, { setErrors , setStatus, setSubmitting }) => { 
    try {
      if(scriptedRef.current) {
        switch (type) {
          case 'LOGIN': dispatch(Action.auth.Login(values)); break;
          case 'REGISTER': dispatch(Action.auth.Register(values)); break;
          case 'FORGOTPASS': dispatch(Action.auth.ForgotPass(values)); break;
          case 'CHANGEPASS': dispatch(Action.auth.ChangePass(values)); break;
          default: break;
        }
        setSubmitting(false);
        setStatus({ success: true });
      }
    } catch (err) {
      // console.error(err);
      if(scriptedRef.current) {
        setSubmitting(false);
        setStatus({ success: false });
        setErrors({ submit: err.message });
      }
    }
  }
};

export const requestAPI = async (request, header = {}) => {
  let method = request.method || 'GET';
  let baseURL = request.api;
  let headers = Object.assign(
    {Accept: 'application/json', 'Content-Type': 'application/json'},
    header,
  );
  if (request.token) {
    headers = Object.assign(headers, {
      Authorization: request.token,
    });
  }
  const configs = {
    method: method,
    url: baseURL,
    headers: headers,
    timeout: 60000,
    withCredentials: true,
    validateStatus: status => status >= 200 && status < 600,
  };
  if (
    (method == 'POST' || method == 'DELETE' || method == 'PUT') &&
    request.body
  ) {
    configs['data'] = request.body;
  }
  
  try {
    let response = await axios(configs);
    const data = response.data;
    const message = response.data.message
    const codeNumber = response.status ? response.status : 0;
    if(request.type === 'LOGIN_APP' && response.status === 200){
      
    }
    if (codeNumber === 401) {
      throw 'UNAUTHORIZED_OR_TOKEN_EXPIRED';
    }
    if (Array.isArray(data)) {
      return { data, message, statusCode: codeNumber,};
    }
    return {
      ...data, 
      message,
      statusCode: codeNumber,
    };
  }catch (error){
    // console.log(error)
  }
};