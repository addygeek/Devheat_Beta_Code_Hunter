import React, { useState, useCallback } from "react";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Modal from "react-modal";
import tagMap from "../util/sidebar_map";
import {useHistory} from 'react-router-dom';
import "./AskHeader.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { storage } from "../firebase";
import firebase from "firebase";

Modal.setAppElement("#root");

function AskHeader() {
  const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [image , setImage] = useState(null);
  const [progress, setProgress] = useState(50); 
  const uploadedImage = React.useRef(null);

  const questionName = input;

  const history = useHistory();
  const onHomeClick = useCallback(() => history.push('/'));

  const handleSlider = e => {
    console.log('setting level', e.target.value)
    setProgress(e.target.value);
  };

  const handleQuestion = async (e) => {

    e.preventDefault();
    setIsModalOpen(false);


    if(image != null) {
  
        const storageRef = storage.ref();
        const imageRef = storageRef.child(image.name);
        await imageRef.put(image);

      
        db.collection("content").add({
          user: user,
          question: input,
          tag: inputTag,
          content: inputContent,
          progress: progress,
          image: await imageRef.getDownloadURL(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
            

    } else {
      if (questionName) {
        db.collection("content").add({
          user: user,
          question: input,
          tag: inputTag,
          content: inputContent,
          progress: progress,
          image: null,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
  
    }

    setInput("");
    setInputUrl("");
    setInputTag("");
    setInputContent("");
    setProgress(50);
    setImage(null);
  };

  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <img
          src="http://localhost:3000/askuslogohome.png"
          alt="LogoNotFound"
          onClick={onHomeClick}
        />
      </div>
      <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <CottageOutlinedIcon onClick={onHomeClick}/>
        </div>
        <div className="active qHeader__icon">
        <LanguageIcon />
        </div>
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="qHeader__Rem">
      <Button className="post_button" onClick={() => setIsModalOpen(true)}>Post Content</Button>
        
     
        

       
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://img.freepik.com/premium-vector/man-avatar-icon-flat-illustration-man-avatar-vector-icon-isolated-white-background_98396-5716.jpg?w=826"
              }
            />

            <p>{user.disPlayName ? user.disPlayName : user.email}</p>
            <div className="modal__scope">
            </div>

          </div>
          
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Title your progress"
            />
            <div className="modal__fieldLink">
              <textarea id="progress" rows="15" onChange={(e) => setInputContent(e.target.value)}></textarea>
            </div>
          </div>
          <div className="modal__buttons">
            <select name="Categories" id="selectList" onChange={(e) => setInputTag(e.target.value)}>
            {Object.keys(tagMap).map((key) => (
                <option value={key}> {key} </option>
              ))}
            </select>
            <div class="slidecontainer">
        
            </div>
            <input type="file" accept="image/*" multiple = {false} onChange={(e) => setImage(e.target.files[0])} />
            
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Post
            </button>
          </div>
        </Modal>
      </div>
      <div className="lang">
      <div className="qHeader__icons">
      <div className="qHeader__logout">
          {/* <PeopleAltOutlinedIcon />  */}
          <LogoutOutlinedIcon onClick={() => auth.signOut()}/>
            
            {/* //src="https://iconarchive.com/download/i91934/icons8/windows-8/User-Interface-Logout.ico"
            alt="LogoNotFound"
          /> */}
        </div></div></div>
           
        <div className="qHeader__avatar">
          <Avatar
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://img.freepik.com/premium-vector/man-avatar-icon-flat-illustration-man-avatar-vector-icon-isolated-white-background_98396-5716.jpg?w=826"
            }
          />
        </div>
    </div>
  );
}

export default AskHeader;