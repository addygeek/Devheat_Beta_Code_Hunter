import React, { useState } from "react";
import Feed from "./Feed.js";
import AskHeader from "./AskHeader.js";
import "./AskUs.css";
import Sidebar from "./Sidebar.js";
import Widget from "./Widget.js";

import { FilterContext } from "./filter.js"
function AskUs() {


  const [filter, setFilter] = useState("all");

  return (
    <div className="askus">
      <FilterContext.Provider value ={[filter, setFilter]}>
        <AskHeader/>
        <div className="AskUs__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </FilterContext.Provider>
    </div>
  );
}

export default AskUs;

