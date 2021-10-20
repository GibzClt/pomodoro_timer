import React from "react";
import Title from "./Title";
import DurationControls from "./DurationControls";
import Display from "./Display";
import MainControls from "./MainControls";

function ClockTimer(){
  return (
    <div id="clock-timer">
      <Title title="Pomodoro Timer"/>
      <DurationControls />
      <Display />
      <MainControls />
    </div>
  )
}

export default ClockTimer;