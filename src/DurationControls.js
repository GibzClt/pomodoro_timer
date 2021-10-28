import React from "react";
import "./DurationControls.css";

function DurationControls({changeSession, changeBreak}){
  // const handleClick=(type,change)=>{
  //   switch(type){
  //     case "s" : 
  //     {
  //       if(session + change < 1){
  //         return;
  //       }
  //       setSession(session + change);
  //     }
  //     break;
  //     case "b" : {
  //       if(breakVal + change < 1){
  //         return;
  //       }
  //       setBreak(breakVal + change);
  //     };
  //     break;
  //     default:{
  //       return null;
  //     }
  //   };

  // }
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