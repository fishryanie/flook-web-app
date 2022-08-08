import actionTypes from "../Actions/constants";

interface initialStateModel {
  listGenre: Array<string>;
  listAuthor: Array<string>;
  listBook: Array<string>;
  listBookSubscribers: Array<string>;
  listBookHistory: Array<string>;
  listNewBook: Array<string>;
  listAllBook: Array<string>;
  listAllChapter: Array<string>;
  listChapter: Array<string>;
  listReview: Array<string>;
  listComment: Array<string>;
  insertOneEbook: object;
  oneBook: object;
  oneChapter: object;
  countBook: number;
  countChapter: number;
};

const initialState: initialStateModel = {
  listBook: [],
  listBookSubscribers: [],
  listBookHistory: [],
  listNewBook: [],
  listAllBook: [],
  listGenre: [],
  listAuthor: [],
  listAllChapter: [],
  listChapter: [],
  listReview: [],
  listComment: [],
  insertOneEbook: {},
  oneBook: {},
  oneChapter: {},
  countBook: 0,
  countChapter: 0
};

export const BookReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.searchEbookSuccess: {
      return {
        ...state, 
        countBook: action.payload.length,
        listBook: [...action.payload.data], 
      }
    }
    case actionTypes.searchNewEbookSuccess: {
      return {
        ...state, 
        listNewBook: [...action.payload.data], 
      }
    }
    case actionTypes.searchEbookSubscribersSuccess: {
      return {
        ...state, 
        listBookSubscribers: [...action.payload.data], 
      }
    }
    case actionTypes.searchEbookHistorySuccess: {
      return {
        ...state, 
        listBookHistory: [...action.payload.data], 
      }
    }
    case actionTypes.insertOneEbookSuccess: {
      return {...state, insertOneEbook: action.payload}
    }
    case actionTypes.findOneEbookSuccess: {
      return {...state, oneBook: action.payload}
    }
    case actionTypes.findManyEbookSuccess: {
      return {...state, listAllBook: [...action.payload.data],}
    }
    case actionTypes.findManyGenreSuccess:{
      return {...state, listGenre: [...action.payload]}
    }
    case actionTypes.findManyAuthorSuccess: {
      return {...state, listAuthor: [...action.payload]}
    }
    case actionTypes.findManyChapterSuccess: {
      return {...state, listAllChapter: [...action.payload]}
    }
    case actionTypes.searchChapterSuccess: {
      return {
        ...state,
        countChapter: action.payload.count,
        listChapter: [...action.payload.data]
      }
    }
    case actionTypes.findOneChapterSuccess: {
      return {...state, oneChapter: action.payload}
    }
    case actionTypes.findManyReviewSuccess: {
      return {...state, listReview: [...action.payload]}
    }
    case actionTypes.findManyCommentSuccess: {
      return {...state, listComment: [...action.payload]}
    }
    default: return {...state}
  }
}