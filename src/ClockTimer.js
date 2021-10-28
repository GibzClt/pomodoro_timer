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
}

const sessionReducer = (state=initialState, action)=>{
  switch(action.type){
    case "SINCREASE" : return {...state, sessionTime : state.sessionTime + 60};
    case "SDECREASE" : return {...state, sessionTime : state.sessionTime - 60};
    case "RESET" : return {sessionTime : 1500, breakTime : 300};
    default : return state;
  }
}

const breakReducer = (state=initialState, action)=>{
  switch(action.type){
    case "BINCREASE" : return {...state, breakTime : state.breakTime + 60};
    case "BDECREASE" : return {...state, breakTime : state.breakTime - 60};
    case "RESET" : return {sessionTime : 1500, breakTime : 300};
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
  }
}

const mapStateToProps = (state)=>{
  return {
    session  : state.session,
    breakVal : state.breakVal
  }
}

const mapDispatchToProps = (dispatch)=>{
  console.log(dispatch)
  return{
    changeSession : (type)=>dispatch(actionCreator(type)),
    changeBreak : (type)=>dispatch(actionCreator(type))
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



// function ClockTimer(){
//   const [sessionTime, setSessionTime] = useState(1500);
//   const [breakTime, setBreakTime] = useState(300);
//   const [play, setPlay] = useState(false);

//   useEffect(()=>{
//     let interval = setInterval(func, 1000);
//     if(!play){
//       clearInterval(interval);
//     }
//     return ()=>clearInterval(interval);
//   }, [sessionTime, play]);

//   function func(){
//     if(!play){
//       return;
//     }
//     setSessionTime(sessionTime - 1);
//     console.log(sessionTime);
//   }

//   return (
//     <div id="clock-timer">
//       <Title title="Pomodoro Timer"/>
//       <DurationControls session={sessionTime} breakVal = {breakTime} setSession={setSessionTime} setBreak={setBreakTime}/>
//       <Display session={sessionTime} breakVal={breakTime} setSession={setSessionTime} setBreak={setBreakTime}/>
//       <MainControls play={play} setPlay={setPlay} setSession={setSessionTime} setBreak={setBreakTime}/>
//     </div>
//   )
// }

export default ClockTimer;