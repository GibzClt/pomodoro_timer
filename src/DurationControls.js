import React from "react";
import "./DurationControls.css";

function DurationControls({timer,changeTimer}){
  return (
    <div id="duration-ctrls">
      <div id="break-label">
        Break ctrl
        <div className="ctrls">
          <h3 id="break-length" >{parseInt(timer.breakTime / 60)}</h3>
          <button id="break-increment" onClick={()=>changeTimer("b+")}>up</button>
          <button id="break-decrement" onClick={()=>changeTimer("b-")}>down</button>
        </div>
      </div>
      <div id="session-label">
        Session ctrl
        <div className="ctrls">
          <h3 id="session-length">{parseInt(timer.sessionTime / 60)}</h3>
          <button id="session-increment" onClick={()=>changeTimer("s+")}>up</button>
          <button id="session-decrement" onClick={()=>changeTimer("s-")}>down</button>
        </div>
      </div>
    </div>
  )
}

export default DurationControls;