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

  const smin = parseInt(timer.sessionRunTime/60).toString().padStart(2, '0');
  const ssec = (timer.sessionRunTime % 60).toString().padStart(2, '0');
  const bmin = parseInt(timer.breakRunTime/60).toString().padStart(2, '0');
  const bsec = (timer.breakRunTime % 60).toString().padStart(2, '0');

  return (
    <div>
      {timer.showSessionCtrl &&
      <>
      <h2 id="timer-label">Session</h2>
      <h3 id="time-left">{smin}:{ssec}</h3>
      </>
      }
      {timer.showBreakCtrl &&
      <>
      <h2 id="timer-label">Break</h2>
      <h3 id="time-left">{bmin}:{bsec}</h3>
      </>
      }
    </div>
  )
}

export default Display;