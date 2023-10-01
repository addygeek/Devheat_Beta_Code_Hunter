import React from 'react'
import '../css/Post.css'
function Post() {
  return (
    <div className="post">
           <div className='post_info'>
            {/* <Avatar/> */}
            <h4>Username</h4>
            <small>Timestamp</small>
           </div>
           <div className="post_body">
              <div className="post_question">
                <p>Questions</p>
                <button className="post_button_answer">Answer</button>
              </div>
              <div className='post_answer'>
                <p></p>
              </div>
              <img src=""/>
           </div>

           <div className="post_footer">
              <div className="post_footer_action">
              <img src="/arrowupicon.png"/>

              <img src="/arrowdownicon.png"/>

              </div>
              <img src="/share.png"/>
              <img src="/horizotal line fore more option.png"/>
           
           </div>
    </div>
  )
}

export default Post