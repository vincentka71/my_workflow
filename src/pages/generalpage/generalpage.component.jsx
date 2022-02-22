import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./generalpage.styles.css";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import PopUp from "../../components/popup/popup.component";

import { ReactComponent as WorkflowOverall } from "../../assets/workflow_overall.svg";

import { ReactComponent as ZoomIn } from "../../assets/zoomin.svg";
import { ReactComponent as Info } from "../../assets/information.svg";
import { ReactComponent as GlassIn } from "../../assets/glassin.svg";

const GeneralPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const routeZoomworkflow = () => {
    let path = "zoomworkflow";
    navigate(`/${path}`);
  };

  const routeExplopage = () => {
    let path = "workflowexplo";
    navigate(`/${path}`);
  };

  const routePreopspage = () => {
    let path = "workflowpreops";
    navigate(`/${path}`);
  };

  const routeOpspage = () => {
    let path = "workflowops";
    navigate(`/${path}`);
  };
  
  return (
    <div className="generalpage">
      <Header
        title={"Présentation du Workflow"}
        subtitle={"Accueil"}
        backgroundcolor={"#6AB9B4"}
      />
      <div className="content">
        <button
          className="zoom-button"
          type="submit"
          onClick={routeZoomworkflow}
        >
          <ZoomIn className="zoomin" />
        </button>
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
        <WorkflowOverall className="workflow-image" />
        <button
          className="glassin-explo"
          type="submit"
          onClick={routeExplopage}
        >
          <GlassIn className="glassin" />
        </button>
        <button
          className="glassin-preops"
          type="submit"
          onClick={routePreopspage}
        >
          <GlassIn className="glassin" />
        </button>
        <button 
            className="glassin-ops" 
                type="submit" onClick={routeOpspage}>
          <GlassIn className="glassin" />
        </button>
      </div>
      {/* </div> */}

      <Footer
        text={"Présentation du Workflow - vue générale"}
        backgroundcolor={"#6AB9B4"}
      />
    </div>
  );
};

export default GeneralPage;
