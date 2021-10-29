import React, { useEffect } from "react";

function MainControls({changeTimer, timer, changeCtrl}){

  useEffect(()=>{
    if(timer.sessionRunTime === -1){
      changeTimer("sOFF");
      changeCtrl("bCTRL", true);
      changeTimer("s0");
      changeTimer("bON");
    }
  }, [timer.sessionRunTime]);

  useEffect(()=>{
    if(timer.breakRunTime === -1){
      changeTimer("bOFF");
      changeCtrl("sCTRL", true);
      changeTimer("b0");
      changeTimer("sON");
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
  console.log("session.showSessionCtrl", timer.showSessionCtrl);
  console.log("breakVal.showBreakCtrl ", timer.showBreakCtrl);
  return (
    <div>
      {timer.showSessionCtrl && <button id="start_stop" onClick={handleSessionPlayClick}>PLAYS / PAUSE</button>}
      {timer.showBreakCtrl && <button id="start_stop" onClick={handleBreakPlayClick}>PLAYB / PAUSE</button>}
      <button id="reset" onClick={handleResetClick}>RESET</button>
    </div>  
  )
}

export default MainControls;