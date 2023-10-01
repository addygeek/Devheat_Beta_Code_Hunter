import React from 'react'
import '../css/Askus.css';
import NavBar from './NavBar';
import '../css/Navbar.css';
import Sidebar from './Sidebar';
import HomeFeedpage from './HomeFeed';
// import HomeFeed from './HomeFeed';
function Askus() {
  return (
    <div className="askus">
    
       <NavBar/>
    <div className="askus__content">
        <Sidebar/>
        <HomeFeedpage/>
    </div>
       
    </div>
       
  )
}

export default Askus