import actionTypes from "./constants"

//===================================|| Genre ||===============================//
const findGenre = () => ({ type: actionTypes.findGenre })
const findGenreFailure = (data:any) => ({type: actionTypes.findGenreFailure, payload: data});
const findGenreSuccess = (data:any) => ({type: actionTypes.findGenreSuccess, payload: data});

const deleteGenre = (id: any) => ({type: actionTypes.deleteGenre, payload: id});
const deleteGenreSuccess = (data: any) => ({type: actionTypes.deleteGenreSuccess, payload: data})
const deleteGenreFailure = (data: any) => ({type: actionTypes.deleteGenreFailure, payload: data})

const deletedGenre = (id: any) => ({type: actionTypes.deletedGenre, payload: id});
const deletedGenreSuccess = (data: any) => ({type: actionTypes.deletedGenreSuccess, payload: data})
const deletedGenreFailure = (data: any) => ({type: actionTypes.deletedGenreFailure, payload: data})

const deletedManyGenre = (data:any) => ({type: actionTypes.deletedManyGenre, payload: data})
const deletedManyGenreFailure = (data:any) => ({type: actionTypes.deletedManyGenreFailure, payload: data});
const deletedManyGenreSuccess = (data:any) => ({type: actionTypes.deletedManyGenreSuccess, payload: data});


//===================================|| Author ||===============================//
const findAuthor = () => ({type: actionTypes.findAuthor})
const findAuthorFailure = (data:any) => ({type: actionTypes.findAuthorFailure, payload: data});
const findAuthorSuccess = (data:any) => ({type: actionTypes.findAuthorSuccess, payload: data});

const deleteAuthor = (id: any) => ({type: actionTypes.deleteAuthor, payload: id});
const deleteAuthorSuccess = (data: any) => ({type: actionTypes.deleteAuthorSuccess, payload: data})
const deleteAuthorFailure = (data: any) => ({type: actionTypes.deleteAuthorFailure, payload: data})

const deletedAuthor = (id: any) => ({type: actionTypes.deletedAuthor, payload: id});
const deletedAuthorSuccess = (data: any) => ({type: actionTypes.deletedAuthorSuccess, payload: data})
const deletedAuthorFailure = (data: any) => ({type: actionTypes.deletedAuthorFailure, payload: data})

const deletedManyAuthor = (data:any) => ({type: actionTypes.deletedManyAuthor, payload: data})
const deletedManyAuthorFailure = (data:any) => ({type: actionTypes.deletedManyAuthorFailure, payload: data});
const deletedManyAuthorSuccess = (data:any) => ({type: actionTypes.deletedManyAuthorSuccess, payload: data});



//===================================|| Manga ||================================//
const findManga = (data:any) => ({type: actionTypes.findManga, payload: data})
const findMangaFailure = (data:any) => ({type: actionTypes.findMangaFailure, payload: data});
const findMangaSuccess = (data:any) => ({type: actionTypes.findMangaSuccess, payload: data});

const findMangaById = (id:any) => ({type: actionTypes.findMangaById, payload: id})
const findMangaByIdFailure = (data:any) => ({type: actionTypes.findMangaByIdFailure, payload: data});
const findMangaByIdSuccess = (data:any) => ({type: actionTypes.findMangaByIdSuccess, payload: data});

const findManyManga = (data:any) => ({type: actionTypes.findManyManga, payload: data})
const findManyMangaFailure = (data:any) => ({type: actionTypes.findManyMangaFailure, payload: data});
const findManyMangaSuccess = (data:any) => ({type: actionTypes.findManyMangaSuccess, payload: data});

const addManga = (data:any) => ({type: actionTypes.addManga, payload: data});
const addMangaSuccess = (data: any) => ({type: actionTypes.addMangaSuccess, payload: data})
const addMangaFailure = (data: any) => ({type: actionTypes.addMangaFailure, payload: data})

const deleteManga = (id: any) => ({type: actionTypes.deleteManga, payload: id});
const deleteMangaSuccess = (data: any) => ({type: actionTypes.deleteMangaSuccess, payload: data})
const deleteMangaFailure = (data: any) => ({type: actionTypes.deleteMangaFailure, payload: data})

const deletedManga = (id: any) => ({type: actionTypes.deletedManga, payload: id});
const deletedMangaSuccess = (data: any) => ({type: actionTypes.deletedMangaSuccess, payload: data})
const deletedMangaFailure = (data: any) => ({type: actionTypes.deletedMangaFailure, payload: data})

const deletedManyManga = (data:any) => ({type: actionTypes.deletedManyManga, payload: data})
const deletedManyMangaFailure = (data:any) => ({type: actionTypes.deletedManyMangaFailure, payload: data});
const deletedManyMangaSuccess = (data:any) => ({type: actionTypes.deletedManyMangaSuccess, payload: data});



//===================================|| Chapter ||================================//
const findChapter = () => ({type: actionTypes.findChapter})
const findChapterFailure = (data:any) => ({type: actionTypes.findChapterFailure, payload: data});
const findChapterSuccess = (data:any) => ({type: actionTypes.findChapterSuccess, payload: data});

