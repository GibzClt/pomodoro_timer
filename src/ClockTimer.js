import React, { useReducer } from "react";
import Title from "./Title";
import DurationControls from "./DurationControls";
import Display from "./Display";
import MainControls from "./MainControls";




const initialState  = {
  sessionTime : 1500,
  breakTime : 300,
  sessionRunTime : 1500,
  breakRunTime : 300,
  playSession : false,
  playBreak : false,
  showSessionCtrl : true,
  showBreakCtrl : false
}

const reducer = (state=initialState, action)=>{
  switch(action.type){
    case "SINCREASE" : return {...state, sessionTime : state.sessionTime + 60, sessionRunTime : state.sessionRunTime + 60};
    case "SDECREASE" : return {...state, sessionTime : state.sessionTime - 60, sessionRunTime : state.sessionRunTime - 60};
    case "SSTART" : return {...state, sessionRunTime : state.sessionRunTime - 1};
    case "SPLAY" : return {...state, playSession : true};
    case "SPAUSE" : return {...state, playSession : false};
    case "SHOWSESSIONCTRL" : return {...state, showSessionCtrl : action.value, showBreakCtrl : !action.value};
    case "BINCREASE" : return {...state, breakTime : state.breakTime + 60, breakRunTime : state.breakRunTime + 60};
    case "BDECREASE" : return {...state, breakTime : state.breakTime - 60, breakRunTime : state.breakRunTime - 60};
    case "BSTART" : return {...state, breakRunTime : state.breakRunTime - 1};
    case "BPLAY" : return {...state, playBreak : true};
    case "BPAUSE" : return {...state, playBreak : false};
    case "RESET" : return initialState;
    case "SHOWBREAKCTRL" : return {...state, showBreakCtrl : action.value, showSessionCtrl : !action.value};
    case "SRESET" : return {...state, sessionRunTime : state.sessionTime, playSession: false};
    case "BRESET" : return {...state, breakRunTime : state.breakTime, playBreak : false};
    default : return state;
  }
}


const actionCreator = (type)=>{
  switch(type){
    case "b+" : return {type  : "BINCREASE"};
    case "b-" : return {type  : "BDECREASE"};
    case "s+" : return {type  : "SINCREASE"};
    case "s-" : return {type  : "SDECREASE"};
    case "0" : return {type : "RESET"};
    case "s0" : return {type : "SRESET"};
    case "b0" : return {type : "BRESET"};
    case "sON" : return {type : "SPLAY"};
    case "bON" : return {type : "BPLAY"};
    case "sOFF" : return {type : "SPAUSE"};
    case "bOFF" : return {type : "BPAUSE"};
    case "sCHANGE" : return {type : "SSTART"};
    case "bCHANGE" : return {type : "BSTART"};
  }
}

const ctrlCreator = (type, value)=>{
  switch(type){
    case "sCTRL" : return {type : "SHOWSESSIONCTRL", value};
    case "bCTRL" : return {type : "SHOWBREAKCTRL", value};
  }
}

function ClockTimer(){

  const [state, dispatch]= useReducer(reducer, initialState);

  return (
    <div id="clock-timer">
      <Title title="Pomodoro Timer"/>
      <DurationControls {...state} change={dispatch} action={actionCreator} ctrl={ctrlCreator}/>
      <Display {...state} change={dispatch} action={actionCreator} ctrl={ctrlCreator}/>
      <MainControls {...state} change={dispatch} action={actionCreator} ctrl={ctrlCreator}/>
    </div>
  )
}

export default ClockTimer;