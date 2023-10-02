
import React from 'react'
import '../css/HomeFeed.css'
import '../css/Qnsbox.css'
function Qnsbox() {
  return (
    <div className="qnsbox">
      <div className="qnsbox__askus">
            <p>Ask a Question</p>
        </div>
        <div className="qnsbox_info">
            {/* <Avatar/> */}
            <img src="/avertar.jpg"/>
            <h5>Username</h5>
        </div>
        
    </div>
  )
}

export default Qnsbox