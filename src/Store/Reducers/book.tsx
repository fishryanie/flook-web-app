import actionTypes from "../Actions/constants";

interface initialState{
  listGenre: Array<string>;
  listAuthor: Array<string>;
  listBook: Array<string>;
  listAllBook: Array<string>;
  listAllChapter: Array<string>;
  listChapter: Array<string>;
  listCategory: Array<string>;
  listStatus: Array<string>;
  listReview: Array<string>;
  listComment: Array<string>;
  addManga: object;
  oneManga: object;
  oneChapter: object;
  countBook: number;
  countChapter: number;
}
const initialState: initialState = {
  listBook: [],
  listAllBook: [],
  listGenre: [],
  listAuthor: [],
  listCategory: [],
  listStatus: [],
  listAllChapter: [],
  listChapter: [],
  listReview: [],
  listComment: [],
  addManga: {},
  oneManga: {},
  oneChapter: {},
  countBook: 0,
  countChapter: 0
};

export const BookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.findMangaSuccess: {
      return {
        ...state, 
        countBook: action.payload.count,
        listBook: [...action.payload.data], 
      }
    }
    case actionTypes.addMangaSuccess: {
      return {...state, addManga: action.payload}
    }
    case actionTypes.findMangaByIdSuccess: {
      return {...state, oneManga: action.payload}
    }
    case actionTypes.findManyMangaSuccess: {
      return {...state, listAllBook: [...action.payload.data],}
    }
    case actionTypes.findGenreSuccess:{
      return {...state, listGenre: [...action.payload]}
    }
    case actionTypes.findAuthorSuccess: {
      return {...state, listAuthor: [...action.payload]}
    }
    case actionTypes.findChapterSuccess: {
      return {...state, listAllChapter: [...action.payload]}
    }
    case actionTypes.findCategoriesSuccess:{
      return {...state, listCategory: [...action.payload]}
    }
    case actionTypes.findStatusSuccess: {
      return {...state, listStatus: [...action.payload]}
    }
    case actionTypes.findChapterByMangaIdSuccess: {
      return {
        ...state,
        countChapter: action.payload.count,
        listChapter: [...action.payload.data]
      }
    }
    case actionTypes.findChapterByIdSuccess: {
      return {...state, oneChapter: action.payload}
    }
    case actionTypes.findReviewSuccess: {
      return {...state, listReview: [...action.payload]}
    }
    case actionTypes.findCommentSuccess: {
      return {...state, listComment: [...action.payload]}
    }
    default: return {...state}
  }
}