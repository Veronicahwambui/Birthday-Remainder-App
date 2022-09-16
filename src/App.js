
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Empbirthday from "./components/Empbirthday"
import Empdetails from "./components/Empdetails"
import Error from "./components/Error"

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            {/* <li>
              <Link to="/empdetails">Empdetails</Link>
            </li> */}
            {/* <li>
              <Link to="/empbirthday">Empbirthday</Link>
            </li> */}
            {/* <li>
              <Link to="/does-not-exist">Catch all route</Link>
            </li> */}
          </ul>
        </nav>


        <Routes>
          <Route path="/empbirthday" element={<Empbirthday/>} />
          {/*  handle dynamic path */}
          <Route path="/empdetails" element={<Empdetails/>} />
          <Route path="/" element={<Home />} /> 
          <Route  component= {< Error/> }
          />
        </Routes>
      </div>
    </Router>
  );
}





