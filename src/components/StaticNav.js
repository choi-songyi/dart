import React from 'react';
import '../App.css';
import { useHistory } from 'react-router';

function StaticNav(){

  let history = useHistory();
  
    return (
      <nav className="static-nav">
        <img src="./img/뉴로고.png" alt="logo" className="logo" onClick={()=>{history.push('/')}}/>
        <img src="./img/Myplan.png"
    alt="myPlan" className="icon-myplan" onClick={()=>{history.push('/myPlan')}}/>
        <img src="./img/Profile.png" alt="profile"
        className="icon-profile" onClick={()=>{history.push('/profile')}}/>
        
      </nav>
    )
}

export default StaticNav ; 