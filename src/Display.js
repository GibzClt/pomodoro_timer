import React, { useEffect } from "react";

let sessionInterval;
let breakInterval;
function Display({timer, changeTimer}){
  useEffect(()=>{
    if(timer.playSession){
       sessionInterval = setInterval(()=>changeTimer("sCHANGE"), 1000);
    }else{
      clearInterval(sessionInterval);
    }
  }, [timer.playSession]);

  useEffect(()=>{
    if(timer.playBreak){
       breakInterval = setInterval(()=>changeTimer("bCHANGE"), 1000);
    }else{
      clearInterval(breakInterval);
    }
  }, [timer.playBreak]);

  const smin = parseInt(timer.sessionRunTime/60);
  const ssec = timer.sessionRunTime % 60;
  const bmin = parseInt(timer.breakRunTime/60);
  const bsec = timer.breakRunTime % 60;

  return (
    <div>
      {timer.showSessionCtrl &&
      <>
      <h2 id="timer-label">Session</h2>
      <h3 id="time-left">{smin} : {ssec?ssec : "00"}</h3>
      </>
      }
      {timer.showBreakCtrl &&
      <>
      <h2 id="timer-label">Break</h2>
      <h3 id="time-left">{bmin} : {bsec?bsec : "00"}</h3>
      </>
      }
    </div>
  )
}

export default Display;