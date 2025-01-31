import signIn from '/signIn.png'
import logo from '/logo.svg'
import cart from '/cart.png'
import search from '/search1.png'
import styles from './Header.module.css'
import { SingInPopUp } from '../SingInPopUp/SingInPopUp'
import { CartPopUp } from '../CartPopUp/CartPopUp'
import { Furniture } from '../FurnitureBar/Furniture'
import { useState } from 'react'
export function Header({popUpHeader,showPopUpHeader,popUpCart,showPopUpCart,showPopUp,popUp}) {

  const [linkTitle, setLinkTitle] = useState("");

    function chooseLink(link){
      showPopUpHeader()
      setLinkTitle(link)
    }
  return (
    <header>
      <div className={styles.headerConteiner}>
        <div className={styles.logo}><img src={logo} alt="logo" /></div>

        <div className={styles.searchConteiner}>
          <img src={search} alt="" />
          <input placeholder='Find anything home...' />
        </div>

        <div style={{ display: 'flex' }}>
          <div className={styles.btnConteiner}>
            <SingInPopUp showPopUp={showPopUp} popUp={popUp}/>
            <img src={signIn} alt="" />
            <a  onMouseEnter={showPopUp}>Sign In</a>
          </div>
          <div onClick={showPopUpCart} className={styles.btnConteiner}>
            <CartPopUp linkTitle={linkTitle} popUpCart={popUpCart} />
            <img src={cart} className={styles.logo} alt="logo" />
            <a>Cart</a>
          </div>
        </div>
      </div>
      <ul className={styles.headerList}>
        <li onClick={ () => chooseLink("Furniture")} ><a href='#'>Furniture</a></li>
        <li onClick={ () => chooseLink("Outdoor")} ><a href='#'>Outdoor</a></li>
        <li onClick={ () => chooseLink("Bedding")} ><a href='#'>Bedding & Bath</a></li>
        <li onClick={ () => chooseLink("Rugs")} ><a href='#'>Rugs</a></li>
        <li onClick={ () => chooseLink("Decor")} ><a href='#'>Décor & Pillows</a></li>
        <li onClick={ () => chooseLink("Lighting")} ><a href='#'>Lighting</a></li>
        <li onClick={ () => chooseLink("Organization")} ><a href='#'>Organization</a></li>
        <li onClick={ () => chooseLink("Kitchen")} ><a href='#'>Kitchen</a></li>
        <li onClick={ () => chooseLink("Baby")} ><a href='#'>Baby & Kids</a></li>
        <li onClick={ () => chooseLink("Home Improvement")} ><a href='#'>Home Improvement</a></li>
        <li onClick={ () => chooseLink("Appliances")} ><a href='#'>Appliances</a></li>
        <li onClick={ () => chooseLink("Pet")} ><a href='#'>Pet</a></li>
        <li onClick={ () => chooseLink("Holiday")} ><a href='#'>Holiday</a></li>
        <li onClick={ () => chooseLink("Shop by Room")} ><a href='#'>Shop by Room</a></li>
        <li><a href='#' style={{color: '#990E35'}}>Sale</a></li>
      </ul>

    <div>
      {
        popUpHeader ? <Furniture linkTitle={linkTitle} showPopUpHeader={showPopUpHeader}/> : ""
      }
    </div>
    </header>
  );
};

