import React from "react";
import { useNavigate } from "react-router-dom";

import "./zoompage.styles.css";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

import { ReactComponent as WorkflowZoom } from "../../assets/workflow_zoom.svg";
import { ReactComponent as ZoomOut } from "../../assets/zoomout.svg";

const ZoomPage = () => {
  
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "generalpage";
    navigate(`/${path}`);
  };

  return (
    <div className="generalpage">
      <Header
        title={"Présentation du Workflow"}
        subtitle={"Vue générale"}
        backgroundcolor={"#6AB9B4"}
      />
      <div className="content">
        <WorkflowZoom className="workflow-zoom" />
        <button className="zoom-button" type="submit" onClick={routeChange}>
          <ZoomOut className="zoomout" />
        </button>
      </div>
      <Footer
        text={"Présentation du Workflow - vue zoomée"}
        backgroundcolor={"#6AB9B4"}
      />
    </div>
  );
};

export default ZoomPage;
