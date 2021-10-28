import React from "react";

function MainControls({changeSession, changeBreak}){

  // const handlePlayClick=()=>{
  //   if(play){
  //     setPlay(false);
  //   }else{
  //     setPlay(true);
  //   }
  // }

  const handleResetClick=()=>{
    changeBreak("0");
  }

  return (
    <div>
      {/* <button onClick={handlePlayClick}>PLAY / PAUSE</button> */}
      <button onClick={handleResetClick}>RESET</button>
    </div>
  )
}

export default MainControls;