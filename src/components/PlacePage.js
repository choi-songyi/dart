import React from 'react';
import { useHistory } from 'react-router';
import '../App.css';

function PlacePage(){

    let history = useHistory();

    return (
        <div className="PlacePage">
            <div className="place-buttons">
                <button className="btn" data-key="categories" data-value="domestic">
                    국내
                </button>
                <button className="btn" data-key="categories" data-value="asia">
                    아시아
                </button>
                <button className="btn" data-key="categories" data-value="america">
                    미주
                </button>
                <button className="btn" data-key="categories" data-value="europe">
                    유럽
                </button>
                <button className="btn" data-key="categories" data-value="africa">
                   아프리카
                </button>
                <button className="btn" data-key="categories" data-value="oceania">
                    오세아니아
                </button>
                <button className="btn" data-key="categories" data-value="etc">
                    기타
                </button>
            </div>
            <div className="place-lists">
                <div className="place-thumbnail-box">
                    <img src="./img/Space/oval-copy-4@3x.png" alt="Berlin" className="place-list"/>
                    <div className="place-name" onClick={()=>{history.push('/placeDetail')}}>Berlin</div>
                </div>
                <div className="place-thumbnail-box">
                <img src="./img/Space/oval.png" alt="London" className="place-list"/>
                    <div className="place-name"  onClick={()=>{history.push('/placeDetail')}}>London</div>
                </div>
                <div className="place-thumbnail-box">
                    <img src="./img/Space/oval-copy@3x.png" alt="Helsinki" className="place-list"/>
                    <div className="place-name" onClick={()=>{history.push('/placeDetail')}}>Helsinki</div>
                </div>
                <div className="place-thumbnail-box">
                    <img src="./img/Space/oval-copy-2@3x.png" alt="Porto" className="place-list"/>
                    <div className="place-name" onClick={()=>{history.push('/placeDetail')}}>Porto</div>
                </div>
                <div className="place-thumbnail-box">
                    <img src="./img/Space/oval-copy-3@3x.png" alt="Nice" className="place-list"/>
                    <div className="place-name" onClick={()=>{history.push('/placeDetail')}}>Nice</div>
                </div>
                <div className="place-thumbnail-box">
                    <img src="./img/Space/oval-copy-8@3x.png" alt="Madrid" className="place-list"/>
                    <div className="place-name" onClick={()=>{history.push('/placeDetail')}}>Madrid</div>
                </div>
                <div className="place-thumbnail-box">
                    <img src="./logo192.png" alt="Place" className="place-list"/>
                    <div className="place-name" onClick={()=>{history.push('/placeDetail')}}>Place</div>
                </div>
                <div className="place-thumbnail-box">
                    <img src="./logo192.png" alt="Place" className="place-list"/>
                    <div className="place-name" onClick={()=>{history.push('/placeDetail')}}>Place</div>
                </div>
            </div>
        </div>
    )
}

export default PlacePage;

