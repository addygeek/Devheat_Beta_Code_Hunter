import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./QnsBox.css";

export default function QuorBox() {
  const user = useSelector(selectUser);

  return (
    <div className="QnsBox">
      <div className="QnsBox__info">
        <Avatar
          src={
            user.photo
              ? user.photo
              : "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-twilio/contentbuilder/Avatar.png"
          }
          className="QnsBox__infoAvatar"
        />
        <h5>{user.displayName ? user.displayName : user.email}</h5>
      </div>
      <div className="QnsBox__qns">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}
