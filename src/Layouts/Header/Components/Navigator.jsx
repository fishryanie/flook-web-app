import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import namePage from '../../../Constants/NamePage';
import Action from '../../../Store/Actions';
import actionTypes from '../../../Store/Actions/constants';

const Navigator = (props) => {
  const { stringClass } = props;
  const [animate, setAnimaie] = useState('animate__animated animate__zoomIn');

  const dispatch = useDispatch();

  const ShowDialogAuth = () => {
    dispatch({ type: actionTypes.openDialog });
  };

  useEffect(() => {
    dispatch(Action.auth.FindOneUser());
  }, []);

  const userLoggin = useSelector((state) => state.AuthReducer.userLoggin);

  return (
    <React.Fragment>
      <section className="container navigation-menu ngdone" data-id="main-menu" data-logo="img/logo-colored.png">
        <ul className={animate}>
          {arrayItemMenu?.map((item, index) => (
            <li className={animate} key={index}>
              {item.icon}
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
          {(Object.entries(userLoggin).length === 0) ? (
            <li onClick={ShowDialogAuth}>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="gooey">
                    {/* in="sourceGraphic" */}
                    <feGaussianBlur in="SourceGraphic" stdDeviation={5} result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                    <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                  </filter>
                </defs>
              </svg>
              <button id="gooey-button">
                Đăng Nhập
                <span className="bubbles">
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                </span>
              </button>
            </li>
          ) : (
            <li onClick={ShowDialogAuth}>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="gooey">
                    {/* in="sourceGraphic" */}
                    <feGaussianBlur in="SourceGraphic" stdDeviation={5} result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                    <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                  </filter>
                </defs>
              </svg>
              <button id="gooey-button">
                Đổi mật khẩu
                <span className="bubbles">
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                  <span className="bubble" />
                </span>
              </button>
            </li>
          )}
        </ul>
      </section>

      <nav className={`${stringClass}`}>
        <section className="nav">
          <div className="nav__content">
            <ul className="nav__list">
              {arrayItemMenu?.map((item, index) => {
                return (
                  <li className="nav__list-item active-nav" key={index}>
                    <Link to={item.link} className="hover-target">
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </nav>
      {/* <AuthDiaLog /> */}
    </React.Fragment>
  );
};

export const arrayItemMenu = [
  { name: 'Trang Chủ', link: namePage.home },
  { name: 'Truyện Tranh', link: namePage.manga },
  { name: 'Tiểu Thuyết', link: namePage.error },
  { name: 'Truyện Chat', link: namePage.error },
  { name: 'Xếp Hạng', link: namePage.error },
  { name: 'Diễn Đàn', link: namePage.error },
  { name: 'Thông Tin', link: namePage.error },
  { name: 'Liên Hệ', link: namePage.error },
];

export default Navigator;
