import moment from 'moment';
import namePage from '../Constants/NamePage';
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../Store/store';

export interface CardImageProps {
  index: number;
  item: {
    _id: string;
    title: string;
    authors: [
      {
        name: string;
      }
    ];
    description: string;
    images: {
      wallPaper: {
        id: string;
        url: string;
      },
      background: {
        id: string;
        url: string;
      },
    };
  };
}

const CardImage: React.FC<CardImageProps> = props => {
  const { item, index } = props;
  const navigate = useNavigate();
  const saveDataEbook = (id:any, data: any) => () => {
    store.dispatch({ type: 'dataEbook', payload: data })
    navigate(`${namePage.detail}/${id}`)
    // store.dispatch({})
  };
  // const handleClick = (id: any) => () => 

  return (
    <section className="card-image" key={index} onClick={saveDataEbook(item._id, item)} id={item._id}>
      <div className="card" style={{ backgroundImage: `url(${item?.images?.background?.url})` }}>
        <div className="card-spacing" />
        <div className="card-content">
          <div className="card-author">
            {item.authors?.map((authors, index) =>
              <span key={index}>
                {item.authors.length >= 1 ? authors.name + ', ' : authors.name}
              </span>)}
          </div>
          <div className="card-title">{item?.title}</div>
          <div className="card-rating">⭐ ⭐ ⭐ ⭐ ⭐ 5/5</div>
          <div className="card-day">{moment('12/03/2021').format('dddd')}</div>
          <div className="card-description"> {item?.description} </div>
          <Link className="link" to={namePage?.detail}>Xem thêm</Link>
        </div>
      </div>
    </section>
  );
}

export default CardImage