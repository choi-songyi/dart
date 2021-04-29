import React from 'react';
import '../App.css';
import { useHistory } from 'react-router';
import { Tab } from 'react-bootstrap';

function Tabs(){

    let history = useHistory();
    
    return (
        <ul className="tabs">
            <button onClick={()=>{
                history.push('/dart')}} className="tab1">다트</button>
            <button onClick={()=>{
                history.push('/place')}} className="tab2">관광지</button>
            <button onClick={()=>{
                history.push('/schedule')}} className="tab3">일정</button>
        </ul>
    )
}

export default Tabs;






