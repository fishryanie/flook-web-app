import { API_EBOOK, API_AUTHOR, API_GENRE, API_CHAPTER, API_CATEGORY, API_STATUS, API_REVIEW, API_COMMENT} from '../Configs/api'
import { requestAPI } from '../Functions/GlobalFunc';
import zaloConfig from '../Configs/zalo'
import HmacSHA256 from 'crypto-js'

//===================================|| Genre ||===============================//

const findGenre = async () => {
  const request = {
    method: 'GET',
    api: API_GENRE + '/find-many-genre',
  };
  const response = await requestAPI(request);
  return response;
};

const createGenre = async (data: any) => {
  
}

const updateGenre = async (data: any) => {
  
}

const removeGenre = async (data: any) => {
  
}

const deleteGenre = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_GENRE}/delete-one-genre?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedGenre = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_GENRE}/remove-one-genre?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyGenre = async (data: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_GENRE}/remove-many-genre`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}


//===================================|| Author ||===============================//

const findAuthor = async () => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: API_AUTHOR + '/find-many-author',
  };
  const response = await requestAPI(request);
  return response;
};

const createAuthor = async (data: any) => {

}

const updateAuthor = async (data: any) => {

}

const removeAuthor = async (data: any) => {

}

const deleteAuthor = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_AUTHOR}/delete-one?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedAuthor = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_AUTHOR}/remove-one-author?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyAuthor = async (data: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_AUTHOR}/remove-many-author`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}


//===================================|| Books ||================================//

const findManga = async (data: any) => {
  console.log('sevice')
  const request = {
    method: 'POST',
    api: API_EBOOK + `/filterManga?page=${data.page}&sort=${data.sort}`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

export const findMangaById = async (id: string)  => {
  const request = {
    method: 'GET',
    api: `${API_EBOOK}/getMangaById/${id}`,
  }
  const response = await requestAPI(request)
  return response
}

export const findManyManga = async (data: any)  => {
  const request = {
    method: 'GET',
    api: `${API_EBOOK}/find-ebook`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}


const createManga = async (data: any) => {
  const request = {
    method: 'POST',
    api: `${API_EBOOK}/addManga`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

const updateManga = async (data: any) => {
  
}

const removeManga = async (data: any) => {
  
}

const deleteManga = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_EBOOK}/delete-one-ebook?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManga = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_EBOOK}/remove-one-ebook?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyManga = async (data: any) => {
  console.log('service', data)
  const request = {
    method: 'DELETE',
    api: `${API_EBOOK}/remove-many-ebook`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}


//==================================|| Chapters ||===============================//

const findChapter = async () => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: API_CHAPTER + `/find-many-chapter`,
  }
  const response = await requestAPI(request)
  return response
}

export const findChapterById = async (id: string)  => {
  const request = {
    method: 'GET',
    api: `${API_CHAPTER}/getChapterById/${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const findChapterByMangaId = async (data: any) => {
  console.log('sevice')
  const request = {
    method: 'POST',
    api: `${API_CHAPTER}/getChapterByMangaId/${data.id}?page=${data.page}&sort=${data.sort}`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

const deletedChapter = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_CHAPTER}/remove-one-chapter?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyChapter = async (data: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_CHAPTER}/remove-many-chapter`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}


const findAllBank = () => {
  const reqtime = Date.now();
  const params = {
    appid: zaloConfig.appid,
    reqtime: reqtime, // miliseconds
    mac: CryptoJS.HmacSHA256(zaloConfig.appid + "|" + reqtime, zaloConfig.key1).toString() // appid|reqtime
  };
}

//==================================|| Comment ||===============================//

const findComment = async () => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: API_COMMENT + `/find-many-comment`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedComment = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_COMMENT}/remove-one-comment?id=${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyComment = async (data: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_COMMENT}/remove-many-comment`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

//==================================|| Review ||===============================//

const findReview = async () => {
  console.log('sevice')
  const request = {
    method: 'GET',
    api: API_REVIEW + `/find-many-review`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedReview = async (id: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_REVIEW}/remove-one-review?id${id}`,
  }
  const response = await requestAPI(request)
  return response
}

const deletedManyReview = async (data: any) => {
  const request = {
    method: 'DELETE',
    api: `${API_REVIEW}/remove-many-review`,
    body: data
  }
  const response = await requestAPI(request)
  return response
}

//==================================|| Categories ||===============================//
export const findCategories = async ()  => {
  const request = {
    method: 'GET',
    api: `${API_CATEGORY}/findMany`,
  }
  const response = await requestAPI(request)
  return response
}

//==================================|| Status ||===============================//
export const findStatus = async ()  => {
  const request = {
    method: 'GET',
    api: `${API_STATUS}/findStatus`,
  }
  const response = await requestAPI(request)
  return response
}


export default {
  findManga, findMangaById, findManyManga,createManga, updateManga, removeManga, deleteManga, deletedManga, deletedManyManga,
  findGenre, createGenre, updateGenre, removeGenre, deleteGenre, deletedGenre, deletedManyGenre,
  findAuthor, createAuthor, updateAuthor, removeAuthor, deleteAuthor, deletedAuthor,deletedManyAuthor,
  findChapter, findChapterById, findChapterByMangaId, deletedChapter, deletedManyChapter,
  findComment, deletedComment, deletedManyComment,
  findReview, deletedReview, deletedManyReview,
  findCategories, findStatus,
}