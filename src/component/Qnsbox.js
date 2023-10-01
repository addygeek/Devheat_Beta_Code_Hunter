import React from 'react'
import '../css/HomeFeed.css'
import '../css/Qnsbox.css'
function Qnsbox() {
  return (
    <div className="qnsbox">
        <div className="qnsbox_info">
            {/* <Avatar/> */}
            <img src="/avertar.jpg"/>
            <h5>Username</h5>
        </div>
        <div className="qnsbox__askus">
            <p>Ask your question, please!</p>
        </div>
    </div>
  )
}

export default Qnsbox