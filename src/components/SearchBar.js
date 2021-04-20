import React from 'react';
import '../App.css';

function SearchBar(){
    return (
        <div className="search-bar">
            <img src="./img/search.png" alt="search"
              className="icon-search"/>
            <form action="">
              <input type="text" placeholder="가고싶은 여행지를 입력해보세요" className="search-input"/>
            </form>
            <img src="./img/filter.png" alt="filter"
              className="icon-filter"/>
          </div>
    )
}

export default SearchBar;