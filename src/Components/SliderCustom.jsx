import { Link } from "react-router-dom";
import { settingsSlider } from '../Functions/settingsSlider'
import Slider from "react-slick";
import namePage from '../Constants/NamePage'
import CardImage from './CardImage';


// type SlideProps = {title: string, data: any}

// const SliderItem: React.FC<SlideProps> = props => {
  const SliderItem = (props) => {
  const { title, data } = props
  const settings = settingsSlider('row-slider-item', 5, 2000)
  return (
    <section className='slider-main'>
      <div className='carousel-slider-item'>
        <div className='slider-title'>
          <h2 className='area-title'>{title}</h2>
          <Link className='slider-seemore' to={namePage?.manga}>See more</Link>
        </div>
        <Slider {...settings}>
          {data?.map((item, index) => <CardImage index={index} item={item}/>)}
        </Slider>
      </div>
    </section>
  )
}

export default SliderItem

