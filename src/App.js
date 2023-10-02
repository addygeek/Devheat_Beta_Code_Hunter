import React from 'react';
import './App.css';
import Askus from './component/Askus';
// import {useEffect} from "react";
// //import { useSelector} from "react-redux";
// import { useDispatch,useSelector} from "react-redux";
// import Login from "../src/component/auth/Login";
// import "./App.css";
// import { login,logout,selectUser } from "./features/userSlice";
// import { auth } from "../src/firebase";
// export const userSelector = (state) => state.user; 

function App() {
  // const user =useSelector(selectUser);
  // const dispatch=useDispatch()
  // useEffect(() =>{
  //   auth.onAuthStateChanged((authUser)=>{
  //     if(authUser){
  //       dispatch(login({
  //         uid:authUser.uid,
  //         photo:authUser.photoURL,
  //         display:authUser.displayName,
  //         email:authUser.email,
  //       }));
  //       console.log(authUser);
  //     } else {
  //       dispatch(logout());
  //     }
  //   });
  // },[dispatch]);

  return (
    <div className="App">
     {/* {user ? <Askus /> : <Login/>} */}
     <Askus />
    </div>
  );
}

export default App;
