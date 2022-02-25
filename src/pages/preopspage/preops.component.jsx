import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./preopspage.styles.css";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import PopUp from "../../components/popup/popup.component";
import Button from "../../components/button/button.component";

import { ReactComponent as ZoomPreops } from "../../assets/zoompreops.svg";
import { ReactComponent as Info } from "../../assets/information.svg";
import { ReactComponent as GlassOut } from "../../assets/glassout.svg";

const PreopsPage = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [buttonColor, setButtonColor] = useState();

  useEffect(() => {
    setButtonColor(props.bgColor);
  }, []);

  const enter = () => {
    setButtonColor(props.hoverBgColor);
  };
  const leave = () => {
    setButtonColor(props.bgColor);
  };
  const routeGeneralworkflow = () => {
    let path = "generalpage";
    navigate(`/${path}`);
  };

  const routeExplopage = () => {
    let path = "workflowexplo";
    navigate(`/${path}`);
  };

  const routeOpspage = () => {
    let path = "workflowops";
    navigate(`/${path}`);
  };

  const button_explo_style = {
    backgroundColor: buttonColor,
    transform: "rotate(0.75turn)",
  };

  const button_ops_style = {
    backgroundColor: buttonColor,
    transform: "rotate(0.25turn)",
  };

  return (
    <div className="preopspage">
      <Header
        title={"Workflow"}
        subtitle={"Phase Préopérationnelle "}
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
          className="glassout-preops"
          type="submit"
          onClick={routeGeneralworkflow}
        >
          <GlassOut className="glassout" />
        </button>
        <ZoomPreops className="preops-image" />
        <Button
          id="explo"
          style={button_explo_style}
          onMouseLeave={leave}
          onMouseEnter={enter}
          onClick={routeExplopage}
        >
          {" "}
          Exploratoire {" "}
        </Button>
        <Button
          id="ops"
          style={button_ops_style}
          onMouseLeave={leave}
          onMouseEnter={enter}
          onClick={routeOpspage}
        >
          {" "}
          Opérationnel {" "}
        </Button>
      </div>
      <Footer
        text={"Workflow - Partie Pré-opérationnelle"}
        backgroundcolor={"#6AB9B4"}
      />
    </div>
  );
};

export default PreopsPage;
