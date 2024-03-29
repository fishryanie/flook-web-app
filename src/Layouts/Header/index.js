import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Logo from '../../Assets/Images/Footer/logo.png'
import Carousel from "../Carousel"
import styledComponents from "styled-components"
import Navigator from "./Components/Navigator"
import NotificationSection from "./NotificationSection";
import ProfileSection from "./ProfileSection";
import namePage from "../../Constants/NamePage";
import WrapperDiaLog from '../../Components/WrapperDiaLog'
import AuthDiaLog from '../Auth'
import { toastConfig } from "../../Functions/toast";
import { toast } from "react-toastify";

const Header = (props) => {

  const { carousel } = props
  const [ scroll, setScroll ] = useState ('')
  const [ openNav, setOpenNav ]= useState('')
  const [ animate, setAnimaie ] = useState('')
  
  const HomeHeader = styledComponents.section`
    &::after { height: ${carousel ? '200px' : '0px'}}
  `

  useEffect(() => {
    window.addEventListener('scroll',() => {
      setScroll(window.pageYOffset > .1 ? 'is-sticky' : '');
      setAnimaie(window.pageYOffset > .1 ? 'animate__animated animate__fadeInDown animate__faster' : '')
    })
    return ''
  },[]);

  return (
    <HomeHeader className="home-header">
      <header className={`tornado-header stdone ${scroll} ${animate}`} data-sticky="absolute">
        <main className="container">
          <form className="form-ui search-box">
            <i className='bx bx-search-alt-2'></i>
            <input type="text" placeholder="Vui lòng nhập từ khóa" onClick={() => toast.warning('Chức năng đang cập nhật!', toastConfig)}/>
          </form>
          <Link className="logo" to={namePage.home}><img src={Logo} alt=''/></Link>
          <section className="action-btns">
            <NotificationSection/>
            <ProfileSection showAt='APP'/>
          </section>
        </main>
        {scroll === '' && <hr />}
        <Navigator stringClass={openNav}/>
      </header>
      {carousel && <Carousel/>}
      <WrapperDiaLog Component={AuthDiaLog}/>
    </HomeHeader>
  )
}

export default Header