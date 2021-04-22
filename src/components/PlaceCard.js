import React, { useEffect, useState } from 'react';
import '../App.css';

function PlaceCard(){

     const[clickSave, setClickSave] = useState(false);
     const[clickFolder, setClickFolder] = useState(false);
    
    const[filterList,setFilter]  = useState(['공원','셜록2','해리포터']);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setClickSave(false);
        return()=>{clearTimeout(timer)}
        },2500)
    },[clickSave])

    useEffect(()=>{
        if(clickFolder===true){
            document.body.style.overflow="hidden";
        };
        return()=>{
            document.body.style.overflow = "unset"
        }
    },[clickFolder]);
  

    return (
        <div>
            <ul className="filter-lists">
                {filterList.map((a,i)=>{
                    return(
                        <Filter filterList={filterList} a={a} setFilter={setFilter}
                        i={i}/>
                    )
                })}
            </ul>
          <div className="folderNarray">
              <img src={process.env.PUBLIC_URL+"/img/icon-folder@3x.png"} alt="icon-folder" onClick={()=>{setClickFolder(true)}}/>
              <select className="opt">
                  <option value="">관련도순</option>
                  <option value="">인기순</option>
                  <option value="">이름순</option>
              </select> 
            </div>
            {clickSave === true
             ?<SaveModal setClickSave={setClickSave} setClickFolder={setClickFolder}/>
             : null}
            {clickFolder === true
             ? <FolderModal setClickFolder={setClickFolder}/>
             : null}
          <div className="card-box-container">
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
                <img src={process.env.PUBLIC_URL+"/img/Space/card@3x.png"} alt=""/>
            </div>
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
                <img src={process.env.PUBLIC_URL+"/img/Space/card_2@3x.png"} alt=""/>
            </div>
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
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
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
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
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
                <img src={process.env.PUBLIC_URL+"/img/Space/card_13@3x.png"} alt=""/>
            </div>
            <div className="card-box">
                <img src={process.env.PUBLIC_URL+"/img/Space/card_14@3x.png"} alt=""/>
            </div>
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
                <img src={process.env.PUBLIC_URL+"/img/Space/card-done_2@3x.png" }alt=""/>
            </div>
            <div className="card-box" onClick={()=>{setClickSave(true)}}>
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
        <button className="delete" onClick={()=>{
            let updateArr = [...props.filterList];
            updateArr.splice(props.i,1);
            props.setFilter(updateArr);
        }}>X</button>
        <p>{props.a}</p>
    </li>
    )
    
}

function FolderModal(props){
    return(
        <div className="modal-folder-container">
            <div className="modal-folder">
                <img src={process.env.PUBLIC_URL+'/img/folder/path@3x.png'} alt="close-icon" className="close" onClick={()=>{props.setClickFolder(false)}}/>
                <span>자유로운 방랑객7님이 <span className="bold">저장한 장소 리스트</span>에요.</span>
                <p>📍 내 폴더 &gt; 영국</p>
                <div className="lists-wrap">
                    <div className="saved-place-lists">
                    <div className="saved-place-list">
                        <label>
                            <img src={process.env.PUBLIC_URL+'/img/folder/image-2@3x.png'} alt=""/>
                            <br/>
                            <input type="checkbox" name="" id=""/>
                            <span>Waterloo Park</span>
                        </label>
                    </div>
                    <div className="saved-place-list">
                        <label>
                            <img src={process.env.PUBLIC_URL+'/img/folder/image-3@3x.png'} alt=""/>
                            <br/>
                            <input type="checkbox" name="" id=""/>
                            <span>Waterloo Park</span>
                        </label>
                    </div>
                    <div className="saved-place-list">
                        <label>
                            <img src={process.env.PUBLIC_URL+'/img/folder/image-4@3x.png'} alt=""/>
                            <br/>
                            <input type="checkbox" name="" id=""/>
                            <span>Waterloo Park</span>
                        </label>
                    </div>
                    <div className="saved-place-list">
                        <label>
                            <img src={process.env.PUBLIC_URL+'/img/folder/image-5@3x.png'} alt=""/>
                            <br/>
                            <input type="checkbox" name="" id=""/>
                            <span>Waterloo Park</span>
                        </label>
                    </div>
                    <div className="saved-place-list">
                        <label>
                            <img src={process.env.PUBLIC_URL+'/img/folder/image-6@3x.png'} alt=""/>
                            <br/>
                            <input type="checkbox" name="" id=""/>
                            <span>Waterloo Park</span>
                        </label>
                    </div>
                    <div className="saved-place-list">
                        <label>
                            <img src={process.env.PUBLIC_URL+'/img/folder/image-7@3x.png'} alt=""/>
                            <br/>
                            <input type="checkbox" name="" id=""/>
                            <span>Waterloo Park</span>
                        </label>
                    </div>
                    <div className="saved-place-list">
                        <label>
                            <img src={process.env.PUBLIC_URL+'/img/folder/image-8@3x.png'} alt=""/>
                            <br/>
                            <input type="checkbox" name="" id=""/>
                            <span>Waterloo Park</span>
                        </label>
                    </div>
                </div>
                </div>
                <button className="cancel">선택 취소</button>
                <button className="del-saved">삭제하기</button>
            </div>
        </div>
        
    )    
}

function SaveModal(props){
    return(
        <div className="modal-save-container">
            <div className="modal-save">
                <button onClick={()=>{props.setClickSave(false)}}>X</button>
                <p>대영 박물관을 내 폴더 속에 저장! <br/> 지금 확인하러 갈래요?</p>
                <button onClick={()=>{
                    props.setClickFolder(true);
                    props.setClickSave(false)}}>바로가기</button>
            </div>
        </div>
        
    )    
}

export default PlaceCard;

