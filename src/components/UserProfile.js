import React from 'react'
//import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import '../components/UserProfile.css'
import "./Feed.css";

function UserProfile() {
    const users = useSelector(selectUser);
    const getemail = (email) => { return email }
    const getusername = (email) => { return email.substring(0, email.indexOf('@')) }
    return (
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

  )
}

export default UserProfile