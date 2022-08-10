import moment from 'moment';
import namePage from '../Constants/NamePage';
import { useNavigate } from 'react-router-dom';
import { store } from '../Store/store';
import { Rating } from '@mui/material';

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
    avgScore: any;
    createdAt: any;
  };
}

const CardImage: React.FC<CardImageProps> = props => {
  const { item, index } = props;
  const navigate = useNavigate();
  const saveDataEbook = (id:any, data: any) => () => {
    store.dispatch({ type: 'dataEbook', payload: data })
    navigate(`${namePage.detail}/${id}`)
  };

  return (
    <section className="card-image" key={index} id={item._id}>
      <div className="card" style={{ backgroundImage: `url(${item?.images?.background?.url})` }}>
        <div className="card-spacing" />
        <div className="card-content">
          <div className="card-author">
            {item.authors?.map((authors, index) =>
              <span key={index}>
                {item.authors.length >= 1 ? authors.name + ', ' : authors.name}
              </span>
            )}
          </div>
          <div className="card-title">{item?.title.length > 20 ? item?.title.slice(0, 20) + '...' : item?.title}</div>
          <div className="card-rating"><Rating name="read-only" value={item?.avgScore} readOnly precision={0.25}/></div>
          <div className="card-day">{moment(item?.createdAt).format('dddd')}</div>
          <div className="card-description"> {item?.description} </div>
          <div className="link"  onClick={saveDataEbook(item._id, item)}>Xem thêm</div>
        </div>
      </div>
    </section>
  );
}

export default CardImage