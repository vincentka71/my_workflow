import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './explopage.styles.css';
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import PopUp from "../../components/popup/popup.component";


import {ReactComponent as ZoomExplo} from "../../assets/zoomexplo.svg"
import {ReactComponent as Info} from '../../assets/information.svg';
import {ReactComponent as GlassOut} from '../../assets/glassout.svg';

const ExploPage = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const routeGeneralworkflow = () =>{ 
      let path = "generalpage"; 
      navigate(`/${path}`);
    }


    return (
        <div className='explopage'>
        <Header title = {"Workflow"} subtitle={"Phase exploratoire "} backgroundcolor = {"#6AB9B4"} />
        <div className="content">
            <button className = "information-button" onClick={togglePopup}>
            <Info className="info"/>
            {isOpen && <PopUp content={<>
                <b>Information</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </>} handleClose={togglePopup} />}
            </button>
            <div className='explogeneral'>
                <ZoomExplo className="explo-image" />
                <button className='glassout-explo' type='submit' onClick={routeGeneralworkflow}>
                    <GlassOut className="glassout"/>
                </button>
            </div>
        </div>
    <Footer text = {"Workflow - partie Exploratoire"} backgroundcolor = {"#6AB9B4"}/>
    </div>
)
}
  
export default ExploPage;