import React from 'react';
import '../main';
import '../App.css';
import { useHistory } from 'react-router';

function Tabs(){

    let history = useHistory();
    
    return (
        <ul className="tabs">
            <button onClick={()=>{history.push('/dart')}} className="tab1">다트</button>
            <button onClick={()=>{history.push('/place')}} lassName="tab2">관광지</button>
            <button onClick={()=>{history.push('/schedule')}} lassName="tab3">일정</button>
        </ul>
    )
}

export default Tabs;






