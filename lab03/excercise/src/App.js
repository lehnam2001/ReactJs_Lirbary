import AppCalculator from './components/calculator/AppCalculator';
import CountdownTimer from './components/countdown/CountdownTimer';
import RandomNumber from './components/random/RandomNumber';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bài 1:App Simple Calculator</h1>
      <AppCalculator />
      <h1>Bài 2:App Simple Countdown Timer</h1>
      <CountdownTimer />
      <h1>Bài 3:App Simple Random</h1>
      <RandomNumber />
    </div>
  );
}

export default App;
