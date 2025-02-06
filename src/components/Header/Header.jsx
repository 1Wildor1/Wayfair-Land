import signIn from '/signIn.png'
import logo from '/logo.svg'
import cart from '/cart.png'
import burgerMenu from '/burgerMenu.png'
import search from '/search1.png'
import styles from './Header.module.css'
import { SingInPopUp } from '../SingInPopUp/SingInPopUp'
import { CartPopUp } from '../CartPopUp/CartPopUp'
import { Furniture } from '../FurnitureBar/Furniture'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


export function Header({ popUpHeader, showPopUpHeader, popUpCart, showPopUpCart, showPopUp, popUp }) {

  const [linkTitle, setLinkTitle] = useState("");


  const navigate = useNavigate();

  const goToSingInPage = () => {
    window.location.href = "/SingIn";
  };

  function chooseLink(link) {
    showPopUpHeader()
    setLinkTitle(link)
  }
  return (
    <header>
      <div className={styles.headerConteiner}>

        <div className={styles.headerConteinerHiden}>
          <div className={styles.burgerMenu}>
            <button>
              <img src={burgerMenu} alt="" />
            </button>
          </div>
          <div className={styles.logo}><img src={logo} alt="logo" /></div>
          <div className={styles.headerBtnConteiner1}>
            <div className={styles.btnConteiner}>
              <SingInPopUp showPopUp={showPopUp} popUp={popUp} />
              <img onClick={goToSingInPage} src={signIn} alt="" />
              <a onMouseEnter={showPopUp} onClick={goToSingInPage}>Sign In</a>
            </div>
            <div onClick={showPopUpCart} className={styles.btnConteiner}>
              <CartPopUp linkTitle={linkTitle} popUpCart={popUpCart} />
              <img src={cart} className={styles.logo} alt="logo" />
              <a>Cart</a>
            </div>
          </div>
        </div>

        <div className={styles.searchConteiner}>
          <img src={search} alt="" />
          <input placeholder='Find anything home...' />
        </div>

        <div className={styles.headerBtnConteiner2}>
          <div className={styles.btnConteiner}>
            <SingInPopUp showPopUp={showPopUp} popUp={popUp} />
            <img src={signIn} alt="" />
            <a onMouseEnter={showPopUp} onClick={goToSingInPage}>Sign In</a>
          </div>
          <div onClick={showPopUpCart} className={styles.btnConteiner}>
            <CartPopUp linkTitle={linkTitle} popUpCart={popUpCart} />
            <img src={cart} className={styles.logo} alt="logo" />
            <a>Cart</a>
          </div>
        </div>
      </div>
      <ul className={styles.headerList}>
        <li onMouseEnter={() => chooseLink("Furniture")} ><a href='#'>Furniture</a></li>
        <li onMouseEnter={() => chooseLink("Outdoor")} ><a href='#'>Outdoor</a></li>
        <li onMouseEnter={() => chooseLink("Bedding")} ><a href='#'>Bedding & Bath</a></li>
        <li onMouseEnter={() => chooseLink("Rugs")} ><a href='#'>Rugs</a></li>
        <li onMouseEnter={() => chooseLink("Decor")} ><a href='#'>Décor & Pillows</a></li>
        <li onMouseEnter={() => chooseLink("Lighting")} ><a href='#'>Lighting</a></li>
        <li onMouseEnter={() => chooseLink("Organization")} ><a href='#'>Organization</a></li>
        <li onMouseEnter={() => chooseLink("Kitchen")} ><a href='#'>Kitchen</a></li>
        <li onMouseEnter={() => chooseLink("Baby")} ><a href='#'>Baby & Kids</a></li>
        <li onMouseEnter={() => chooseLink("Home")} ><a href='#'>Home Improvement</a></li>
        <li onMouseEnter={() => chooseLink("Appliances")} ><a href='#'>Appliances</a></li>
        <li onMouseEnter={() => chooseLink("Pet")} ><a href='#'>Pet</a></li>
        <li onMouseEnter={() => chooseLink("Holiday")} ><a href='#'>Holiday</a></li>
        <li onMouseEnter={() => chooseLink("Shop")} ><a href='#'>Shop by Room</a></li>
        <li><a href='#' style={{ color: '#990E35' }}>Sale</a></li>
      </ul>

      <div>
        {
          popUpHeader ? <Furniture linkTitle={linkTitle} showPopUpHeader={showPopUpHeader} /> : ""
        }
      </div>
    </header>
  );
};

