import Slider from "react-slick";
import { dataCarouselDemo } from "../../Functions/settingsSlider";

const Carousel = () => {
  return (
    <section className="main-carousel">
      <Slider {...settingsSlider}>
        {dataCarouselDemo.map((item, index) => (
        <div className='image' key={index}>
          <img src={item?.images?.background?.url} width='100%' height='100%' alt="" />
        </div> ))}
      </Slider>
    </section>
  )
}
export default Carousel;



const settingsSlider = {
  className: 'slider', arrows: false,
  dots: false, slickNext: false, infinite: true, autoplay: true, slidesToShow: 3, slidesToScroll: 1, initialSlide: 0, autoplaySpeed: 2000,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true } },
    { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 1, initialSlide: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2} },
  ],
};
