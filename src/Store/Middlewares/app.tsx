import { put, all, takeLatest } from "redux-saga/effects";
import { responseGenerator } from './index'
import { notify } from '../../Functions/GlobalFunc'
import actionTypes from "../Actions/constants";
import Services from "../../Services"
import Action from "../Actions"

// GENRE
function* FindGenre(){
  try {
    const response: responseGenerator = yield Services.app.findGenre();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findGenreSuccess(response.data))
    }else {
      yield put(Action.app.findGenreFailure(response.message))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedGenre(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const response: responseGenerator = yield Services.app.deletedGenre(action.payload);
    console.log('response', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedGenreSuccess(response))
      yield put(Action.app.findGenre())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedGenreFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyGenre(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.app.deletedManyGenre(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedManyGenreSuccess(response))
      yield put(Action.app.findGenre())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedManyGenreFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

// AUTHOR
function* FindAuthor(){
  try {
    const response: responseGenerator = yield Services.app.findAuthor();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findAuthorSuccess(response.data))
    }else {
      yield put(Action.app.findAuthorFailure(response.message))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedAuthor(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const response: responseGenerator = yield Services.app.deletedAuthor(action.payload);
    console.log('response', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedAuthorSuccess(response))
      yield put(Action.app.findAuthor())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedAuthorFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyAuthor(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.app.deletedManyAuthor(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedManyAuthorSuccess(response))
      yield put(Action.app.findAuthor())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedManyAuthorFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

// CATEGORIES
function* FindCategories(){
  try {
    const response: responseGenerator = yield Services.app.findCategories();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findCategoriesSuccess(response.data))
    }else {
      yield put(Action.app.findCategoriesFailure(response.message))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

// STATUS
function* FindStatus(){
  try {
    const response: responseGenerator = yield Services.app.findStatus();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findStatusSuccess(response.data))
    }else {
      yield put(Action.app.findStatusFailure(response.message))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

// MANGA
function* AddManga(action: any) {
  try {
    const response: responseGenerator = yield Services.app.createManga(action.payload)
    if (response.statusCode === 200) {
      yield put(Action.app.addMangaSuccess(response))
    } else {
      yield put(Action.app.addMangaFailure(response))
    }
  } catch (error) {
    console.log('Error', error)
  } finally {
    console.log('AddManga')
  }
}

function* FindManga(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.app.findManga(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield put(Action.app.findMangaSuccess(response))
    }else {
      yield put(Action.app.findMangaFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindMangaById(action: any){
  const id = action.payload
  try {
    const response: responseGenerator = yield Services.app.findMangaById(id);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.app.findMangaByIdSuccess(response))
    }else{
      yield put(Action.app.findMangaByIdFailure(response))
    }
  } catch (error) {
    console.log('Error DetailSagas', error)
  } finally {
    console.log('DetailSagas')
  }
}

function* FindManyManga(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const response: responseGenerator = yield Services.app.findManyManga(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield put(Action.app.findManyMangaSuccess(response))
    }else {
      yield put(Action.app.findManyMangaFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManga(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const response: responseGenerator = yield Services.app.deletedManga(action.payload);
    console.log('response', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedMangaSuccess(response))
      yield put(Action.app.findManyManga(''))
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedMangaFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyManga(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.app.deletedManyManga(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedManyMangaSuccess(response))
      yield put(Action.app.findManyManga(''))
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedManyMangaFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

// CHAPTERS
function* FindChapter(){
  try {
    const response: responseGenerator = yield Services.app.findChapter();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findChapterSuccess(response.data))
    }else {
      yield put(Action.app.findChapterFailure(response.message))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* FindChapterByMangaId(action: any){
  const data = action.payload
  try {
    const response: responseGenerator = yield Services.app.findChapterByMangaId(data);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.app.findChapterByMangaIdSuccess(response))
    }else{
      yield put(Action.app.findChapterByMangaIdFailure(response))
    }
  } catch (error) {
    console.log('Error Detail-ChapterSagas', error)
  } finally {
    console.log('Detail-ChapterSagas')
  }
}

function* FindChapterById(action: any){
  const id = action.payload
  try {
    const response: responseGenerator = yield Services.app.findChapterById(id);
    console.log('response', response)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(Action.app.findChapterByIdSuccess(response))
    }else{
      yield put(Action.app.findChapterByIdFailure(response))
    }
  } catch (error) {
    console.log('Error ChapterSagas', error)
  } finally {
    console.log('ChapterSagas')
  }
}

function* DeletedChapter(action: any){
  try {
    // const data = action.payload
    // console.log(data)
    const response: responseGenerator = yield Services.app.deletedChapter(action.payload);
    console.log('response', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedChapterSuccess(response))
      yield put(Action.app.findChapter())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedChapterFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyChapter(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.app.deletedManyChapter(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedManyChapterSuccess(response))
      yield put(Action.app.findChapter())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedManyChapterFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

// REVIEW
function* FindReview(){
  try {
    const response: responseGenerator = yield Services.app.findReview();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findReviewSuccess(response.data))
    }else {
      yield put(Action.app.findReviewFailure(response.message))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyReview(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.app.deletedManyReview(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedManyReviewSuccess(response))
      yield put(Action.app.findReview())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedManyReviewFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

// COMMENT
function* FindComment(){
  try {
    const response: responseGenerator = yield Services.app.findComment();
    console.log('response', response)
    if(response.statusCode === 200){
      yield put(Action.app.findCommentSuccess(response.data))
    }else {
      yield put(Action.app.findCommentFailure(response.message))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

function* DeletedManyComment(action: any){
  try {
    const data = action.payload
    console.log(data)
    const response: responseGenerator = yield Services.app.deletedManyComment(action.payload);
    console.log('response comic', response)
    if(response.statusCode === 200){
      yield notify(response.message)
      yield put(Action.app.deletedManyCommentSuccess(response))
      yield put(Action.app.findComment())
    }else {
      yield notify(response.message)
      yield put(Action.app.deletedManyCommentFailure(response))
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.log('saga')
  }
}

export default function* appSaga() {
  yield all([
    takeLatest(actionTypes.addManga, AddManga),
    takeLatest(actionTypes.findManga, FindManga),
    takeLatest(actionTypes.findMangaById, FindMangaById),
    takeLatest(actionTypes.findManyManga, FindManyManga),
    takeLatest(actionTypes.deletedManga, DeletedManga),
    takeLatest(actionTypes.deletedManyManga, DeletedManyManga),
    
    takeLatest(actionTypes.findGenre, FindGenre),
    takeLatest(actionTypes.deletedGenre, DeletedGenre),
    takeLatest(actionTypes.deletedManyGenre, DeletedManyGenre),

    takeLatest(actionTypes.findAuthor, FindAuthor),
    takeLatest(actionTypes.deletedAuthor, DeletedAuthor),
    takeLatest(actionTypes.deletedManyAuthor, DeletedManyAuthor),

    takeLatest(actionTypes.findCategories, FindCategories),
    takeLatest(actionTypes.findStatus, FindStatus),

    takeLatest(actionTypes.findChapter, FindChapter),
    takeLatest(actionTypes.findChapterByMangaId, FindChapterByMangaId),
    takeLatest(actionTypes.findChapterById, FindChapterById),
    takeLatest(actionTypes.deletedChapter, DeletedChapter),
    takeLatest(actionTypes.deletedManyChapter, DeletedManyChapter),

    takeLatest(actionTypes.findReview, FindReview),
    takeLatest(actionTypes.deletedManyReview, DeletedManyReview),

    takeLatest(actionTypes.findComment, FindComment),
    takeLatest(actionTypes.deletedManyComment, DeletedManyComment),
  ]) 
}