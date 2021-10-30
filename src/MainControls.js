import React, { useEffect } from "react";
import {clearSessionInterval} from "./Display";
import {clearBreakInterval} from "./Display";
import alarm from "./alarm.mp3";
function MainControls({sessionRunTime, breakRunTime, playSession, playBreak, showBreakCtrl, showSessionCtrl, change, ctrl, action}){

  useEffect(()=>{
    const audio = document.getElementsByTagName("audio")[0];
    if(sessionRunTime < 0){
      clearSessionInterval();
      audio.play();
      change(action("bON"));
      change(ctrl("bCTRL", true));
      change(action("s0"));
    }
  }, [sessionRunTime]);

  useEffect(()=>{
    const audio = document.getElementsByTagName("audio")[0];
    if(breakRunTime < 0){
      clearBreakInterval();
      audio.play();
      change(action("sON"));
      change(ctrl("sCTRL", true));
      change(action("b0"));
    }
  }, [breakRunTime])

  const handleSessionPlayClick=()=>{
    if(playSession){
      change(action("sOFF"));
    }
    else{
      change(action("sON"));
    }
  }

  const handleBreakPlayClick=()=>{
    if(playBreak){
      change(action("bOFF"));
    }
    else{
      change(action("bON"));
    }
  }

  const handleResetClick=()=>{
    const audio = document.getElementsByTagName("audio")[0];
    audio.pause();
    audio.currentTime = 0;
    change(action("0"));
  }

  return (
    <div>
      {showSessionCtrl && <button id="start_stop" onClick={handleSessionPlayClick}>PLAYS / PAUSE</button>}
      {showBreakCtrl && <button id="start_stop" onClick={handleBreakPlayClick}>PLAYB / PAUSE</button>}
      <button id="reset" onClick={handleResetClick}>RESET</button>
      <audio id="beep" src={alarm} type="audio/mp3">Your brower does not support audio</audio>
    </div>  
  )
}

export default MainControls;