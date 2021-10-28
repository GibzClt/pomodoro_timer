import React from "react";
import "./DurationControls.css";

function DurationControls({changeSession, changeBreak}){
  return (
    <div id="duration-ctrls">
      <div id="break-ctrl">
        Break ctrl
        <div className="ctrls">
        <i onClick={()=>changeBreak("b+")}>up</i>
        <i onClick={()=>changeBreak("b-")}>down</i>
        </div>
      </div>
      <div id="session-ctrl">
        Session ctrl
        <div className="ctrls">
          <i onClick={()=>changeSession("s+")}>up</i>
          <i onClick={()=>changeSession("s-")}>down</i>
        </div>
      </div>
    </div>
  )
}

export default DurationControls;