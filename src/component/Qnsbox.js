import React from 'react'
import '../css/HomeFeed.css'
import '../css/Qnsbox.css'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function Qnsbox() {
  const user=useSelector(selectUser);
  return (
    <div className="qnsbox">
        <div className="qnsbox_info">
            {/* <Avatar/> */}
            <img src={user.photo}/>
            <h5>{user.displayName ? user.displayName : user.email}</h5>
        </div>
        <div className="qnsbox__askus">
            <p>Ask your question, please!</p>
        </div>
    </div>
  );
}

export default Qnsbox;