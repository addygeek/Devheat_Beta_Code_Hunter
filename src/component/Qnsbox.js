
import React from 'react'
import '../css/HomeFeed.css'
import '../css/Qnsbox.css'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function Qnsbox() {
  const user=useSelector(selectUser);
  return (
    <div className="qnsbox">
      <div className="qnsbox__askus">
            <p>Ask a Question</p>
        </div>
        <div className="qnsbox_info">
            {/* <Avatarr/> */}
            <img src={user.photo}/>
            <h5>{user.displayName ? user.displayName : user.email}</h5>
        </div>
        
    </div>
  );
}

export default Qnsbox;