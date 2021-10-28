import React, { useEffect } from "react";

function MainControls({changeSession, changeBreak, session, breakVal}){

  useEffect(()=>{
    if(session.sessionTime === 0){
      changeSession("sOFF");
      changeBreak("bON");
    }
  }, [session.sessionTime]);

  useEffect(()=>{
    if(breakVal.breakTime === 0){
      changeBreak("bOFF");
      changeSession("sON");
    }
  }, [breakVal.breakTime])

  const handlePlayClick=()=>{
    if(session.playSession){
      changeSession("sOFF");
    } else if(breakVal.playBreak){
      changeBreak("bOFF");
    }
    else{
      changeSession("sON");
    }
  }

  const handleResetClick=()=>{
    changeBreak("0");
  }

  return (
    <div>
      <button onClick={handlePlayClick}>PLAY / PAUSE</button>
      <button onClick={handleResetClick}>RESET</button>
    </div>
  )
}

export default MainControls;