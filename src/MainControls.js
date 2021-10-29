import React, { useEffect } from "react";

function MainControls({changeSession, changeBreak, session, breakVal, changeCtrl}){

  useEffect(()=>{
    if(session.sessionTime === 0){
      changeSession("sOFF");
      changeCtrl("bCTRL", true);
      changeCtrl("sCTRL", false);
      changeBreak("bON");
    }
  }, [session.sessionTime]);

  useEffect(()=>{
    if(breakVal.breakTime === 0){
      changeBreak("bOFF");
      changeCtrl("sCTRL", true);
      changeCtrl("bCTRL", false);
      changeSession("sON");
    }
  }, [breakVal.breakTime])

  const handleSessionPlayClick=()=>{
    if(session.playSession){
      changeSession("sOFF");
    }
    else{
      changeSession("sON");
    }
  }

  const handleBreakPlayClick=()=>{
    if(breakVal.playBreak){
      changeBreak("bOFF");
    }
    else{
      changeBreak("bON");
    }
  }

  const handleResetClick=()=>{
    changeBreak("0");
  }
  console.log("session.showSessionCtrl", session.showSessionCtrl);
  console.log("breakVal.showBreakCtrl ", breakVal.showBreakCtrl);
  return (
    <div>
      {session.showSessionCtrl && <button onClick={handleSessionPlayClick}>PLAYS / PAUSE</button>}
      {breakVal.showBreakCtrl && <button onClick={handleBreakPlayClick}>PLAYB / PAUSE</button>}
      <button onClick={handleResetClick}>RESET</button>
    </div>  
  )
}

export default MainControls;