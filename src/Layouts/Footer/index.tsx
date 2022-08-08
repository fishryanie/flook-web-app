import * as React from 'react';
import { arrayItemMenu } from '../Header/Components/Navigator';
import Logo from '../../Assets/Images/Footer/logo.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <section className="main-footer">
        <div className="container">
          {/* Grid */}
          <div className="row">
            {/* Puplare Anime */}
            <div className="col">
              <h3>TRUYỆN PHỔ BIẾN</h3>
              <ul className="puplare-list">
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://popsimg.akamaized.net/api/v2/containers/file2/cms_thumbnails/mami_ch_y__i-ca59c0049f49-1654846739957-tlQHr2qy.jpeg?v=0&maxW=320&format=jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Berserk 2021</h3>
                    </a>
                    <h4>Ngày ra mắt: 18/2/2022</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="data:image/jpeg;base64,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" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Fullmetal Alchemist</h3>
                    </a>
                    <h4>Ngày ra mắt: 01/04/2022</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl7Ay-xpr7qYZcC-URSNMu5dqr6rsPeJxKuQ&usqp=CAU" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Death Note</h3>
                    </a>
                    <h4>Ngày ra mắt: 26/03/2022</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Puplare Manga */}
            <div className="col">
              <h3>TRUYỆN HOT</h3>
              <ul className="puplare-list">
                <li className="small-media">
                  <a href="manga-details.html" className="image">
                    <img src="https://zingtv-photo.zmdcdn.me/tv_program_275_275/7/9/f/5/79f53417c3b6464e018f5885b5915610.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="manga-details.html">
                      <h3>D.Gray-Man 2016</h3>
                    </a>
                    <h4>Ngày ra mắt: 05/06/2022</h4>
                    <a href="manga-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="manga-details.html" className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3bZuwFdudahGijEN4ngA6zqBSuEPasMsCFUCKY_Ur_0mMFRAgsPrMZdvvalvccMWdcLk&usqp=CAU" alt="" />
                  </a>
                  <div className="info">
                    <a href="manga-details.html">
                      <h3>Bleach</h3>
                    </a>
                    <h4>Ngày ra mắt: 08/03/2022</h4>
                    <a href="manga-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="manga-details.html" className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/9f/Bakuman_Vol_1_Cover.jpg/220px-Bakuman_Vol_1_Cover.jpg" alt="" />
                  </a>
                  <div className="info">
                    <a href="manga-details.html">
                      <h3>Shingeki no Kyojin</h3>
                    </a>
                    <h4>Ngày ra mắt: 14/02/2022</h4>
                    <a href="manga-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Puplare Movies */}
            <div className="col">
              <h3>LỊCH SỬ ĐỌC</h3>
              <ul className="puplare-list">
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQljHCxfCL57RdBBlNojVBnKdLWyYND831qsA&usqp=CAU" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>One Piece Film Gold</h3>
                    </a>
                    <h4>Ngày ra mắt: 01/04/2022</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSAOxeqq3MKGt6KqeHpOJTviT0TlHt6sFrw&usqp=CAU" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Trinity Seven Movie</h3>
                    </a>
                    <h4>Ngày ra mắt: 01/06/2022</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
                <li className="small-media">
                  <a href="anime-details.html" className="image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLUzILM8zhCHOkcN0H6xHdsYhcYNWmGq2lgg&usqp=CAU" alt="" />
                  </a>
                  <div className="info">
                    <a href="anime-details.html">
                      <h3>Garo Divine Flame</h3>
                    </a>
                    <h4>Ngày ra mắt: 30/04/2022</h4>
                    <a href="anime-stream.html" className="more-btn">
                      Xem ngay
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            {/* Anime of the Day */}
            <div className="col">
              <h3>TIÊU ĐIỂM TUẦN</h3>
              <a href="#" className="banner">
                <img src="https://znews-photo.zingcdn.me/w660/Uploaded/oplukaa/2022_05_01/Demon_Slayer_top.jpg" alt="" />
              </a>
            </div>
          </div>
          {/* Footer Menu */}
          <div className="navigation-menu">
            <ul>{arrayItemMenu.map((item, index) => {
              return <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
              })}
            </ul>
          </div>
        </div>
      </section>
      {/* // Main Footer */}
      {/* Copyrights */}
      <section className="copyrights">
        <div className="container">
          <p>@PHÁT TRIỂN BỞI FLOOK CORPORATION</p>
          <a href="#" className="tooltip" data-title="Designed by Phoenix Themes">
            <img src={Logo} alt="Phoenix Themes" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
