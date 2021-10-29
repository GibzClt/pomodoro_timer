import React, { useState, useEffect } from "react";
import Title from "./Title";
import DurationControls from "./DurationControls";
import Display from "./Display";
import MainControls from "./MainControls";
import {combineReducers, createStore} from 'redux';
import {Provider, connect} from 'react-redux';


const initialState  = {
  sessionTime : 1500,
  breakTime : 300,
  playSession : false,
  playBreak : false,
  showSessionCtrl : true,
  showBreakCtrl : false
}

const sessionReducer = (state=initialState, action)=>{
  switch(action.type){
    case "SINCREASE" : return {...state, sessionTime : state.sessionTime + 60};
    case "SDECREASE" : return {...state, sessionTime : state.sessionTime - 60};
    case "SSTART" : return {...state, sessionTime : state.sessionTime - 1};
    case "SPLAY" : return {...state, playSession : true};
    case "SPAUSE" : return {...state, playSession : false};
    case "RESET" : return initialState;
    case "SHOWSESSIONCTRL" : return {...state, showSessionCtrl : action.value};
    default : return state;
  }
}

const breakReducer = (state=initialState, action)=>{
  switch(action.type){
    case "BINCREASE" : return {...state, breakTime : state.breakTime + 60};
    case "BDECREASE" : return {...state, breakTime : state.breakTime - 60};
    case "BSTART" : return {...state, breakTime : state.breakTime - 1};
    case "BPLAY" : return {...state, playBreak : true};
    case "BPAUSE" : return {...state, playBreak : false};
    case "RESET" : return initialState;
    case "SHOWBREAKCTRL" : return {...state, showBreakCtrl : action.value};
    default : return state;
  }
}

const allReducers = combineReducers({
  session : sessionReducer,
  breakVal : breakReducer
});

const store = createStore(allReducers);

const actionCreator = (type)=>{
  switch(type){
    case "b+" : return {type  : "BINCREASE"};
    case "b-" : return {type  : "BDECREASE"};
    case "s+" : return {type  : "SINCREASE"};
    case "s-" : return {type  : "SDECREASE"};
    case "0" : return {type : "RESET"};
    case "sON" : return {type : "SPLAY"};
    case "bON" : return {type : "BPLAY"};
    case "sOFF" : return {type : "SPAUSE"};
    case "bOFF" : return {type : "BPAUSE"};
    case "sCHANGE" : return {type : "SSTART"};
    case "bCHANGE" : return {type : "BSTART"};
  }
}

const ctrlCreator = (type, value)=>{
  // debugger;
  switch(type){
    case "sCTRL" : return {type : "SHOWSESSIONCTRL", value};
    case "bCTRL" : return {type : "SHOWBREAKCTRL", value};
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    session  : state.session,
    breakVal : state.breakVal
  }
}

const mapDispatchToProps = (dispatch)=>{
  console.log(dispatch)
  return{
    changeSession : (type)=>dispatch(actionCreator(type)),
    changeBreak : (type)=>dispatch(actionCreator(type)),
    changeCtrl : (type, value)=>dispatch(ctrlCreator(type, value))
  }
}

const ConnectedDisplay = connect(mapStateToProps, mapDispatchToProps)(Display);
const ConnectedDurationCtrls = connect(mapStateToProps, mapDispatchToProps)(DurationControls);
const ConnectedMainCtrls = connect(mapStateToProps, mapDispatchToProps)(MainControls);

function ClockTimer(){
  return (
    <div id="clock-timer">
      <Title title="Pomodoro Timer"/>
      <Provider store={store}>
        <ConnectedDurationCtrls />
        <ConnectedDisplay />
        <ConnectedMainCtrls />
      </Provider>
    </div>
  )
}

export default ClockTimer;