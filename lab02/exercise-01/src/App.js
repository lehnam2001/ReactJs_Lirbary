import './App.css';
import Clock from './components/clock/Clock';
import CurrencyConvert from './components/currency/Currency_Convert'
function App() {
  return (
      <>
        <div className="container-clock">
          <h1 className="title-clock">Bai 1</h1>
          <ul className="list-clock">
            <Clock city="Việt Nam" offset="+7"/>
            <Clock city="California" offset="-8"/>
            <Clock city="New York" offset="-5"/>
            <Clock city="London" offset="0"/>
            <Clock city="Sydney" offset="+11"/>
            <Clock city="China" offset="+8"/>
            <Clock city="Tokyo" offset="+9"/>
            <Clock city="Berlin" offset="+1"/>
          </ul>
        </div>

        <div>
          <h1 className="title-currency">Bai 2</h1>
          <CurrencyConvert/>
        </div>
      </>
  );  
}

export default App;
