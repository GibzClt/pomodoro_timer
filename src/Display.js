import React, { useEffect } from "react";

let sessionInterval;
let breakInterval;
function Display({session, breakVal, changeSession, changeBreak}){
  useEffect(()=>{
    if(session.playSession){
       sessionInterval = setInterval(()=>changeSession("sCHANGE"), 1000);
    }else{
      clearInterval(sessionInterval);
    }
  }, [session.playSession]);

  useEffect(()=>{
    if(breakVal.playBreak){
       breakInterval = setInterval(()=>changeSession("bCHANGE"), 1000);
    }else{
      clearInterval(breakInterval);
    }
  }, [breakVal.playBreak]);

  const smin = parseInt(session.sessionTime/60);
  const ssec = session.sessionTime % 60;
  const bmin = parseInt(breakVal.breakTime/60);
  const bsec = breakVal.breakTime % 60;

  return (
    <div>
      {smin} : {ssec?ssec : "00"}
      <br />
      {bmin} : {bsec?bsec : "00"}
    </div>
  )
}

export default Display;