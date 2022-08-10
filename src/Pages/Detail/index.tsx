import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Action from '../../Store/Actions';
import namePage from '../../Constants/NamePage';
import { Rating } from '@mui/material';
import { toast } from 'react-toastify';
import { toastConfig } from '../../Functions/toast';


const DetailPage: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataEbook = useSelector((state: RootStateOrAny) => state.AppReducer.dataEbook);

  const id = params.id;

  const CountChapter = dataEbook?.sumPage;
  const countChap = CountChapter % 12 === 0 ? parseInt((CountChapter / 12).toString()) : parseInt((CountChapter / 12).toString()) + 1;

  const [data, setData] = useState({
    id: id,
    page: 1,
    orderby: 1,
  })
  const [page, setPage] = useState(1)

  const listChapter = useSelector((state: RootStateOrAny) => state.BookReducer.listChapter)

  useEffect(() => {
    dispatch(Action.app.searchChapter(data))
  }, [dispatch, data]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    setData({ ...data, page: value })
  };

  const handleClick = (item: any) => () => navigate(`${namePage.chapter}/${dataEbook?.title}/chapter-${item.name}/${item._id}`)

  return (
    <section className="detail-page">
      <div id="main">
        <div className="fakebox"></div>
        <div className="background-realbox">
          <div className="row position-realbox-absolute">
            <div className="page-content">
              <div className="widget-sidebar">
                <div className="poster-manga">
                  <a className="poster">
                    <img src={dataEbook?.images?.background?.url} alt="photo" />
                    <div className="icon_img_poster">
                      <i className="bx bx-play" />
                    </div>
                  </a>
                </div>
                <div className="information">
                  <ul>
                    <li>
                      <p>
                        Tên : <span> {dataEbook?.title} </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Tác Giả :
                        {dataEbook?.authors?.map((item: any, index: number) => {
                          return (
                            <span key={index}> {item.name}, </span>
                          )
                        })}
                      </p>
                    </li>
                    <li>
                      <p>
                        Thể Loại :
                        {dataEbook?.genres?.map((item: any, index: number) => {
                          return (
                            <span key={index}> {item.name}, </span>
                          )
                        })}
                      </p>
                    </li>
                    <li>
                      <p>
                        Độ Tuổi : <span> {dataEbook?.allowedAge} </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Độ Hot : <span>#{dataEbook?.sumHot}</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        Chapters : <span> #{dataEbook?.sumPage} </span>
                      </p>
                    </li>
                  </ul>
                </div>
                <h1 className="area-title">RELATED ANIME</h1>
                {/* POSTER MANGA */}
                <div className="poster-manga">
                  <a>
                    <img src="https://animehay.club//upload/poster/3517.jpg" alt="Manga Naruto" />
                  </a>
                  <a className="rating">
                    <p>RATING</p>
                    <span>9.0</span>
                  </a>
                  <div className="icon">
                    <a className="icon-link">
                      <i className="icon-play fa-solid fa-play" />
                    </a>
                  </div>
                  <div className="content-anime">
                    <h1>Đấu Phá Thương Khung: Duyên Khởi</h1>
                    <hr />
                    <p>MANGA</p>
                  </div>
                  <a className="media-block" />
                  {/* href="https://phenixthemes.com/frontdemo/animtora/anime-details.html" */}
                </div>
                {/* SOCIAL  */}
                <div className="btn-group">
                  <div className="list-item fb">
                    <div className="icon">
                      <i className="icon__social icon_facebook fa-brands fa-facebook-f" />
                    </div>
                    <div className="link-share link-share__bgfb">
                      <a onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)} className="btn-flip" data-back="Share on Facebook" data-front="Facebook" />
                    </div>
                  </div>
                  <div className="list-item twitter">
                    <div className="icon">
                      <i className="icon__social icon_twitter fa-brands fa-twitter" />
                    </div>
                    <div className="link-share link-share__twitter">
                      <a onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)} className="btn-flip" data-back="Share on Twitter" data-front="Twitter" />
                    </div>
                  </div>
                  <div className="list-item whatsapp">
                    <div className="icon">
                      <i className="icon__social icon_whatsapp fa-brands fa-whatsapp" />
                    </div>
                    <div className="link-share link-share__whatsapp">
                      <a onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)} className="btn-flip" data-back="Share on Whatsapp" data-front="Whatsapp" />
                    </div>
                  </div>
                  <div className="list-item instagram">
                    <div className="icon">
                      <i className="icon__social icon_instagram fa-brands fa-instagram" />
                    </div>
                    <div className="link-share link-share__instagram">
                      <a onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)} className="btn-flip" data-back="Share on Instagram" data-front="Instagram" />
                    </div>
                  </div>
                </div>
              </div>
              {/* DETAIL CONTENT */}
              <section className="detail__content">
                <header className="header__detail__content">
                  <h1>{dataEbook?.title}</h1>
                  <p>
                    Trạng Thái Truyện: <span>
                      <span> {dataEbook?.status} </span>
                    </span>
                  </p>
                  <div className="rating__star">
                    <Rating name="read-only" value={dataEbook?.avgScore} readOnly precision={0.25}/>
                  </div>
                  <div className="media-statistic">
                    <div className="fakebox__chapers__container">
                      <h4>
                        <span>{dataEbook?.sumPage}</span>
                        <br />
                        <p>CHAPTERS</p>
                        <i className="fa-solid fa-bars-staggered" />
                      </h4>
                      <h4>
                        <span>{dataEbook?.avgScore}</span>
                        <br />
                        <p>VOTING</p>
                        <i className="fa-solid fa-star-half-stroke" />
                      </h4>
                      <h4>
                        <span> {dataEbook?.views} </span>
                        <br />
                        <p>VIEWS</p>
                        <i className="fa-solid fa-eye" />
                      </h4>
                    </div>
                  </div>
                </header>
                {/* CONTENT-TEXT */}
                <article className="content-text">
                  <h2>THE STORY LINE</h2>
                  <p>
                    {dataEbook?.description}
                  </p>
                </article>
                {/* BUTTONS */}
                <div className="container__btns">
                  <div className="btn__item btn__item__favorite">
                    <a className="btn__item__link" onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
                      <i className="btn__item__icon fa-solid fa-heart" />
                      <p>Add To Fevorite</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__watch">
                    <a className="btn__item__link" onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
                      <i className="btn__item__icon fa-solid fa-clock" />
                      <p>Watch Later</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__watched">
                    <a className="btn__item__link" onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
                      <i className="btn__item__icon fa-solid fa-bars" />
                      <p>Watched</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__wishlist">
                    <a className="btn__item__link" onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
                      <i className="btn__item__icon fa-solid fa-list-check" />
                      <p>Wish list</p>
                    </a>
                  </div>
                  <div className="btn__item btn__item__subscribe">
                    <a className="btn__item__link" onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}>
                      <i className="btn__item__icon fa-solid fa-bell" />
                      <p>Subscribe</p>
                    </a>
                  </div>
                </div>
                <section className="chapters">
                  <h1>CHAPTERS LIST</h1>
                  <nav className="chapters_nav">
                    {listChapter?.length === 0 ? (
                      <h1>Đang cập nhật!!!</h1>
                    ) : (
                      listChapter?.map((item: any, index: number) => {
                        return (
                          <li key={index}>
                            <div className="chapter__link" onClick={handleClick(item)}>
                              <div className="chapter__item">
                                <h3> Chapter {item.name} </h3>
                                <p>Chapter Title Goes Here</p>
                              </div>
                            </div>
                            <div className="btn__read_download">
                              <a className="chapter__link" href=""></a>
                              <a href="" className="btn__read">
                                <i className="bx bx-book-reader" />
                                <p>Read</p>
                              </a>
                              <a href="" className="btn__download">
                                <i className="bx bxs-download" />
                                <p>Download</p>
                              </a>
                            </div>
                          </li>
                        );
                      })
                    )}

                  </nav>
                </section>

                <Stack sx={{ mt: 5, mb: 5 }}>
                  <Pagination size="large" variant="outlined" shape="rounded"
                    showFirstButton
                    showLastButton
                    count={countChap}
                    page={page}
                    onChange={handleChangePage}
                  />
                </Stack>
                <section className="tags">
                  <h1>TAGS</h1>
                  <ul className="tag__item">
                    <li>
                      <a href="">Manga</a>
                    </li>
                    <li>
                      <a href="">FullMetal</a>
                    </li>
                    <li>
                      <a href="">Alchemist</a>
                    </li>
                    <li>
                      <a href="">Brotherhood</a>
                    </li>
                    <li>
                      <a href="">Action</a>
                    </li>
                    <li>
                      <a href="">Adventure</a>
                    </li>
                    <li>
                      <a href="">Comedya</a>
                    </li>
                    <li>
                      <a href="">Chapter</a>
                    </li>
                    <li>
                      <a href="">Manga</a>
                    </li>
                    <li>
                      <a href="">FullMetal</a>
                    </li>
                    <li>
                      <a href="">Alchemist</a>
                    </li>
                  </ul>
                </section>
                <section className="comment-form">
                  <h2 className="border_right">ADD COMMENT</h2>
                  <form action="">
                    <input className="input__form" type="text" placeholder="Name" />
                    <input className="input__form" type="email" placeholder="Email" />
                    <br />
                    <textarea name="" id="" placeholder="Comment" cols={30} rows={5} defaultValue={''} />
                    <input className="btn_addcommet" type="submit" value="Add Comment" />
                  </form>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
