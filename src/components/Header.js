import React from 'react';


const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Beer
        <span className="ofThe">
          <span className="of">19</span>
          <span className="the">26</span>
        </span>
        Store
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}






export default Header;
