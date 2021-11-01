import React, { useEffect } from "react";
import alarm from "./alarm.mp3";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons";
import "./MainControls.css";

let audio;

function MainControls({sessionRunTime, breakRunTime, playSession, playBreak, showBreakCtrl, showSessionCtrl, change, ctrl, action}){
  useEffect(()=>{
    audio = document.getElementsByTagName("audio")[0];
    if(sessionRunTime < 10){
      const timeLeft = document.querySelector("#time-left");
      timeLeft.style.color = "red";
    }
    if(sessionRunTime < 0){
      audio.play();
      change(ctrl("bCTRL", true));
    }
  }, [sessionRunTime]);

  useEffect(()=>{
    if(breakRunTime < 10){
      const timeLeft = document.querySelector("#time-left");
      timeLeft.style.color = "red";
    }
    if(breakRunTime < 0){
      audio.play();
      change(ctrl("sCTRL", true));
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
    audio.pause();
    audio.currentTime = 0;
    change(action("0"));
  }

  return (
    <div id="MainControls">
      {showSessionCtrl && 
        <button id="start_stop" onClick={handleSessionPlayClick}>
          { playSession ?<FontAwesomeIcon icon={faPause} />
           : <FontAwesomeIcon icon={faPlay} />}
        </button>}
      {showBreakCtrl && 
        <button id="start_stop" onClick={handleBreakPlayClick}>
          { playBreak ?<FontAwesomeIcon icon={faPause} />
           : <FontAwesomeIcon icon={faPlay} />}
        </button>}
      <button id="reset" onClick={handleResetClick}>RESET</button>
      <audio id="beep" src={alarm} type="audio/mp3">Your brower does not support audio</audio>
    </div>  
  )
}

export default MainControls;