import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
function App() {
  return (
    <div className="App">
        {
        /* <Greet name="bruce"><p>props functional children</p></Greet>
        <Welcome name="banner"><p>props class children</p></Welcome>
        <Message></Message> 
        <Counter></Counter>
        <ParentComponent />
        <FragmentDemo />*/
        <ParentComp />
        }
    </div>
  );
}

export default App;
