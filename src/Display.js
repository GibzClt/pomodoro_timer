import React, { useEffect, useState } from "react";

function Display({session, breakVal}){
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