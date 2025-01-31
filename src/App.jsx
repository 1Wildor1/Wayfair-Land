import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { MoreImg } from './components/MoreImg/MoreImg'

export function App() {
const [content, setContent] = useState(false)
const [popUp, setShowPopUp] = useState(false)
const [popUpCart,setPopUpCart] = useState(false)
const [popUpHeader,setPopUpHeader] = useState(false)

function changeContent() {
  debugger;
  setContent(!content);
}

const showPopUp = () =>{
  setShowPopUp(!popUp)
}
const showPopUpCart = () =>{
  setPopUpCart(!popUpCart)
}
const showPopUpHeader = () =>{
  setPopUpHeader(!popUpHeader)
}


  return (
    <div>

      {
        content? <MoreImg changeContent={changeContent}/> 
        :
         <div>
          <Header popUpHeader={popUpHeader} showPopUpHeader={showPopUpHeader} popUpCart={popUpCart} showPopUpCart={showPopUpCart} showPopUp={showPopUp} popUp={popUp}/>
          <div  className={`content-wrapper ${(popUp || popUpCart || popUpHeader) ? "overlay" : ""}`}>
            <Main changeContent={changeContent}/>
          </div>
        </div>
      }
      
      
    </div>
  )
}

