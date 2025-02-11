import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Main } from './components/Main/Main';
import { MoreImg } from './components/MoreImg/MoreImg';
import { SingIn } from './components/SingIn/SingIn';

export function App() {
  const [content, setContent] = useState(false);
  const [popUp, setShowPopUp] = useState(false);
  const [popUpCart, setPopUpCart] = useState(false);
  const [popUpHeader, setPopUpHeader] = useState(false);

  function changeContent() {
    setContent(!content);
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout 
            popUp={popUp} 
            popUpCart={popUpCart} 
            popUpHeader={popUpHeader} 
            showPopUp={() => setShowPopUp(!popUp)} 
            showPopUpCart={() => setPopUpCart(!popUpCart)} 
            showPopUpHeader={() => setPopUpHeader(!popUpHeader)} 
          />
        }
      >
        <Route index element={content ? <MoreImg changeContent={changeContent} /> : <Main changeContent={changeContent} />} />
      </Route>
      <Route path="/SingIn" element={<SingIn />} />
    </Routes>
  );
}
