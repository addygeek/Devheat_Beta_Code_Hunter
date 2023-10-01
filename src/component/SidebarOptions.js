import React from 'react'
import '../css/SidebarOptions.css';
import artimg from '../images/Art.png'
import astrimg from '../images/Astronomy.png'
import polimg from '../images/Politics.png'
import tecimg from '../images/Technology.png'
function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className="sidebarOption" id="firstop">
            <img
            src={tecimg}
            alt=""
            />
            <p>Technology</p>

        </div>
        <div className="sidebarOption" id="secop">
            <img
            src={artimg}
            alt=""
            />
            <p>Art</p>
        </div>
        <div className="sidebarOption" id="thiop">
            <img
            src={polimg}
            alt=""
            />
            <p>Politics</p>
        </div>
        <div className="sidebarOption" id="fouop">
            <img
            src={astrimg}
            alt=""
            />
            <p>Astronomy</p>
        </div>
        <div className="sidebarOption" id="lastop">
        <div className="add">
            <img src="/add.png" alt="" />
        </div>
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions