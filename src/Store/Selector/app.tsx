import { useSelector, RootStateOrAny } from "react-redux";

const DataAllAuthor = () => useSelector((state: RootStateOrAny) => state.BookReducer.listAuthor);
const DataAllGenre = () => useSelector((state: RootStateOrAny) => state.BookReducer.listGenre);
const DataAllCategory = () => useSelector((state: RootStateOrAny) => state.BookReducer.listCategory);
const DataAllStatus = () => useSelector((state: RootStateOrAny) => state.BookReducer.listStatus);
const DataAllManga = () => useSelector((state: RootStateOrAny) => state.BookReducer.listAllBook);

const DataManyManga = () => useSelector((state: RootStateOrAny) => state.BookReducer.listBook);
const DataOneManga = () => useSelector((state: RootStateOrAny) => state.BookReducer.oneManga);

const DataManyChapter = () => useSelector((state: RootStateOrAny) => state.BookReducer.listChapter);
const DataOneChapter = () => useSelector((state: RootStateOrAny) => state.BookReducer.oneChapter);

const QuantityManga = () => useSelector((state: RootStateOrAny) => state.BookReducer.countBook);
const QuantityChapter = () => useSelector((state: RootStateOrAny) => state.BookReducer.countChapter);

const AddManga = () => useSelector((state: RootStateOrAny) => state.BookReducer.addManga);

export default {
  DataAllAuthor, DataAllGenre, DataAllManga, DataAllCategory, DataAllStatus,
  DataManyManga, DataOneManga,
  DataManyChapter, DataOneChapter,
  QuantityManga, QuantityChapter,

  AddManga,
}
