const actionTypes = {
  // APP
  openDialog: 'OPEN_DIALOG',
  closeDialog: 'CLOSE_DIALOG',
  onOffCart: "ON_OFF_CART",
  onOffSearch: "ON_OFF_MODEL",
  onOffDrawer: "ON_OFF_DRAWER",
  onOffNotify: "ON_OFF_NOTIFY",
  openLoading: "OPEN_LOADING",
  closeLoading: "CLOSE_LOADING",
  openAccetp: "OPEN_ACCETP",
  closeAccetp: "CLOSE_ACCETP",
  submitSearch: "SUBMIT_SEARCH",

  SET_MENU: '@customization/SET_MENU',
  MENU_TOGGLE: '@customization/MENU_TOGGLE',
  MENU_OPEN: '@customization/MENU_OPEN',
  SET_FONT_FAMILY: '@customization/SET_FONT_FAMILY',
  SET_BORDER_RADIUS: '@customization/SET_BORDER_RADIUS',


  // DATA LOCAL

  clearToken: "CLEAR_TOKEN",
  storeToken: "STORE_TOKEN",

  // AUTH
  login: "LOGIN",
  loginFailure: "LOGIN_FAILURE",
  loginSuccess: "LOGIN_SUCCESS",

  register: "REGISTER",
  registerFailure: "REGISTER_FAILURE",
  registerSuccess: "REGISTER_SUCCESS",

  forgotPass: "FORGOT_PASS",
  forgotPassFailure: "FORGOT_PASS_FAILURE",
  forgotPassSuccess: "FORGOT_PASS_SUCCESS",

  changePass: "CHANGE_PASS",
  changePassFailure: "CHANGE_PASS_FAILURE",
  changePassSuccess: "CHANGE_PASS_SUCCESS",

  getProfile: "GET_PROFILE",
  getProfileFailure: "GET_PROFILE_FAILURE",
  getProfileSuccess: "GET_PROFILE_SUCCESS",



  putLikeMovie: "PUT_LIKE_MOVIE",
  putLikeMovieFail: "PUT_LIKE_MOVIE_FAIL",
  putLikeMovieSuccess: "PUT_LIKE_MOVIE_SUCCESS",

  findRole: 'FIND_ROLE',
  findRoleFailure: 'FIND_ROLE_FAILURE',
  findRoleSuccess: 'FIND_ROLE_SUCCESS',

  findUser: "FIND_USER",
  findUserFailure: "FIND_USER_FAILURE",
  findUserSuccess: "FIND_USER_SUCCESS",

  findFeature: "FIND_FEATURE",
  findFeatureFailure: "FIND_FEATURE_FAILURE",
  findFeatureSuccess: "FIND_FEATURE_SUCCESS",

  findFeatureGroup: "FIND_FEATURE_GROUP",
  findFeatureGroupFailure: "FIND_FEATURE_GROUP_FAILURE",
  findFeatureGroupSuccess: "FIND_FEATURE_GROUP_SUCCESS",

  deletedRole: 'DELETED_ROLE',
  deletedRoleFailure: 'DELETED_ROLE_FAILURE',
  deletedRoleSuccess: 'DELETED_ROLE_SUCCESS',

  deleteRole: 'DELETE_ROLE',
  deleteRoleFailure: 'DELETE_ROLE_FAILURE',
  deleteRoleSuccess: 'DELETE_ROLE_SUCCESS',

  deleteUser: 'DELETE_USER',
  deleteUserFailure: 'DELETE_USER_FAILURE',
  deleteUserSuccess: 'DELETE_USER_SUCCESS',

  deletedUser: 'DELETED_USER',
  deletedUserFailure: 'DELETED_USER_FAILURE',
  deletedUserSuccess: 'DELETED_USER_SUCCESS',

  deletedManyRole: 'DELETED_MANY_ROLE',
  deletedManyRoleFailure: 'DELETED_MANY_ROLE_FAILURE',
  deletedManyRoleSuccess: 'DELETED_MANY_ROLE_SUCCESS',

  deletedManyUser: 'DELETED_MANY_USER',
  deletedManyUserFailure: 'DELETED_MANY_USER_FAILURE',
  deletedManyUserSuccess: 'DELETED_MANY_USER_SUCCESS',


  // MOVIE
  getListMovie: "GET_LIST_MOVIE_",
  getListMovieFail: "GET_LIST_MOVIE_FAIL",
  getListMovieSuccess: "GET_LIST_MOVIE_SUCCESS",

  getAllListMovie: "GET_ALL_LIST_MOVIE_",
  getAllListMovieFail: "GET_ALL_LIST_MOVIE_FAIL",
  getAllListMovieSuccess: "GET_ALL_LIST_MOVIE_SUCCESS",

  getListMovieCommingSoon: "GET_LIST_MOVIE_COMMING_SOON",
  getListMovieCommingSoonFail: "GET_LIST_MOVIE_COMMING_SOON_FAIL",
  getListMovieCommingSoonSuccess: "GET_LIST_MOVIE_COMMING_SOON_SUCCESS",

  getListMovieIsPlaying: "GET_LIST_MOVIE_ISPALYING",
  getListMovieIsPlayingFail: "GET_LIST_MOVIE_ISPALYING_FAIL",
  getListMovieIsPlayingSuccess: "GET_LIST_MOVIE_ISPALYING_SUCCESS",

  getListMovieNew: "GET_LIST_MOVIE_NEW_",
  getListMovieNewFail: "GET_LIST_MOVIE_NEW_FAIL",
  getListMovieNewSuccess: "GET_LIST_MOVIE_NEW_SUCCESS",

  getMovieById: "Get_Movie_By_Id_Contain",
  getMovieByIdFail: "GET_MOVIE_BY_ID_FAIL",
  getMovieByIdSuccess: "Get_MOVIE_By_ID_SUCCESS",

  getListFavorite: "GET_LIST_FAVORITE_BY_ID",
  getListFavoriteFail: "GET_LIST_FAVORITE_BY_ID_FAIL",
  getListFavoriteSuccess: "GET_LIST_FAVORITE_BY_ID_SUCCESS",


  // MANGA
  findManga: 'FIND_MANGA',
  findMangaFailure: 'FIND_MANGA_FAILURE',
  findMangaSuccess: 'FIND_MANGA_SUCCESS',

  findMangaById: "FIND_MANGA_BY_ID",
  findMangaByIdFailure: "FIND_MANGA_BY_ID_FAILURE",
  findMangaByIdSuccess: "FIND_MANGA_BY_ID_SUCCESS",

  findManyManga: 'FIND_MANY_MANGA',
  findManyMangaFailure: 'FIND_MANY_MANGA_FAILURE',
  findManyMangaSuccess: 'FIND_MANY_MANGA_SUCCESS',

  addManga: 'ADD_MANGA',
  addMangaFailure: 'ADD_MANGA_FAILURE',
  addMangaSuccess: 'ADD_MANGA_SUCCESS',

  deleteManga: 'DELETE_MANGA',
  deleteMangaFailure: 'DELETE_MANGA_FAILURE',
  deleteMangaSuccess: 'DELETE_MANGA_SUCCESS',

  deletedManga: 'DELETED_MANGA',
  deletedMangaFailure: 'DELETED_MANGA_FAILURE',
  deletedMangaSuccess: 'DELETED_MANGA_SUCCESS',

  deletedManyManga: 'DELETED_MANY_MANGA',
  deletedManyMangaFailure: 'DELETED_MANY_MANGA_FAILURE',
  deletedManyMangaSuccess: 'DELETED_MANY_MANGA_SUCCESS',


  // CATEGORIES
  findCategories: 'FIND_CATEGORIES',
  findCategoriesFailure: 'FIND_CATEGORIES_FAILURE',
  findCategoriesSuccess: 'FIND_CATEGORIES_SUCCESS',

  // STATUS
  findStatus: 'FIND_STATUS',
  findStatusFailure: 'FIND_STATUS_FAILURE',
  findStatusSuccess: 'FIND_STATUS_SUCCESS',



  // AUTHOR
  findAuthor: "GET_AUTHOR",
  findAuthorFailure: "GET_AUTHOR_FAILURE",
  findAuthorSuccess: "GET_AUTHOR_SUCCESS",

  findGenre: 'FIND_GENRE',
  findGenreFailure: 'FIND_GENRE_FAILURE',
  findGenreSuccess: 'FIND_GENRE_SUCCESS',

  deleteAuthor: 'DELETE_AUTHOR',
  deleteAuthorFailure: 'DELETE_AUTHOR_FAILURE',
  deleteAuthorSuccess: 'DELETE_AUTHOR_SUCCESS',

  deletedAuthor: 'DELETED_AUTHOR',
  deletedAuthorFailure: 'DELETED_AUTHOR_FAILURE',
  deletedAuthorSuccess: 'DELETED_AUTHOR_SUCCESS',

  deletedManyAuthor: 'DELETED_MANY_AUTHOR',
  deletedManyAuthorFailure: 'DELETED_MANY_AUTHOR_FAILURE',
  deletedManyAuthorSuccess: 'DELETED_MANY_AUTHOR_SUCCESS',

  deleteGenre: 'DELETE_GENRE',
  deleteGenreFailure: 'DELETE_GENRE_FAILURE',
  deleteGenreSuccess: 'DELETE_GENRE_SUCCESS',

  deletedGenre: 'DELETED_GENRE',
  deletedGenreFailure: 'DELETED_GENRE_FAILURE',
  deletedGenreSuccess: 'DELETED_GENRE_SUCCESS',

  deletedManyGenre: 'DELETED_MANY_GENRE',
  deletedManyGenreFailure: 'DELETED_MANY_GENRE_FAILURE',
  deletedManyGenreSuccess: 'DELETED_MANY_GENRE_SUCCESS',


  // CHAPTERS
  findChapter: "GET_CHAPTER",
  findChapterFailure: "GET_CHAPTER_FAILURE",
  findChapterSuccess: "GET_CHAPTER_SUCCESS",

  findChapterByMangaId: "FIND_CHAPTERS_BY_MANGA_ID",
  findChapterByMangaIdFailure: "FIND_CHAPTER_BY_MANGA_ID_FAILURE",
  findChapterByMangaIdSuccess: "FIND_CHAPTER_BY_MANGA_ID_SUCCESS",

  findChapterById: "FIND_CHAPTER_BY_ID",
  findChapterByIdFailure: "FIND_CHAPTER_BY_ID_FAILURE",
  findChapterByIdSuccess: "FIND_CHAPTER_BY_ID_SUCCESS",

  deleteChapter: 'DELETE_CHAPTER',
  deleteChapterFailure: 'DELETE_CHAPTER_FAILURE',
  deleteChapterSuccess: 'DELETE_CHAPTER_SUCCESS',

  deletedChapter: 'DELETED_CHAPTER',
  deletedChapterFailure: 'DELETED_CHAPTER_FAILURE',
  deletedChapterSuccess: 'DELETED_CHAPTER_SUCCESS',

  deletedManyChapter: 'DELETED_MANY_CHAPTER',
  deletedManyChapterFailure: 'DELETED_MANY_CHAPTER_FAILURE',
  deletedManyChapterSuccess: 'DELETED_MANY_CHAPTER_SUCCESS',

  // REVIEW
  findReview: 'FIND_REVIEW',
  findReviewFailure: 'FIND_REVIEW_FAILURE',
  findReviewSuccess: 'FIND_REVIEW_SUCCESS',

  deletedReview: 'DELETED_REVIEW',
  deletedReviewFailure: 'DELETED_REVIEW_FAILURE',
  deletedReviewSuccess: 'DELETED_REVIEW_SUCCESS',

  deletedManyReview: 'DELETED_MANY_REVIEW',
  deletedManyReviewFailure: 'DELETED_MANY_REVIEW_FAILURE',
  deletedManyReviewSuccess: 'DELETED_MANY_REVIEW_SUCCESS',

  // COMMENT
  findComment: 'FIND_COMMENT',
  findCommentFailure: 'FIND_COMMENT_FAILURE',
  findCommentSuccess: 'FIND_COMMENT_SUCCESS',

  deletedComment: 'DELETED_COMMENT',
  deletedCommentFailure: 'DELETED_COMMENT_FAILURE',
  deletedCommentSuccess: 'DELETED_COMMENT_SUCCESS',

  deletedManyComment: 'DELETED_MANY_COMMENT',
  deletedManyCommentFailure: 'DELETED_MANY_COMMENT_FAILURE',
  deletedManyCommentSuccess: 'DELETED_MANY_COMMENT_SUCCESS',

  getAllCommentFail: "GET_ALL_COMMENT_FAIL",
  getAllCommentSuccess: "GET_ALL_COMMENT_SUCCESS",
  addCommentFail: "ADD_COMMENT_FAIL",
  addCommentSuccses: "ADD_COMMENT_SUCCSESS",
  likeCommentFail: "LIKE_COMMENT_FAIL",
  likeCommentSuccsess: "LIKE_COMMENT_SUCCESS",
  dislikeCommentFail: "DISLIKE_COMMENT_FAIL",
  dislikeCommentSuccsess: "DISLIKE_COMMENT_SUCCESS",
};

export default actionTypes