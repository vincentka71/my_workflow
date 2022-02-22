import React from "react";
import { useNavigate } from "react-router-dom";

import './homepage.styles.css';
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";

import{ReactComponent as HomeImage } from '../../assets/homepage_image.svg'


const HomePage = () => {

  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    let path = "generalpage"; 
    navigate(`/${path}`);
  }

  return (
    <div className='homepage'>
    <Header title = {"De l'idée à la mise en service"} subtitle={"Espace de partage"} backgroundcolor = {"#DE6161"} />
    <div className="content">
      <HomeImage className="homepageimage" />
      <Button type='submit' onClick={routeChange}> C'est parti ! </Button>
    </div>
    <Footer text = {"De l'idée à la mise en service"} backgroundcolor = {"#DE6161"}/>
    </div>
  )
}
  
export default HomePage;
  