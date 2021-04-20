import React, { useEffect, useState } from 'react';
import '../App.css';

function PlaceCard(){

    const[clickSave, setClickSave] = useState(false);
    
    const[filterList,setFilter]  = useState(['공원','셜록2','해리포터']);

    return (
        <div>
            <ul className="filter-lists">
                {filterList.map((a,i)=>{
                    return(
                        <Filter filterList={filterList}
                        i={i}/>
                    )
                })}
            </ul>
          <div className="folderNarray">
              <img src="" alt="icon-folder" />
              <select className="opt">
                  <option value="">관련도순</option>
                  <option value="">인기순</option>
                  <option value="">이름순</option>
              </select> 
            </div>
            {clickSave === true
             ? <ModalSave setClickSave={setClickSave}/>
             : null}
          <div className="card-box-container">
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
                <img src={process.env.PUBLIC_URL+"/img/Space/card@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_2@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_3@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_4@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_5@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_6@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_7@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_8@3x.png" }alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_9@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_10@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_11@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_12@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_13@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_14@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card-done_2@3x.png" }alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card-done_3@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card-done@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card@3x.png"} alt=""/>
            </div>
          </div>
          <div className="pre-nxt-page-btn">
            <button>&lt;</button>
            <p>1</p>
            <button>&gt;</button>
          </div>
        </div>
    )
}
function Filter(props){
    return(
    <li className="filter-list">
        <button className="delete">X</button>
        <p>{props.filterList[props.i]}</p>
    </li>
    )
    
}

function ModalSave(props){

    return(
        <div className="modal-save">
          <button onClick={()=>{props.setClickSave(false)}}>X</button>
          <p>대영 박물관을 내 폴더 속에 저장! <br/> 지금 확인하러 갈래요?</p>
          <button onClick={()=>{console.log('바로가기 모달 만들어야함')}}>바로가기</button>
        </div>
    )    
}

export default PlaceCard;

