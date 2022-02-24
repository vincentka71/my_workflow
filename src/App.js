import React from 'react';
// import { connect } from 'react-redux';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import GeneralPage from './pages/generalpage/generalpage.component';
import ZoomPage from './pages/zoompage/zoompage.component'
import ExploPage from './pages/explopage/explopage.component';
import PreopsPage from './pages/preopspage/preops.component';
import OpsPage from './pages/opspage/opspage.component';
 
function App() {
  
    return (
      <div>
      <Routes>
      <Route path='/' element={<HomePage bgColor="#FB7575" hoverBgColor="red"/>} />
        <Route path='/generalpage' element={<GeneralPage />} />
        <Route path='/zoomworkflow' element={<ZoomPage />} />
        <Route path='/workflowexplo' element={<ExploPage />} />
        <Route path='/workflowpreops' element={<PreopsPage />} />
        <Route path='/workflowops' element={<OpsPage />} />
        

       { /* <Route path='/signin' element={SignInAndSignUpPage} /> */ }
      </Routes>
      </div>
    );
  }

  export default App;