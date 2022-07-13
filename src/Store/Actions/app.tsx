import actionTypes from "./constants"

//===================================|| Genre ||===============================//
const findManyGenre = () => ({ type: actionTypes.findManyGenre })
const findManyGenreFailure = (data:any) => ({type: actionTypes.findManyGenreFailure, payload: data});
const findManyGenreSuccess = (data:any) => ({type: actionTypes.findManyGenreSuccess, payload: data});

const deleteOneGenre = (id: any) => ({type: actionTypes.deleteOneGenre, payload: id});
const deleteOneGenreSuccess = (data: any) => ({type: actionTypes.deleteOneGenreSuccess, payload: data})
const deleteOneGenreFailure = (data: any) => ({type: actionTypes.deleteOneGenreFailure, payload: data})

const removeOneGenre = (id: any) => ({type: actionTypes.removeOneGenre, payload: id});
const removeOneGenreSuccess = (data: any) => ({type: actionTypes.removeOneGenreSuccess, payload: data})
const removeOneGenreFailure = (data: any) => ({type: actionTypes.removeOneGenreFailure, payload: data})

const removeManyGenre = (data:any) => ({type: actionTypes.removeManyGenre, payload: data})
const removeManyGenreFailure = (data:any) => ({type: actionTypes.removeManyGenreFailure, payload: data});
const removeManyGenreSuccess = (data:any) => ({type: actionTypes.removeManyGenreSuccess, payload: data});

//===================================|| Author ||===============================//
const findManyAuthor = () => ({type: actionTypes.findManyAuthor})
const findManyAuthorFailure = (data:any) => ({type: actionTypes.findManyAuthorFailure, payload: data});
const findManyAuthorSuccess = (data:any) => ({type: actionTypes.findManyAuthorSuccess, payload: data});

const deleteOneAuthor = (id: any) => ({type: actionTypes.deleteOneAuthor, payload: id});
const deleteOneAuthorSuccess = (data: any) => ({type: actionTypes.deleteOneAuthorSuccess, payload: data})
const deleteOneAuthorFailure = (data: any) => ({type: actionTypes.deleteOneAuthorFailure, payload: data})

const removeOneAuthor = (id: any) => ({type: actionTypes.removeOneAuthor, payload: id});
const removeOneAuthorSuccess = (data: any) => ({type: actionTypes.removeOneAuthorSuccess, payload: data})
const removeOneAuthorFailure = (data: any) => ({type: actionTypes.removeOneAuthorFailure, payload: data})

const removeManyAuthor = (data:any) => ({type: actionTypes.removeManyAuthor, payload: data})
const removeManyAuthorFailure = (data:any) => ({type: actionTypes.removeManyAuthorFailure, payload: data});
const removeManyAuthorSuccess = (data:any) => ({type: actionTypes.removeManyAuthorSuccess, payload: data});

//===================================|| Manga ||================================//
const searchEbook = (data:any) => ({type: actionTypes.searchEbook, payload: data})
const searchEbookFailure = (data:any) => ({type: actionTypes.searchEbookFailure, payload: data});
const searchEbookSuccess = (data:any) => ({type: actionTypes.searchEbookSuccess, payload: data});

const findOneEbook = (id:any) => ({type: actionTypes.findOneEbook, payload: id})
const findOneEbookFailure = (data:any) => ({type: actionTypes.findOneEbookFailure, payload: data});
const findOneEbookSuccess = (data:any) => ({type: actionTypes.findOneEbookSuccess, payload: data});

const findManyEbook = () => ({type: actionTypes.findManyEbook})
const findManyEbookFailure = (data:any) => ({type: actionTypes.findManyEbookFailure, payload: data});
const findManyEbookSuccess = (data:any) => ({type: actionTypes.findManyEbookSuccess, payload: data});

const insertOneEbook = (data:any) => ({type: actionTypes.insertOneEbook, payload: data});
const insertOneEbookSuccess = (data: any) => ({type: actionTypes.insertOneEbookSuccess, payload: data})
const insertOneEbookFailure = (data: any) => ({type: actionTypes.insertOneEbookFailure, payload: data})

const deleteOneEbook = (id: any) => ({type: actionTypes.deleteOneEbook, payload: id});
const deleteOneEbookSuccess = (data: any) => ({type: actionTypes.deleteOneEbookSuccess, payload: data})
const deleteOneEbookFailure = (data: any) => ({type: actionTypes.deleteOneEbookFailure, payload: data})

const removeOneEbook = (id: any) => ({type: actionTypes.removeOneEbook, payload: id});
const removeOneEbookSuccess = (data: any) => ({type: actionTypes.removeOneEbookSuccess, payload: data})
const removeOneEbookFailure = (data: any) => ({type: actionTypes.removeOneEbookFailure, payload: data})

const removeManyEbook = (data:any) => ({type: actionTypes.removeManyEbook, payload: data})
const removeManyEbookFailure = (data:any) => ({type: actionTypes.removeManyEbookFailure, payload: data});
const removeManyEbookSuccess = (data:any) => ({type: actionTypes.removeManyEbookSuccess, payload: data});

