import './App.css';
import PlacePage from './components/PlacePage';
import SearchBar from './components/SearchBar';
import ColoredNav from './components/ColoredNav';
import Tabs from './components/Tabs';
import PlaceCard from './components/PlaceCard';
import { Link,Route,Switch,useHistory,useLocation } from 'react-router-dom';
import { Tab,Nav,Row,Col } from 'react-bootstrap'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import StaticNav from './components/StaticNav';
import { useState, useEffect } from 'react';

function App() {
  
  let history = useHistory();
  let [scrollTop, setScrollTop] = useState(false);
  let [coloredNav, setNav] = useState(false);

   const location = useLocation();
   
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("click",resetScroll);
    }
  }, [scrollTop])
  
  const resetScroll = ()=>{
    setScrollTop(false);
    setNav(false);
  }

  
  const handleScroll = () => {
    if(document.documentElement.scrollTop>930){
      setScrollTop(true);
    } else{
      setScrollTop(false);
    }
    if(scrollTop === true){
      setNav(true);
    } else{
      setNav(false);
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path='/dart'>
      <div className="main-board">
        <img src={process.env.PUBLIC_URL+"/img/bg.jpeg"} alt="bg" className="bg"/>
        <nav className="nav">
      <Link to='/dart'>
        <img src={process.env.PUBLIC_URL+"/img/뉴로고_검.png"} alt="logo" className="logo"/>
      </Link>
      <Link to='/myPlan'>
      <img src={process.env.PUBLIC_URL+ "/img/Myplan.png"}
      alt="myPlan" className="icon-myplan"/>
      </Link>
      <Link to='/profile'>
        <img src={process.env.PUBLIC_URL+"/img/Profile.png"} alt="profile"
        className="icon-profile"/></Link>
    </nav>
      </div>
      <Tabs/>
      <SearchBar/>
      <h1>다트와 함께<br/>여행의 리즈를 찍어보세요</h1>
      <div className="main-scroll-container">
        {coloredNav === true
        ? <ColoredNav/>
        : null}
        
        <img src={process.env.PUBLIC_URL+"/img/6.png"} alt="scroll-bg1" className="scroll-bg1"/>
        <img src={process.env.PUBLIC_URL+"/img/12.png"} alt="scroll-bg2" className="scroll-bg2"/>
        <p className="greeting">어서오세요! 방랑객55님 😎<br/>
        여기는 여행 일정 맛집 다트입니다.</p>
        <p className="contents-tab-title">플래너들이 다녀온 여행지를 함께 둘러보세요!</p>
        <div className="schedule-cards">
          <img src={process.env.PUBLIC_URL+"/img/Group 3_2.png"} alt="schedule1" className="schedule-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Group 3_3.png"} alt="schedule2" className="schedule-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Group 3_4.png"} alt="schedule3" className="schedule-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Group 3_5.png"} alt="schedule4" className="schedule-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Group 3_6.png"} alt="schedule5" className="schedule-card"/>
        </div>
        <Link to="/schedule"><p className="readmore-schedule">일정 더 보러가기 </p></Link>
        <div className="place-cards">
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage.png"} alt="place1" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_2.png"} alt="place2" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_3.png"} alt="place3" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_4.png"} alt="place4" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_5.png"} alt="place5" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_6.png"} alt="place6" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_7.png"} alt="place7" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_8.png"} alt="place8" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_9.png"} alt="place9" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_10.png"} alt="place10" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_11.png"} alt="place11" className="place-card"/>
          <img src={process.env.PUBLIC_URL+"/img/Card/mainpage_12.png"} alt="place12" className="place-card"/>
        </div>
        <Link to="/place"><p className="readmore-place">관광지 더 보러가기 </p></Link>
      </div>
    </Route>
        <Route path='/place'>
          <StaticNav/>
          <div className="clear"></div>
          <Tabs/>
          <SearchBar/>
          <PlacePage/>
        </Route>
        <Route path='/placeDetail'>
          <StaticNav/>
          <div className="clear"></div>
          <Tabs/>
          <SearchBar/>
          <PlaceCard/>
        </Route>
        <Route path='/schedule'>
          <StaticNav/>
          <div className="clear"></div>
          <Tabs/>
          <SearchBar/>
        </Route>
        <Route path='/myPlan'>
          <StaticNav/>
          <div className="clear"></div>
        </Route>
        <Route path='/profile'>
          <StaticNav/>
          <div className="clear"></div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
