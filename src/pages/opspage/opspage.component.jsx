import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./opspage.styles.css";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import PopUp from "../../components/popup/popup.component";
import Button from "../../components/button/button.component";

import { ReactComponent as ZoomOps } from "../../assets/zoomops.svg";
import { ReactComponent as Info } from "../../assets/information.svg";
import { ReactComponent as GlassOut } from "../../assets/glassout.svg";

const OpsPage = (props) => {
  
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const [buttonColor, setButtonColor] = useState();

  useEffect(() => {
    setButtonColor(props.bgColor);
  }, [])

  const enter = () => {
    setButtonColor(props.hoverBgColor)
  }
  const leave = () => {
    setButtonColor(props.bgColor)
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const routeGeneralworkflow = () => {
    let path = "generalpage";
    navigate(`/${path}`);
  };

  const routePreopspage = () => {
    let path = "workflowpreops";
    navigate(`/${path}`);
  };

  const button_preops_style = {
    backgroundColor: buttonColor,
    transform: 'rotate(0.75turn)',
  };

  return (
    <div className="opspage">
      <Header
        title={"Workflow"}
        subtitle={"Phase Opérationnelle "}
        backgroundcolor={"#6AB9B4"}
      />
      <div className="content">
        <button className="information-button" onClick={togglePopup}>
          <Info className="info" />
          {isOpen && (
            <PopUp
              content={
                <>
                  <b>Information</b>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </>
              }
              handleClose={togglePopup}
            />
          )}
        </button>
        <button
          className="glassout-ops"
          type="submit"
          onClick={routeGeneralworkflow}
        >
          <GlassOut className="glassout" />
        </button>
        <ZoomOps className="ops-image" />
        <Button id="preops" style={ button_preops_style } onMouseLeave={leave} onMouseEnter={enter} onClick={routePreopspage} >
        {" "}
        Pré-Opérationnel{" "}
      </Button>
      </div>
      <Footer
        text={"Workflow - Partie Opérationnelle"}
        backgroundcolor={"#6AB9B4"}
      />
    </div>
  );
};

export default OpsPage;
