import React from 'react';
import '../App.css';
import {Outlet} from 'react-router-dom';


function Launch() {
    return (
      <div>
        <Outlet />
      </div>
    )
  }

export default Launch;