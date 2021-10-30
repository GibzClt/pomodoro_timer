import React, { useEffect } from "react";


let scount = 0;
let bcount = 0;
let sessionInterval;
let breakInterval;
function Display({sessionRunTime, breakRunTime,playSession, playBreak, showSessionCtrl, showBreakCtrl, change, ctrl, action}){
  useEffect(()=>{
    if(playSession){
       sessionInterval = accurateInterval(()=>change(action("sCHANGE")), 1000);
    }else{
      if(scount++ !== 0){
        clearSessionInterval()
        console.log(sessionInterval)
      }
    }
  }, [playSession]);

  useEffect(()=>{
    if(playBreak){
       breakInterval = accurateInterval(()=>change(action("bCHANGE")), 1000);
    }else{
      if(bcount++ !==0){
        clearBreakInterval()
        console.log(breakInterval)
      }
    }
  }, [playBreak]);

  const smin = parseInt(sessionRunTime/60).toString().padStart(2, '0');
  const ssec = (sessionRunTime % 60).toString().padStart(2, '0');
  const bmin = parseInt(breakRunTime/60).toString().padStart(2, '0');
  const bsec = (breakRunTime % 60).toString().padStart(2, '0');

  return (
    <div>
      {showSessionCtrl &&
      <>
      <h2 id="timer-label">Session</h2>
      <h3 id="time-left">{smin}:{ssec}</h3>
      </>
      }
      {showBreakCtrl &&
      <>
      <h2 id="timer-label">Break</h2>
      <h3 id="time-left">{bmin}:{bsec}</h3>
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