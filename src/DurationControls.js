import React from "react";
import "./DurationControls.css";

function DurationControls({breakTime, sessionTime, playBreak, playSession, change, action, ctrl}){

  const handleClick=(event)=>{
    const {id} = event.target;
    switch(id){
      case "break-increment" : (breakTime < 3600 && !playBreak && !playSession) && change(action("b+"));
      break;
      case "break-decrement" : (breakTime > 60 && !playBreak && !playSession) && change(action("b-"));
      break;
      case "session-increment" : (sessionTime < 3600 && !playSession && !playBreak) && change(action("s+"));
      break;
      case "session-decrement" : (sessionTime > 60 && !playSession && !playBreak) && change(action("s-"));
      break;
    }
  }
  return (
    <div id="duration-ctrls">
      <div id="break-label">
        <h3>Break ctrl</h3>
        <div className="ctrls">
          <h4 id="break-length" >{parseInt(breakTime / 60)}</h4>
          <button id="break-increment" onClick={handleClick}>up</button>
          <button id="break-decrement" onClick={handleClick}>down</button>
        </div>
      </div>
      <div id="session-label">
        <h3>Session ctrl</h3>
        <div className="ctrls">
          <h4 id="session-length">{parseInt(sessionTime / 60)}</h4>
          <button id="session-increment" onClick={handleClick}>up</button>
          <button id="session-decrement" onClick={handleClick}>down</button>
        </div>
      </div>
    </div>
  )
}

export default DurationControls;