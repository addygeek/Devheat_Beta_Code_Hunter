import upimg from '../images/upvote.png'
import doimg from '../images/Downvote.png'
import coimg from '../images/Comment.png'
import liimg from '../images/Delete.png'
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
              <img src={upimg}/>

              <img src={doimg}/>

              <img src={coimg}/>
 
              <img src={liimg} id='delete'/>

              </div>
          
           </div>
    </div>
  )
}

export default Post