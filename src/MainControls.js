import React, { useEffect } from "react";

function MainControls({changeTimer, timer, changeCtrl}){

  useEffect(()=>{
    if(timer.sessionRunTime < 0){
      changeTimer("bON");
      changeCtrl("bCTRL", true);
      changeTimer("s0");
    }
  }, [timer.sessionRunTime]);

  useEffect(()=>{
    if(timer.breakRunTime < 0){
      changeTimer("sON");
      changeCtrl("sCTRL", true);
      changeTimer("b0");
    }
  }, [timer.breakRunTime])

  const handleSessionPlayClick=()=>{
    if(timer.playSession){
      changeTimer("sOFF");
    }
    else{
      changeTimer("sON");
    }
  }

  const handleBreakPlayClick=()=>{
    if(timer.playBreak){
      changeTimer("bOFF");
    }
    else{
      changeTimer("bON");
    }
  }

  const handleResetClick=()=>{
    changeTimer("0");
  }
  // console.log("session.showSessionCtrl", timer.showSessionCtrl);
  // console.log("breakVal.showBreakCtrl ", timer.showBreakCtrl);
  return (
    <div>
      {timer.showSessionCtrl && <button id="start_stop" onClick={handleSessionPlayClick}>PLAYS / PAUSE</button>}
      {timer.showBreakCtrl && <button id="start_stop" onClick={handleBreakPlayClick}>PLAYB / PAUSE</button>}
      <button id="reset" onClick={handleResetClick}>RESET</button>
    </div>  
  )
}

export default MainControls;