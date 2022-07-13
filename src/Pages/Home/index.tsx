import Subscribe from './Components/Subscribe'
import SliderItem from '../../Components/SliderCustom'
import { dataCarouselDemo } from '../../Functions/settingsSlider'
import Selector from '../../Store/Selector'
import Action from '../../Store/Actions'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {

  const [ data, setData ] = useState({
    page: 1,
    allowedAge: [],
    chapters: [],
    search: [],
    status: [],
    author: [],
    genre: [],
    sort: 'view'
  })

  const dispatch = useDispatch();

  const listBook = useSelector((state: RootStateOrAny) => state.BookReducer.listBook)
  console.log(listBook)

  useEffect(() => {
    dispatch(Action.app.searchEbook(data));
  }, [dispatch, data]);


  return (
    <section>
      { listBook.length > 3 && <SliderItem data={listBook} title='top manga'/> }
      <Subscribe/>
      <SliderItem data={dataCarouselDemo} title='manga'/>
    </section>
  )
}
export default HomePage
