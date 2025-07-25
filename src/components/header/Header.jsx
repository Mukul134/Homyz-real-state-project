import React, {useState} from 'react';
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
// import { Button } from 'react bootstrap';
import './Header.css'; 

function Header() {
  const [menuOpened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter padding innerWidth h-container">
           <img src="./logo.png" alt="logo" width={100}  /> 

              <OutsideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>

           <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#">
                Residencies
            </a>
            <a href="#">Our Value</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
            {/* <Button className="button "> */}
            <a href="#" className="button">Contact</a>
            {/* </Button> */}
           </div>
           </OutsideClickHandler>
            {/* menu Icon */}
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30}/>
        </div>

        </div>
        
    </section>
  )
}

export default Header
