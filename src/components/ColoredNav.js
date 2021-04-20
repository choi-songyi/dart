import React from 'react';
import { Link } from 'react-router-dom';

function ColoredNav(){
    return (
        <nav className="colored-nav">
          <Link to='/'>
            <img src="./img/뉴로고.png" alt="logo" className="logo"/>
          </Link>
          <Link to='/myPlan'>
          <img src="./img/Myplan.png"
          alt="myPlan" className="icon-myplan"/>
          </Link>
          <Link to='/profile'>
            <img src="./img/Profile.png" alt="profile"
            className="icon-profile"/></Link>
        </nav>
    )
}

export default ColoredNav ; 