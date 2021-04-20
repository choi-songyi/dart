import React from 'react';
import { Link } from 'react-router-dom';

function ColoredNav(){
    return (
        <nav className="colored-nav">
          <Link to='/dart'>
            <img src={process.env.PUBLIC_URL+"/img/뉴로고.png"} alt="logo" className="logo"/>
          </Link>
          <Link to='/myPlan'>
          <img src={process.env.PUBLIC_URL+"/img/Myplan.png"}
          alt="myPlan" className="icon-myplan"/>
          </Link>
          <Link to='/profile'>
            <img src={process.env.PUBLIC_URL+"/img/Profile.png"} alt="profile"
            className="icon-profile"/></Link>
        </nav>
    )
}

export default ColoredNav ; 