import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import React from 'react';
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF';
import CounterTwo from './components/CounterTwo';
export const UserContext=React.createContext();
export const ChannelContext=React.createContext()
function App() {
  return (
    <div className="App">
      <CounterTwo />
    </div>
  );
}

export default App;
