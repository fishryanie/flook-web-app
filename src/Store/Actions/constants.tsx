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

  findManyRole: 'FIND_MANY_ROLE',
  findManyRoleFailure: 'FIND_MANY_ROLE_FAILURE',
  findManyRoleSuccess: 'FIND_MANY_ROLE_SUCCESS',

  findManyUser: "FIND-MANY_USER",
  findManyUserFailure: "FIND_MANY_USER_FAILURE",
  findManyUserSuccess: "FIND_MANY_USER_SUCCESS",

  findManyFeature: "FIND_MANY_FEATURE",
  findManyFeatureFailure: "FIND_MANY_FEATURE_FAILURE",
  findManyFeatureSuccess: "FIND_MANY_FEATURE_SUCCESS",

  findManyFeatureGroup: "FIND_MANY_FEATURE_GROUP",
  findManyFeatureGroupFailure: "FIND_MANY_FEATURE_GROUP_FAILURE",
  findManyFeatureGroupSuccess: "FIND_MANY_FEATURE_GROUP_SUCCESS",

  deleteOneRole: 'DELETE_ONE_ROLE',
  deleteOneRoleFailure: 'DELETE_ONE_ROLE_FAILURE',
  deleteOneRoleSuccess: 'DELETE_ONE_ROLE_SUCCESS',

  removeOneRole: 'REMOVE_ONE_ROLE',
  removeOneRoleFailure: 'REMOVE_ONE_ROLE_FAILURE',
  removeOneRoleSuccess: 'REMOVE_ONE_ROLE_SUCCESS',

  removeManyRole: 'REMOVE_MANY_ROLE',
  removeManyRoleFailure: 'REMOVE_MANY_ROLE_FAILURE',
  removeManyRoleSuccess: 'REMOVE_MANY_ROLE_SUCCESS',

  deleteOneUser: 'DELETE_ONE_USER',
  deleteOneUserFailure: 'DELETE_ONE_USER_FAILURE',
  deleteOneUserSuccess: 'DELETE_ONE_USER_SUCCESS',

  removeOneUser: 'REMOVE_ONE_USER',
  removeOneUserFailure: 'REMOVE_ONE_USER_FAILURE',
  removeOneUserSuccess: 'REMOVE_ONE_USER_SUCCESS',

  removeManyUser: 'REMOVE_MANY_USER',
  removeManyUserFailure: 'REMOVE_MANY_USER_FAILURE',
  removeManyUserSuccess: 'REMOVE_MANY_USER_SUCCESS',


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


  // EBOOK
  searchEbook: 'SEARCH_EBOOK',
  searchEbookFailure: 'SEARCH_EBOOK_FAILURE',
  searchEbookSuccess: 'SEARCH_EBOOK_SUCCESS',

  findOneEbook: "FIND_ONE_EBOOK",
  findOneEbookFailure: "FIND_ONE_EBOOK_FAILURE",
  findOneEbookSuccess: "FIND_ONE_EBOOK_SUCCESS",

  findManyEbook: 'FIND_MANY_EBOOK',
  findManyEbookFailure: 'FIND_MANY_EBOOK_FAILURE',
  findManyEbookSuccess: 'FIND_MANY_EBOOK_SUCCESS',

  insertOneEbook: 'INSERT_ONE_EBOOK',
  insertOneEbookFailure: 'INSERT_ONE_EBOOK_FAILURE',
  insertOneEbookSuccess: 'INSERT_ONE_EBOOK_SUCCESS',

  deleteOneEbook: 'DELETE_ONE_EBOOK',
  deleteOneEbookFailure: 'DELETE_ONE_EBOOK_FAILURE',
  deleteOneEbookSuccess: 'DELETE_ONE_EBOOK_SUCCESS',

  removeOneEbook: 'REMOVE_ONE_EBOOK',
  removeOneEbookFailure: 'REMOVE_ONE_EBOOK_FAILURE',
  removeOneEbookSuccess: 'REMOVE_ONE_EBOOK_SUCCESS',

  removeManyEbook: 'REMOVE_MANY_EBOOK',
  removeManyEbookFailure: 'REMOVE_MANY_EBOOK_FAILURE',
  removeManyEbookSuccess: 'REMOVE_MANY_EBOOK_SUCCESS',

  // AUTHOR
  findManyAuthor: "FIND_MANY_AUTHOR",
  findManyAuthorFailure: "FIND_MANY_AUTHOR_FAILURE",
  findManyAuthorSuccess: "FIND_MANY_AUTHOR_SUCCESS",

  findManyGenre: 'FIND_MANY_GENRE',
  findManyGenreFailure: 'FIND_MANY_GENRE_FAILURE',
  findManyGenreSuccess: 'FIND_MANY_GENRE_SUCCESS',

  deleteOneAuthor: 'DELETE_ONE_AUTHOR',
  deleteOneAuthorFailure: 'DELETE_ONE_AUTHOR_FAILURE',
  deleteOneAuthorSuccess: 'DELETE_ONE_AUTHOR_SUCCESS',

  removeOneAuthor: 'REMOVE_ONE_AUTHOR',
  removeOneAuthorFailure: 'REMOVE_ONE_AUTHOR_FAILURE',
  removeOneAuthorSuccess: 'REMOVE_ONE_AUTHOR_SUCCESS',

  removeManyAuthor: 'REMOVE_MANY_AUTHOR',
  removeManyAuthorFailure: 'REMOVE_MANY_AUTHOR_FAILURE',
  removeManyAuthorSuccess: 'REMOVE_MANY_AUTHOR_SUCCESS',

  deleteOneGenre: 'DELETE_ONE_GENRE',
  deleteOneGenreFailure: 'DELETE_ONE_GENRE_FAILURE',
  deleteOneGenreSuccess: 'DELETE_ONE_GENRE_SUCCESS',

  removeOneGenre: 'REMOVE_ONE_GENRE',
  removeOneGenreFailure: 'REMOVE_ONE_GENRE_FAILURE',
  removeOneGenreSuccess: 'REMOVE_ONE_GENRE_SUCCESS',

  removeManyGenre: 'REMOVE_MANY_GENRE',
  removeManyGenreFailure: 'REMOVE_MANY_GENRE_FAILURE',
  removeManyGenreSuccess: 'REMOVE_MANY_GENRE_SUCCESS',


  // CHAPTERS
  findManyChapter: "FIND_MANY_CHAPTER",
  findManyChapterFailure: "FIND_MANY_CHAPTER_FAILURE",
  findManyChapterSuccess: "FIND_MANY_CHAPTER_SUCCESS",

  findOneChapterByEbook: "FIND_ONE_CHAPTERS_BY_EBOOK",
  findOneChapterByEbookFailure: "FIND_ONE_CHAPTER_BY_EBOOK_FAILURE",
  findOneChapterByEbookSuccess: "FIND_ONE_CHAPTER_BY_EBOOK_SUCCESS",

  findOneChapter: "FIND_ONE_CHAPTER",
  findOneChapterFailure: "FIND_ONE_CHAPTER_FAILURE",
  findOneChapterSuccess: "FIND_ONE_CHAPTER_SUCCESS",

  deleteOneChapter: 'DELETE_ONE_CHAPTER',
  deleteOneChapterFailure: 'DELETE_ONE_CHAPTER_FAILURE',
  deleteOneChapterSuccess: 'DELETE_ONE_CHAPTER_SUCCESS',

  removeOneChapter: 'REMOVE_ONE_CHAPTER',
  removeOneChapterFailure: 'REMOVE_ONE_CHAPTER_FAILURE',
  removeOneChapterSuccess: 'REMOVE_ONE_CHAPTER_SUCCESS',

  removeManyChapter: 'REMOVE_MANY_CHAPTER',
  removeManyChapterFailure: 'REMOVE_MANY_CHAPTER_FAILURE',
  removeManyChapterSuccess: 'REMOVE_MANY_CHAPTER_SUCCESS',

  // REVIEW
  findManyReview: 'FIND_MANY_REVIEW',
  findManyReviewFailure: 'FIND_MANY_REVIEW_FAILURE',
  findManyReviewSuccess: 'FIND_MANY_REVIEW_SUCCESS',

  removeOneReview: 'REMOVE_ONE_REVIEW',
  removeOneReviewFailure: 'REMOVE_ONE_REVIEW_FAILURE',
  removeOneReviewSuccess: 'REMOVE_ONE_REVIEW_SUCCESS',

  removeManyReview: 'REMOVE_MANY_REVIEW',
  removeManyReviewFailure: 'REMOVE_MANY_REVIEW_FAILURE',
  removeManyReviewSuccess: 'REMOVE_MANY_REVIEW_SUCCESS',

  // COMMENT
  findManyComment: 'FIND_MANY_COMMENT',
  findManyCommentFailure: 'FIND_MANY_COMMENT_FAILURE',
  findManyCommentSuccess: 'FIND_MANY_COMMENT_SUCCESS',

  removeOneComment: 'REMOVE_ONE_COMMENT',
  removeOneCommentFailure: 'REMOVE_ONE_COMMENT_FAILURE',
  removeOneCommentSuccess: 'REMOVE_ONE_COMMENT_SUCCESS',

  removeManyComment: 'REMOVE_MANY_COMMENT',
  removeManyCommentFailure: 'REMOVE_MANY_COMMENT_FAILURE',
  removeManyCommentSuccess: 'REMOVE_MANY_COMMENT_SUCCESS',

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