const findChapterById = (id:any) => ({type: actionTypes.findChapterById, payload: id})
const findChapterByIdFailure = (data:any) => ({type: actionTypes.findChapterByIdFailure, payload: data});
const findChapterByIdSuccess = (data:any) => ({type: actionTypes.findChapterByIdSuccess, payload: data})

const findChapterByMangaId = (data:any) => ({type: actionTypes.findChapterByMangaId, payload: data})
const findChapterByMangaIdFailure = (data:any) => ({type: actionTypes.findChapterByMangaIdFailure, payload: data})
const findChapterByMangaIdSuccess = (data:any) => ({type: actionTypes.findChapterByMangaIdSuccess, payload: data})

const deletedChapter = (id: any) => ({type: actionTypes.deletedChapter, payload: id});
const deletedChapterSuccess = (data: any) => ({type: actionTypes.deletedChapterSuccess, payload: data})
const deletedChapterFailure = (data: any) => ({type: actionTypes.deletedChapterFailure, payload: data})

const deletedManyChapter = (data:any) => ({type: actionTypes.deletedManyChapter, payload: data})
const deletedManyChapterFailure = (data:any) => ({type: actionTypes.deletedManyChapterFailure, payload: data});
const deletedManyChapterSuccess = (data:any) => ({type: actionTypes.deletedManyChapterSuccess, payload: data});

//===================================|| Categories ||================================//
const findCategories = () => ({type: actionTypes.findCategories})
const findCategoriesFailure = (data:any) => ({type: actionTypes.findCategoriesFailure, payload: data});
const findCategoriesSuccess = (data:any) => ({type: actionTypes.findCategoriesSuccess, payload: data})

//===================================|| Status ||================================//
const findStatus = () => ({type: actionTypes.findStatus})
const findStatusFailure = (data:any) => ({type: actionTypes.findStatusFailure, payload: data});
const findStatusSuccess = (data:any) => ({type: actionTypes.findStatusSuccess, payload: data})

//===================================|| Review ||================================//
const findReview = () => ({type: actionTypes.findReview})
const findReviewFailure = (data:any) => ({type: actionTypes.findReviewFailure, payload: data});
const findReviewSuccess = (data:any) => ({type: actionTypes.findReviewSuccess, payload: data})

const deletedManyReview = (data:any) => ({type: actionTypes.deletedManyReview, payload: data})
const deletedManyReviewFailure = (data:any) => ({type: actionTypes.deletedManyReviewFailure, payload: data});
const deletedManyReviewSuccess = (data:any) => ({type: actionTypes.deletedManyReviewSuccess, payload: data});

//===================================|| Comment ||================================//
const findComment = () => ({type: actionTypes.findComment})
const findCommentFailure = (data:any) => ({type: actionTypes.findCommentFailure, payload: data});
const findCommentSuccess = (data:any) => ({type: actionTypes.findCommentSuccess, payload: data})

const deletedManyComment = (data:any) => ({type: actionTypes.deletedManyComment, payload: data})
const deletedManyCommentFailure = (data:any) => ({type: actionTypes.deletedManyCommentFailure, payload: data});
const deletedManyCommentSuccess = (data:any) => ({type: actionTypes.deletedManyCommentSuccess, payload: data});


export default {
  findGenre, findGenreFailure, findGenreSuccess,
  findAuthor, findAuthorFailure, findAuthorSuccess,
  findManga, findMangaFailure, findMangaSuccess,
  findMangaById, findMangaByIdFailure, findMangaByIdSuccess,
  findManyManga, findManyMangaFailure, findManyMangaSuccess,
  findChapterById, findChapterByIdFailure, findChapterByIdSuccess,
  findChapterByMangaId, findChapterByMangaIdFailure, findChapterByMangaIdSuccess,
  findCategories, findCategoriesFailure, findCategoriesSuccess,
  findStatus, findStatusFailure, findStatusSuccess,
  findChapter, findChapterFailure, findChapterSuccess,
  findReview, findReviewFailure, findReviewSuccess,
  findComment, findCommentSuccess, findCommentFailure,

  addManga, addMangaSuccess, addMangaFailure,

  deleteManga, deleteMangaSuccess, deleteMangaFailure,
  deletedManga, deletedMangaSuccess, deletedMangaFailure,
  deletedManyManga, deletedManyMangaSuccess, deletedManyMangaFailure,

  deleteAuthor, deleteAuthorSuccess, deleteAuthorFailure,
  deletedAuthor, deletedAuthorSuccess, deletedAuthorFailure,
  deletedManyAuthor, deletedManyAuthorSuccess, deletedManyAuthorFailure,

  deleteGenre, deleteGenreSuccess, deleteGenreFailure,
  deletedGenre, deletedGenreSuccess, deletedGenreFailure,
  deletedManyGenre, deletedManyGenreSuccess, deletedManyGenreFailure,

  deletedChapter, deletedChapterSuccess, deletedChapterFailure,
  deletedManyChapter, deletedManyChapterSuccess, deletedManyChapterFailure,

  deletedManyReview, deletedManyReviewSuccess, deletedManyReviewFailure,

  deletedManyComment, deletedManyCommentSuccess, deletedManyCommentFailure,
}