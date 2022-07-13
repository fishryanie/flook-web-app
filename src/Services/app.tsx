import {domain} from '../Configs/api';
import apiString from '../Configs/api'
import { requestAPI } from '../Functions/GlobalFunc';

//===================================|| Genre ||===============================//

const findManyGenre = async (token: any) => {
  const request = {
    method: 'GET',
    api: domain + apiString.findManyGenre,
    token: token
  };
  const response = await requestAPI(request);
  return response;
};

const insertOneGenre = async (data: any) => {
  
}

const updateGenre = async (data: any) => {
  
}

const deleteGenre = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.deleteOneGenre + `?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const removeOneGenre = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeOneGenre + `?id=${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const removeManyGenre = async (data: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyGenre,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}


//===================================|| Author ||===============================//

const findManyAuthor = async (token: any) => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: domain + apiString.findManyAuthor,
    token: token
  };
  const response = await requestAPI(request);
  return response;
};

const insertOneAuthor = async (data: any) => {

}

const updateAuthor = async (data: any) => {

}

const deleteAuthor = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${domain}/delete-one?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const removeOneAuthor = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: `${domain + apiString.removeOneAuthor}?id=${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const removeManyAuthor = async (data: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyAuthor,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}


//===================================|| Books ||================================//

const searchEbook = async (data: any) => {
  console.log('sevice')
  const request = {
    method: 'POST',
    api: domain + apiString.searchEbook + `?page=${data.page}&sort=${data.sort}`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

export const findOneEbook = async (id: string)  => {
  const request = {
    method: 'GET',
    api: domain + apiString.findOneEbook + `?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

export const findManyEbook = async (token: any)  => {
  const request = {
    method: 'GET',
    api: domain + apiString.findManyEbook + `?deleted=false`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}


const insertOneEbook = async (data: any, token: any) => {
  const request = {
    method: 'POST',
    api: domain + apiString.insertOneEbook,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const updateEbook = async (data: any) => {
  
}

const deleteEbook = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.deleteOneEbook + `?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const removeOneEbook = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeOneEbook + `?id=${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const removeManyEbook = async (data: any, token: any) => {
  console.log('service', data)
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyEbook,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}


//==================================|| Chapters ||===============================//

const findManyChapter = async (token: any) => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: domain + apiString.findManyChapter,
    token: token
  }
  const response = await requestAPI(request)
  return response
}

export const findOneChapter = async (id: string)  => {
  const request = {
    method: 'GET',
    api: domain + apiString.findOneChapter + `?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const findOneChapterByEbook = async (data: any) => {
  console.log('sevice')
  const request = {
    method: 'POST',
    api: domain + apiString.findOneChapter + `?id=${data.id}&page=${data.page}&sort=${data.sort}`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

const removeOneChapter = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeOneChapter + `?id=${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const removeManyChapter = async (data: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyChapter,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

//==================================|| Comment ||===============================//

const findManyComment = async (token: any) => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: domain + apiString.findManyComment,
    token: token
  }
  const response = await requestAPI(request)
  return response
}

const removeOneComment = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeOneComment + `?id=${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const removeManyComment = async (data: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyComment,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

//==================================|| Review ||===============================//

const findManyReview = async (token: any) => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: domain + apiString.findManyReview,
    token: token
  }
  const response = await requestAPI(request)
  return response
}

const removeOneReview = async (id: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeOneReview + `?id${id}`,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

const removeManyReview = async (data: any, token: any) => {
  const request = {
    method: 'DELETE',
    api: domain + apiString.removeManyReview,
    body: data,
    token: token,
  }
  const response = await requestAPI(request)
  return response
}

export default {
  searchEbook, findOneEbook, findManyEbook, insertOneEbook, updateEbook, deleteEbook, removeOneEbook, removeManyEbook,

  findManyGenre, insertOneGenre, updateGenre, deleteGenre, removeOneGenre, removeManyGenre,

  findManyAuthor, insertOneAuthor, updateAuthor, deleteAuthor, removeOneAuthor, removeManyAuthor,

  findManyChapter, findOneChapter, findOneChapterByEbook, removeOneChapter, removeManyChapter,

  findManyComment, removeOneComment, removeManyComment,

  findManyReview, removeOneReview, removeManyReview,

}