import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './homepage.styles.css';
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";

import { ReactComponent as HomeImage } from '../../assets/homepage_image.svg'


const HomePage = (props) => {
  const [buttonColor, setButtonColor] = useState();

  useEffect(() => {
    setButtonColor(props.bgColor);
  }, [])

  const navigate = useNavigate();

  const routeChange = () => {
    let path = "generalpage";
    navigate(`/${path}`);
  }
  
  const enter = () => {
    console.log("ici");
    setButtonColor(props.hoverbgColor)
  }
  const leave = () => {
    console.log("ici");
    setButtonColor(props.bgColor)
  }
  return (
    <div className='homepage'>
      <Header title={"De l'idée à la mise en service"} subtitle={"Espace de partage"} backgroundcolor={"#DE6161"} />
      <div className="content">
        <HomeImage className="homepageimage" />
        <Button id="valid" style={{ backgroundColor: buttonColor }} onMouseLeave={leave} onMouseEnter={enter} type='submit' onClick={routeChange}> C'est parti ! </Button>
      </div>
      <Footer text={"De l'idée à la mise en service"} backgroundcolor={"#DE6161"} />
    </div>
  )
}

export default HomePage;
