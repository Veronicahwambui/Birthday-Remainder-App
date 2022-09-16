import React from 'react'
import { Link } from 'react-router-dom';


import data from "./data"
import EmpdataAll from './EmpdataAll.js';

const Empdetails = () => {
  return (
    <div className='container'>
       <h3>

Employee  Birthday Detail </h3>
<EmpdataAll employee={data} />
     
        <Link to="/empbirthday">Today Birthday</Link>
        </div>

  )
}

export default Empdetails