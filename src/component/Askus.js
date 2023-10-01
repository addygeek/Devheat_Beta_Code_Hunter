import React from 'react'
import '../css/Askus.css';
import NavBar from './NavBar';
import '../css/Navbar.css';
import Sidebar from './Sidebar';
// import HomeFeed from './HomeFeed';
function Askus() {
  return (
    <div className="askus">
    
       <NavBar/>

        <Sidebar/>
        {/* <HomeFeed/> */}
        </div>
       
  )
}

export default Askus