import Subscribe from './Components/Subscribe'
import SliderItem from '../../Components/SliderCustom'
import Action from '../../Store/Actions'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const HomePage: React.FC = () => {

  const dataTop = { 
    page: 1, 
    sort: 'view', 
  };
  const dataNew = { 
    page: 1, 
    sort: 'view', 
    newDay: true,
  };

  const dispatch = useDispatch();

  const topBook = useSelector((state: RootStateOrAny) => state.BookReducer.listBook)
  const newBook = useSelector((state: RootStateOrAny) => state.BookReducer.listNewBook)
  const subBook = useSelector((state: RootStateOrAny) => state.BookReducer.listBookSubscribers)
  const hisBook = useSelector((state: RootStateOrAny) => state.BookReducer.listBookHistory)

  useEffect(() => {
    dispatch(Action.app.searchEbook(dataTop));
    dispatch(Action.app.searchNewEbook(dataNew));
    dispatch(Action.app.findEbookSubscribers());
    dispatch(Action.app.findEbookHistory());
  }, [dispatch]);


  return (
    <section>
      {/* <SliderItem data={dataCarouselDemo} title='manga' /> */}
      {topBook.length > 3 && <SliderItem data={topBook} title='top manga' />}
      {
        hisBook.length > 3
        &&
        <SliderItem data={hisBook} title='lịch sử đọc' />
      }
      <Subscribe />
      {
        newBook.length > 3
        &&
        <SliderItem data={newBook} title='truyện mới' />
      }
      {
        subBook.length > 3
        &&
        <SliderItem data={subBook} title='theo dõi' />
      }
    </section>
  )
}
export default HomePage
