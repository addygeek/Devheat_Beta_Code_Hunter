import React from 'react'
import { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import '../components/UserProfile.css'
import "./Feed.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

function UserProfilemodel() {
const [modalOpen, setModalOpen] = useState(false);
const users = useSelector(selectUser);
const getemail = (email) => { return email }
const getusername = (email) => { return email.substring(0, email.indexOf('@')) }
    return (
    <div>
         <div className="App">
      <button onClick={setModalOpen}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div>
        <div className='BODY'>
    <div className='top'>
        <h1>Dashboard</h1>
    </div>
    <div className='box'>
        <p>Name: {getusername(users.email).toUpperCase()} </p>
        <p>User Name: {getusername(users.email)} </p>
        <p>E-mail:  {getemail(users.email)} </p>
    </div>
</div>
        </div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
    </div>
  )
}

export default UserProfilemodel