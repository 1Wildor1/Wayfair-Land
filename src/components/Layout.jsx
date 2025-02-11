import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export function Layout({ popUp, popUpCart, popUpHeader, showPopUp, showPopUpCart, showPopUpHeader }) {
  return (
    <>
      <Header 
        popUpHeader={popUpHeader} 
        showPopUpHeader={showPopUpHeader} 
        popUpCart={popUpCart} 
        showPopUpCart={showPopUpCart} 
        showPopUp={showPopUp} 
        popUp={popUp} 
      />
      <div className={`content-wrapper ${(popUp || popUpCart || popUpHeader) ? "overlay" : ""}`}>
        <Outlet />  {/* Здесь будут рендериться вложенные страницы */}
      </div>
      <Footer />
    </>
  );
}