import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
function App() {
  return (
    <div className="App">
        {
        /* <Greet name="bruce"><p>props functional children</p></Greet>
        <Welcome name="banner"><p>props class children</p></Welcome>
        <Message></Message> 
        <Counter></Counter>
        <ParentComponent />
        <FragmentDemo />
        <ParentComp />*/}
        <Counter render={(count,incrementCount)=>{<ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}}/>
        <Counter render={(count,incrementCount)=>{<HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo >}}/>
    </div>
  );
}

export default App;
