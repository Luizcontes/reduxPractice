import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, loggin } from './actions/index'

function App() {
  const counter = useSelector(state => state.counter)
  const logger = useSelector(state => state.logger)
  const dispatch = useDispatch()



  return (
    <div className="App">

      <h1>Counter {counter}</h1>
      <h1>Logger {logger ? "true" : "false"}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