//===================================|| Chapter ||================================//
const findManyChapter = () => ({type: actionTypes.findManyChapter})
const findManyChapterFailure = (data:any) => ({type: actionTypes.findManyChapterFailure, payload: data});
const findManyChapterSuccess = (data:any) => ({type: actionTypes.findManyChapterSuccess, payload: data});

const findOneChapter = (id:any) => ({type: actionTypes.findOneChapter, payload: id})
const findOneChapterFailure = (data:any) => ({type: actionTypes.findOneChapterFailure, payload: data});
const findOneChapterSuccess = (data:any) => ({type: actionTypes.findOneChapterSuccess, payload: data})

const findOneChapterByEbook = (data:any) => ({type: actionTypes.findOneChapterByEbook, payload: data})
const findOneChapterByEbookFailure = (data:any) => ({type: actionTypes.findOneChapterByEbookFailure, payload: data})
const findOneChapterByEbookSuccess = (data:any) => ({type: actionTypes.findOneChapterByEbookSuccess, payload: data})

const removeOneChapter = (id: any) => ({type: actionTypes.removeOneChapter, payload: id});
const removeOneChapterSuccess = (data: any) => ({type: actionTypes.removeOneChapterSuccess, payload: data})
const removeOneChapterFailure = (data: any) => ({type: actionTypes.removeOneChapterFailure, payload: data})

const removeManyChapter = (data:any) => ({type: actionTypes.removeManyChapter, payload: data})
const removeManyChapterFailure = (data:any) => ({type: actionTypes.removeManyChapterFailure, payload: data});
const removeManyChapterSuccess = (data:any) => ({type: actionTypes.removeManyChapterSuccess, payload: data});

//===================================|| Review ||================================//
const findManyReview = () => ({type: actionTypes.findManyReview})
const findManyReviewFailure = (data:any) => ({type: actionTypes.findManyReviewFailure, payload: data});
const findManyReviewSuccess = (data:any) => ({type: actionTypes.findManyReviewSuccess, payload: data})

const removeManyReview = (data:any) => ({type: actionTypes.removeManyReview, payload: data})
const removeManyReviewFailure = (data:any) => ({type: actionTypes.removeManyReviewFailure, payload: data});
const removeManyReviewSuccess = (data:any) => ({type: actionTypes.removeManyReviewSuccess, payload: data});

//===================================|| Comment ||================================//
const findManyComment = () => ({type: actionTypes.findManyComment})
const findManyCommentFailure = (data:any) => ({type: actionTypes.findManyCommentFailure, payload: data});
const findManyCommentSuccess = (data:any) => ({type: actionTypes.findManyCommentSuccess, payload: data})

const removeManyComment = (data:any) => ({type: actionTypes.removeManyComment, payload: data})
const removeManyCommentFailure = (data:any) => ({type: actionTypes.removeManyCommentFailure, payload: data});
const removeManyCommentSuccess = (data:any) => ({type: actionTypes.removeManyCommentSuccess, payload: data});


export default {

  findManyGenre, findManyGenreFailure, findManyGenreSuccess,
  deleteOneGenre, deleteOneGenreSuccess, deleteOneGenreFailure,
  removeOneGenre, removeOneGenreSuccess, removeOneGenreFailure,
  removeManyGenre, removeManyGenreSuccess, removeManyGenreFailure,

  findManyAuthor, findManyAuthorFailure, findManyAuthorSuccess,
  deleteOneAuthor, deleteOneAuthorSuccess, deleteOneAuthorFailure,
  removeOneAuthor, removeOneAuthorSuccess, removeOneAuthorFailure,
  removeManyAuthor, removeManyAuthorSuccess, removeManyAuthorFailure,

  searchEbook, searchEbookFailure, searchEbookSuccess,
  findOneEbook, findOneEbookFailure, findOneEbookSuccess,
  findManyEbook, findManyEbookFailure, findManyEbookSuccess,
  insertOneEbook, insertOneEbookSuccess, insertOneEbookFailure,
  deleteOneEbook, deleteOneEbookSuccess, deleteOneEbookFailure,
  removeOneEbook, removeOneEbookSuccess, removeOneEbookFailure,
  removeManyEbook, removeManyEbookSuccess, removeManyEbookFailure,

  findManyChapter, findManyChapterFailure, findManyChapterSuccess,
  findOneChapter, findOneChapterFailure, findOneChapterSuccess,
  findOneChapterByEbook, findOneChapterByEbookFailure, findOneChapterByEbookSuccess,
  removeOneChapter, removeOneChapterSuccess, removeOneChapterFailure,
  removeManyChapter, removeManyChapterSuccess, removeManyChapterFailure,

  

  findManyReview, findManyReviewFailure, findManyReviewSuccess,
  removeManyReview, removeManyReviewSuccess, removeManyReviewFailure,

  findManyComment, findManyCommentSuccess, findManyCommentFailure,
  removeManyComment, removeManyCommentSuccess, removeManyCommentFailure,
    
}