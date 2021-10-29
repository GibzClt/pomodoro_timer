import React from "react";
import "./DurationControls.css";

function DurationControls({timer,changeTimer}){

  const handleClick=(event)=>{
    const {id} = event.target;
    switch(id){
      case "break-increment" : (timer.breakTime < 3600 && !timer.playBreak) && changeTimer("b+");
      break;
      case "break-decrement" : (timer.breakTime > 60 && !timer.playBreak) && changeTimer("b-");
      break;
      case "session-increment" : (timer.sessionTime < 3600 && !timer.playSession) && changeTimer("s+");
      break;
      case "session-decrement" : (timer.sessionTime > 60 && !timer.playSession) && changeTimer("s-");
      break;
    }
  }
  return (
    <div id="duration-ctrls">
      <div id="break-label">
        <h3>Break ctrl</h3>
        <div className="ctrls">
          <h4 id="break-length" >{parseInt(timer.breakTime / 60)}</h4>
          <button id="break-increment" onClick={handleClick}>up</button>
          <button id="break-decrement" onClick={handleClick}>down</button>
        </div>
      </div>
      <div id="session-label">
        <h3>Session ctrl</h3>
        <div className="ctrls">
          <h4 id="session-length">{parseInt(timer.sessionTime / 60)}</h4>
          <button id="session-increment" onClick={handleClick}>up</button>
          <button id="session-decrement" onClick={handleClick}>down</button>
        </div>
      </div>
    </div>
  )
}

export default DurationControls;