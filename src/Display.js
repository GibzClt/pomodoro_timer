import React, { useEffect } from "react";
import "./Display.css";

let sessionInterval;
let breakInterval;
function Display({sessionRunTime, breakRunTime,playSession, playBreak, showSessionCtrl, showBreakCtrl, change, ctrl, action}){
  useEffect(()=>{
    if(playSession){
       sessionInterval = accurateInterval(()=>change(action("sCHANGE")), 1000);
    }else{
        clearSessionInterval()
        console.log(sessionInterval)
    }
  }, [playSession]);

  useEffect(()=>{
    if(playBreak){
       breakInterval = accurateInterval(()=>change(action("bCHANGE")), 1000);
    }else{
        clearBreakInterval()
        console.log(breakInterval)
    }
  }, [playBreak]);

  const smin = Math.floor(sessionRunTime/60).toString().padStart(2, '0');
  const ssec = (sessionRunTime % 60).toString().padStart(2, '0');
  const bmin = Math.floor(breakRunTime/60).toString().padStart(2, '0');
  const bsec = (breakRunTime % 60).toString().padStart(2, '0');

  return (
    <div id="Display">
      {showSessionCtrl &&
      <>
      <p id="timer-label">Session</p>
      <p id="time-left">{smin}:{ssec}</p>
      </>
      }
      {showBreakCtrl &&
      <>
      <p id="timer-label">Break</p>
      <p id="time-left">{bmin}:{bsec}</p>
      </>
      }
    </div>
  )
}

export function clearSessionInterval(){
  if(sessionInterval){
    sessionInterval.cancel();
  }
}

export function clearBreakInterval(){
  if(breakInterval){
    breakInterval.cancel();
  }
}

const accurateInterval = function (fn, time) {
  var cancel, nextAt, timeout, wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function () {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel
  };
};




export default Display;