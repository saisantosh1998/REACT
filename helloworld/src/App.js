import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
        {
        /* <Greet name="bruce"><p>props functional children</p></Greet>
        <Welcome name="banner"><p>props class children</p></Welcome>
        <Message></Message> */
        <Counter></Counter>
        }
    </div>
  );
}

export default App;
